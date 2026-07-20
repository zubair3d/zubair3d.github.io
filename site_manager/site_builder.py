import os
import json
import shutil
from jinja2 import Environment, FileSystemLoader

def build_site(workspace_dir=None):
    # Always resolve templates relative to the location of site_builder.py
    app_dir = os.path.dirname(os.path.abspath(__file__))
    
    if workspace_dir:
        website_root = workspace_dir
    else:
        website_root = os.path.dirname(app_dir)
    
    data_dir = os.path.join(app_dir, "data")
    db_path = os.path.join(data_dir, "site_data.json")
    
    if not os.path.exists(db_path):
        print(f"Error: Database not found at {db_path}")
        return False
        
    with open(db_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        
    categories = data.get("categories", [])
    products = data.get("products", [])
    clients = data.get("clients", [])
    
    templates_dir = os.path.join(app_dir, "templates")
    env = Environment(loader=FileSystemLoader(templates_dir))
    
    # 1. Build index.html
    try:
        index_template = env.get_template("index.html")
        index_html = index_template.render(categories=categories, clients=clients, root_path="", active_menu="home")
        with open(os.path.join(website_root, "index.html"), "w", encoding="utf-8") as f:
            f.write(index_html)
        print("Generated index.html")
    except Exception as e:
        print(f"Error rendering index.html: {e}")
        
    # 2. Build products.html
    try:
        products_template = env.get_template("products.html")
        products_html = products_template.render(categories=categories, root_path="", active_menu="products")
        with open(os.path.join(website_root, "products.html"), "w", encoding="utf-8") as f:
            f.write(products_html)
        print("Generated products.html")
    except Exception as e:
        print(f"Error rendering products.html: {e}")
        
    # 3. Build about.html
    try:
        about_template = env.get_template("about.html")
        about_html = about_template.render(root_path="", active_menu="about")
        with open(os.path.join(website_root, "about.html"), "w", encoding="utf-8") as f:
            f.write(about_html)
        print("Generated about.html")
    except Exception as e:
        print(f"Error rendering about.html: {e}")
        
    # 4. Build contact.html
    try:
        contact_template = env.get_template("contact.html")
        contact_html = contact_template.render(root_path="", active_menu="contact")
        with open(os.path.join(website_root, "contact.html"), "w", encoding="utf-8") as f:
            f.write(contact_html)
        print("Generated contact.html")
    except Exception as e:
        print(f"Error rendering contact.html: {e}")
        
    # 5. Build Category pages under categories/ (e.g. categories/traffic-cones.html)
    categories_out_dir = os.path.join(website_root, "categories")
    os.makedirs(categories_out_dir, exist_ok=True)
    try:
        category_template = env.get_template("category.html")
        for cat in categories:
            cat_slug = cat["slug"]
            cat_products = [p for p in products if p["category_slug"] == cat_slug]
            cat_html = category_template.render(
                category=cat,
                products=cat_products,
                categories=categories,
                root_path="../",
                active_menu="products"
            )
            cat_file_path = os.path.join(categories_out_dir, f"{cat_slug}.html")
            with open(cat_file_path, "w", encoding="utf-8") as f:
                f.write(cat_html)
            print(f"Generated category page: categories/{cat_slug}.html")
    except Exception as e:
        print(f"Error rendering category pages: {e}")
        
    # 6. Build Product pages grouped by category under products/ (e.g. products/traffic-cones/eb-tc-flx75.html)
    products_out_dir = os.path.join(website_root, "products")
    # Clean products directory before rebuilding
    if os.path.exists(products_out_dir):
        for item in os.listdir(products_out_dir):
            item_path = os.path.join(products_out_dir, item)
            try:
                if os.path.isdir(item_path):
                    shutil.rmtree(item_path)
                else:
                    os.remove(item_path)
            except Exception as e:
                print(f"Error cleaning old product directory item {item}: {e}")
    os.makedirs(products_out_dir, exist_ok=True)
    
    try:
        product_template = env.get_template("product.html")
        for prod in products:
            prod_id = prod["id"]
            cat_slug = prod["category_slug"]
            
            cat_info = next((c for c in categories if c["slug"] == cat_slug), None)
            if not cat_info:
                cat_info = {"slug": cat_slug, "title": cat_slug.replace("-", " ").title()}
                
            related_products = [p for p in products if p["category_slug"] == cat_slug and p["id"] != prod_id]
            
            prod_html = product_template.render(
                product=prod,
                category=cat_info,
                related_products=related_products,
                categories=categories,
                root_path="../../",
                active_menu="products"
            )
            prod_cat_dir = os.path.join(products_out_dir, cat_slug)
            os.makedirs(prod_cat_dir, exist_ok=True)
            
            prod_file_path = os.path.join(prod_cat_dir, f"{prod_id}.html")
            with open(prod_file_path, "w", encoding="utf-8") as f:
                f.write(prod_html)
            print(f"Generated product page: products/{cat_slug}/{prod_id}.html")
    except Exception as e:
        print(f"Error rendering product pages: {e}")
        
    return True

if __name__ == "__main__":
    app_dir = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.join(app_dir, "config.json")
    custom_root = None
    if os.path.exists(config_path):
        try:
            with open(config_path, "r", encoding="utf-8") as f:
                cfg = json.load(f)
                custom_root = cfg.get("website_root")
        except Exception:
            pass
    if not custom_root:
        custom_root = os.path.dirname(app_dir)
    build_site(custom_root)
