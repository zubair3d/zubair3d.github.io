(function(){
    var script = {
 "shadow": false,
 "downloadEnabled": false,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
  "this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
  "this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
  "this.Container_2792A64E_17CC_071D_41B0_BEA23997C067",
  "this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
  "this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
  "this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "Panorama(1)",
 "hfovMin": "120%",
 "id": "panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B",
   "yaw": 53.34,
   "class": "AdjacentPanorama",
   "backwardYaw": -68.25,
   "distance": 1
  },
  {
   "panorama": "this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E",
   "yaw": 67.02,
   "class": "AdjacentPanorama",
   "backwardYaw": 87.13,
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_A831ED56_B998_9774_41C5_E85246B888F0",
  "this.overlay_AB819FAD_B9A7_73D5_41DE_E46E2E8D1E0B"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB"
 ],
 "mouseControlMode": "drag_acceleration"
},
{
 "items": [
  {
   "media": "this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9",
   "camera": "this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B",
   "camera": "this.panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A",
   "camera": "this.panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226",
   "camera": "this.panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E",
   "camera": "this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "class": "PlayList"
},
{
 "label": "Scene 41_1",
 "hfovMin": "120%",
 "id": "panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9",
   "yaw": -68.25,
   "class": "AdjacentPanorama",
   "backwardYaw": 53.34,
   "distance": 1
  },
  {
   "panorama": "this.panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_ABFA2B16_B9A9_9CF7_41DC_AEE1CBA79A65",
  "this.overlay_ABEAD791_B9AB_93CD_41E6_5678CB43EC8F",
  "this.overlay_AA2E589A_B9AB_BDFF_41D7_B713113642F5",
  "this.overlay_AAD0EF17_B9A8_94F5_41E1_D60A6D0FC3EF"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "items": [
  {
   "media": "this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9",
   "camera": "this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B",
   "camera": "this.panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A",
   "camera": "this.panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226",
   "camera": "this.panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -126.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A9720FF7_B9CF_15E9_41D6_CC350C52FB44",
 "automaticZoomSpeed": 10
},
{
 "label": "Scene 43",
 "hfovMin": "120%",
 "id": "panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9",
   "yaw": 87.13,
   "class": "AdjacentPanorama",
   "backwardYaw": 67.02,
   "distance": 1
  },
  {
   "panorama": "this.panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226",
   "yaw": -112.59,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.17,
   "distance": 1
  },
  {
   "panorama": "this.panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A",
   "yaw": 163.42,
   "class": "AdjacentPanorama",
   "backwardYaw": -94.13,
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_AB20F4CC_B9A8_955B_41E3_246F6FBDDDF4",
  "this.overlay_AB08DBF9_B9A9_933D_41B3_4C8122F7A7C0",
  "this.overlay_AB68695E_B9A8_BF77_41D7_F694C5AA074D"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A915D016_B9CF_0A2B_41E5_18E893DF4DAA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -16.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A8D10040_B9CF_0A27_41DF_67999CB13EF2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_camera",
 "automaticZoomSpeed": 10
},
{
 "label": "Scene 42",
 "hfovMin": "120%",
 "id": "panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E",
   "yaw": -94.13,
   "class": "AdjacentPanorama",
   "backwardYaw": 163.42,
   "distance": 1
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_AB085248_B9A8_AD5B_41DC_F55C119AE082"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A91BA007_B9CF_0A2A_41E5_8F87976FD4C2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A9378026_B9CF_0A6B_41CA_10AE0E5D4338",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 111.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A90ED007_B9CF_0A2A_41C0_AB72B4B68D14",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -112.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_A927B026_B9CF_0A6B_41D6_927390C8D9A8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0.34
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_A8C18036_B9CF_0A6A_41D8_8986E317B889",
 "automaticZoomSpeed": 10
},
{
 "label": "Scene 44",
 "hfovMin": "120%",
 "id": "panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226",
 "pitch": 0,
 "partial": false,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E",
   "yaw": -0.17,
   "class": "AdjacentPanorama",
   "backwardYaw": -112.59,
   "distance": 1
  },
  {
   "panorama": "this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9",
   "class": "AdjacentPanorama"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_AB603A82_B9A9_FDCF_41E4_EE88BFED193C",
  "this.overlay_AB5BFB73_B9A8_F34D_41B9_073AD8FA7CD7"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_t.jpg",
 "class": "Panorama",
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ]
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MainViewer",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 13,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "id": "Container_32CC4EA6_16EF_8891_41B3_C36F5FCE49B7",
 "left": "0%",
 "children": [
  "this.Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
  "this.Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
  "this.IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA"
 ],
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "12.832%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--- MENU"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "right": "0%",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 641,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-- SETTINGS"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_0AEF1C12_16A3_8FB1_4188_D5C88CE581C3",
 "left": 30,
 "width": 573,
 "children": [
  "this.Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
  "this.Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
  "this.Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
  "this.Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minWidth": 1,
 "height": 116,
 "top": 25,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--STICKER"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B",
 "left": "0%",
 "children": [
  "this.Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
  "this.Container_386C28AA_17CC_0B05_41B7_3334E854CA29"
 ],
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--INFO photoalbum"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_381217E8_17DC_0505_41A2_85B8D0083AEA",
 "left": "0%",
 "children": [
  "this.Container_3811F7E8_17DC_0505_417B_3406AEA143C9"
 ],
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_2792A64E_17CC_071D_41B0_BEA23997C067",
 "left": "0%",
 "children": [
  "this.Container_2792F64D_17CC_071F_415E_8686768A06D3"
 ],
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1",
 "left": "0%",
 "children": [
  "this.Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E"
 ],
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F",
 "left": "0%",
 "children": [
  "this.Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076"
 ],
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5",
 "left": "0%",
 "children": [
  "this.Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
  "this.Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27"
 ],
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "creationPolicy": "inAdvance",
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--CONTACT"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton MUTE"
 },
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed_rollover.png"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.01,
   "yaw": 53.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B, this.camera_A90ED007_B9CF_0A2A_41C0_AB72B4B68D14); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B793E8E2_B9C7_1BEB_41D1_13ED4ABEDC15",
   "pitch": -30.08,
   "hfov": 16.01,
   "yaw": 53.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A831ED56_B998_9774_41C5_E85246B888F0",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 10.16,
   "yaw": 67.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E, this.camera_A91BA007_B9CF_0A2A_41E5_8F87976FD4C2); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79068E2_B9C7_1BEB_41E6_B477646102C6",
   "pitch": -18.39,
   "hfov": 10.16,
   "yaw": 67.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB819FAD_B9A7_73D5_41DE_E46E2E8D1E0B",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton HS "
 },
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 58,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton GYRO"
 },
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed_rollover.png"
},
{
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA",
 "width": 49,
 "right": 30,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA_rollover.png",
 "bottom": 8,
 "propagateClick": false,
 "minWidth": 1,
 "height": 37,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_30AC9FB1_16E7_88F3_41B2_18944AAAD6FA.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton VR"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 15.67,
   "yaw": -68.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9, this.camera_A9720FF7_B9CF_15E9_41D6_CC350C52FB44); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79028E2_B9C7_1BEB_41E2_268E0E2B32FE",
   "pitch": -32.09,
   "hfov": 15.67,
   "yaw": -68.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ABFA2B16_B9A9_9CF7_41DC_AEE1CBA79A65",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.44,
   "yaw": 71.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79088E2_B9C7_1BEB_41E1_0034A1133564",
   "pitch": -27.32,
   "hfov": 16.44,
   "yaw": 71.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ABEAD791_B9AB_93CD_41E6_5678CB43EC8F",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 7.09,
   "yaw": 35.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79148E2_B9C7_1BEB_41AC_2B7CC9FBA9EC",
   "pitch": -19.78,
   "hfov": 7.09,
   "yaw": 35.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_AA2E589A_B9AB_BDFF_41D7_B713113642F5",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 8.03,
   "yaw": 70.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_1_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79108E2_B9C7_1BEB_41B4_0CE5B6E40B20",
   "pitch": -11.49,
   "hfov": 8.03,
   "yaw": 70.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AAD0EF17_B9A8_94F5_41E1_D60A6D0FC3EF",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.62,
   "yaw": 163.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A, this.camera_A8C18036_B9CF_0A6A_41D8_8986E317B889); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79EC8E2_B9C7_1BEB_41E1_FACBB0A2FE05",
   "pitch": -24.57,
   "hfov": 14.62,
   "yaw": 163.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB20F4CC_B9A8_955B_41E3_246F6FBDDDF4",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.28,
   "yaw": -112.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226, this.camera_A9378026_B9CF_0A6B_41CA_10AE0E5D4338); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79EB8E2_B9C7_1BEB_41B1_A4025FD87B59",
   "pitch": -20.41,
   "hfov": 14.28,
   "yaw": -112.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB08DBF9_B9A9_933D_41B3_4C8122F7A7C0",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 13.16,
   "yaw": 87.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_1_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9, this.camera_A927B026_B9CF_0A6B_41D6_927390C8D9A8); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79F68E2_B9C7_1BEB_41AA_137F3C26BBBF",
   "pitch": -16.52,
   "hfov": 13.16,
   "yaw": 87.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB68695E_B9A8_BF77_41D7_F694C5AA074D",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.46,
   "yaw": -94.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E, this.camera_A8D10040_B9CF_0A27_41DF_67999CB13EF2); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B791E8E2_B9C7_1BEB_41D4_0E0379C9BA27",
   "pitch": -19.28,
   "hfov": 17.46,
   "yaw": -94.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB085248_B9A8_AD5B_41DC_F55C119AE082",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 17.54,
   "yaw": -0.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_1_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E, this.camera_A915D016_B9CF_0A2B_41E5_18E893DF4DAA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B791B8E2_B9C7_1BEB_41E3_1D5FC5AF36B0",
   "pitch": -18.53,
   "hfov": 17.54,
   "yaw": -0.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB603A82_B9A9_FDCF_41E4_EE88BFED193C",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 9.82,
   "yaw": 8.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_1_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_B79E08E2_B9C7_1BEB_41AE_C2FD8AA4E8D8",
   "pitch": -9.36,
   "hfov": 9.82,
   "yaw": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB5BFB73_B9A8_F34D_41B9_073AD8FA7CD7",
 "data": {
  "label": "Circle 03b"
 }
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_9511127C_9B79_D2C1_41D8_D080B87BFD84",
 "left": "0%",
 "right": "0%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_9511127C_9B79_D2C1_41D8_D080B87BFD84.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": 53,
 "propagateClick": false,
 "minWidth": 1,
 "height": 2,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "white line"
 },
 "scaleMode": "fit_outside",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "Container_9A7696F9_9256_4198_41E2_40E7CF09A427",
 "left": "0%",
 "width": 1199,
 "children": [
  "this.Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
  "this.Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
  "this.Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
  "this.Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
  "this.Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
  "this.Button_33E0F47E_11C1_A20D_419F_BB809AD89259"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 30,
 "bottom": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": 51,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-button set container"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 110,
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "minWidth": 1,
 "propagateClick": false,
 "gap": 3,
 "borderSize": 0,
 "height": "85.959%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_0A7329D7_16A2_88BF_418A_F3BE254A76EE",
 "left": 0,
 "width": 188,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0.01
 ],
 "backgroundColor": [
  "#FF361B"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "top": 0,
 "gap": 10,
 "borderSize": 0,
 "height": 44,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "red block"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "shadowBlurRadius": 10,
 "id": "Container_33F2D10A_17CC_3D05_4199_54BCA881FB17",
 "left": "0%",
 "width": 286,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.5,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "propagateClick": false,
 "top": 48,
 "gap": 10,
 "borderSize": 0,
 "height": 68,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "white block"
 },
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "textShadowBlurRadius": 10,
 "id": "Label_0A5C65D9_16A5_98B3_41B4_573FE3033A1F",
 "left": 12,
 "width": 240,
 "textShadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "textShadowOpacity": 1,
 "text": "LOREM IPSUM",
 "minHeight": 1,
 "borderRadius": 0,
 "textShadowVerticalLength": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "top": 2,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontSize": 29,
 "fontColor": "#FFFFFF",
 "class": "Label",
 "fontStyle": "normal",
 "textShadowHorizontalLength": 0,
 "fontWeight": "bold",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Label_0B130419_16A3_7FB3_41A4_E5F9FA0AC39B",
 "left": 10,
 "width": 336,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "text": "DOLOR SIT",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 69,
 "top": 40,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontSize": 61,
 "fontColor": "#000000",
 "class": "Label",
 "fontStyle": "italic",
 "data": {
  "name": "text 2"
 },
 "fontWeight": "bold",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
  "this.Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_386EC8AA_17CC_0B05_41A6_7EFCA2EDC23B",
 "left": "10%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "10%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0"
 ],
 "id": "Container_386C28AA_17CC_0B05_41B7_3334E854CA29",
 "left": "10%",
 "right": "10%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "layout": "vertical",
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_3811E7E8_17DC_0505_4189_A53F22044B22",
  "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_3811F7E8_17DC_0505_417B_3406AEA143C9",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "layout": "vertical",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
  "this.WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_2792F64D_17CC_071F_415E_8686768A06D3",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "layout": "vertical",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "gap": 4,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
  "this.MapViewer"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_245BFB6E_173C_0D1A_41B3_7C2B11B7D45E",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "layout": "vertical",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "gap": 4,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_20EC87A3_174C_050A_4198_F9830A58FD09",
  "this.Container_2F7D65D9_1744_0506_41B3_4FD17B01B645"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_20EC97A3_174C_050A_41B2_EEE2BFFB8076",
 "left": "15%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "layout": "vertical",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "gap": 6,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": true,
 "shadowSpread": 1,
 "children": [
  "this.Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
  "this.Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82"
 ],
 "shadowBlurRadius": 25,
 "id": "Container_183FA20E_17B1_6AC3_41A6_A5FD4E159AED",
 "left": "10%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "10%",
 "layout": "horizontal",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "shadowColor": "#000000",
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "bottom": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "shadowHorizontalLength": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6"
 ],
 "id": "Container_1830920E_17B1_6AC3_41B2_4E4AC4718E27",
 "left": "10%",
 "right": "10%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "layout": "vertical",
 "verticalAlign": "top",
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "80%",
 "propagateClick": false,
 "minWidth": 1,
 "top": "5%",
 "gap": 10,
 "borderSize": 0,
 "paddingTop": 20,
 "paddingBottom": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container X global"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B793E8E2_B9C7_1BEB_41D1_13ED4ABEDC15",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B5A9E8CB_B998_9D5D_41E5_688FD23EF7A9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B79068E2_B9C7_1BEB_41E6_B477646102C6",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B79028E2_B9C7_1BEB_41E2_268E0E2B32FE",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B79088E2_B9C7_1BEB_41E1_0034A1133564",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 9,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_1_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_B79148E2_B9C7_1BEB_41AC_2B7CC9FBA9EC",
 "rowCount": 3,
 "colCount": 3
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2BB1644_B998_B54B_41E4_AFAE71465A9B_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B79108E2_B9C7_1BEB_41B4_0CE5B6E40B20",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B79EC8E2_B9C7_1BEB_41E1_FACBB0A2FE05",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B79EB8E2_B9C7_1BEB_41B1_A4025FD87B59",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2B55E32_B99B_74CC_41D3_E0567DA38D5E_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B79F68E2_B9C7_1BEB_41AA_137F3C26BBBF",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2A9A384_B998_93D4_41AA_4BDA247BC62A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B791E8E2_B9C7_1BEB_41D4_0E0379C9BA27",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B791B8E2_B9C7_1BEB_41E3_1D5FC5AF36B0",
 "rowCount": 6,
 "colCount": 4
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B2ABF0E4_B99B_6D4B_41E6_50F6273C2226_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ],
 "id": "AnimatedImageResource_B79E08E2_B9C7_1BEB_41AE_C2FD8AA4E8D8",
 "rowCount": 6,
 "colCount": 4
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_03D37B27_0C7A_63B3_41A1_89572D8C8762",
 "width": 120,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "backgroundColor": [
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "HOUSE INFO",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, true, 0, null, null, false)",
 "rollOverShadow": false,
 "iconWidth": 0,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1FDDCF4A_0C0A_23FD_417A_1C14E098FDFD",
 "width": 140,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "layout": "horizontal",
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "PANORAMA LIST",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1CA392FC_0C0A_2295_41A3_18DEA65FB6AD",
 "width": 100,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "layout": "horizontal",
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "LOCATION",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button location"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1FE4B611_0C0A_256F_418E_EA27E66F8360",
 "width": 113,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "layout": "horizontal",
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "FLOORPLAN",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverFontColor": "#FFFFFF",
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1EBF3282_0C0A_1D6D_4190_52FC7F8C00A5",
 "width": 122,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "layout": "horizontal",
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverFontColor": "#FFFFFF",
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button photoalbum"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_33E0F47E_11C1_A20D_419F_BB809AD89259",
 "width": 100,
 "rollOverBackgroundColor": [
  "#FF361B"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "layout": "horizontal",
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 15,
 "iconBeforeLabel": true,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 40,
 "borderSize": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "CONTACT",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": 18,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, true, 0, null, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button contact"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": 60,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "class": "IconButton",
 "data": {
  "name": "image button menu"
 },
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed_rollover.png"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton TWITTER"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 58,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton FB"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
  "this.Container_386D68AA_17CC_0B05_41B3_8E850505A16B"
 ],
 "id": "Container_386D38AA_17CC_0B05_4199_8338E0FE7991",
 "width": "85%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
  "this.Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
  "this.Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF"
 ],
 "id": "Container_386DA8AA_17CC_0B05_41A8_EBE6620047C3",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "overflow": "visible",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0",
 "width": "25%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_rollover.jpg",
 "minWidth": 40,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_386C68AA_17CC_0B05_4191_7DAFDF1C1A4B, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_386C18AA_17CC_0B05_4198_1FCD97F770C0_pressed_rollover.jpg"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
  "this.IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E"
 ],
 "id": "Container_3811E7E8_17DC_0505_4189_A53F22044B22",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "height": 80,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "rollOverItemLabelFontColor": "#C1280E",
 "id": "ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B",
 "rollOverItemLabelFontSize": 16,
 "width": "100%",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingLeft": 3,
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "itemMinHeight": 50,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemOpacity": 1,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "playList": "this.ThumbnailGrid_381227E8_17DC_0505_41AB_9B42B2CC193B_playlist",
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "borderSize": 0,
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "scrollBarColor": "#FF361B",
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemHeight": 160,
 "selectedItemLabelFontSize": 16,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#C1280E",
 "itemLabelFontWeight": "normal",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 16,
 "itemThumbnailHeight": 125,
 "itemLabelGap": 7,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "itemLabelFontColor": "#666666",
 "borderRadius": 5,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "itemBackgroundColorDirection": "vertical",
 "gap": 26,
 "itemHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "itemMaxHeight": 1000,
 "paddingTop": 30,
 "itemWidth": 220,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList5161"
 },
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#FF361B",
 "itemLabelFontFamily": "Oswald Regular",
 "itemThumbnailBorderRadius": 0
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
  "this.IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14"
 ],
 "id": "Container_2792E64D_17CC_071F_41B6_648718DBC7B5",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "height": 80,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "WebFrame_245FE213_17C4_1F0B_41A4_D9A473C556C8",
 "width": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.151861634273!2d-73.99351941263586!3d40.75732561349075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses!2ses!4v1542287427714\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "class": "WebFrame",
 "data": {
  "name": "WebFrame52781"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
  "this.IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14"
 ],
 "id": "Container_245BCB6E_173C_0D1A_419A_5D9B9177800A",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "height": 80,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MapViewer",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Floor Plan"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
  "this.IconButton_20ECE7A3_174C_050A_41B4_AF609035102C"
 ],
 "id": "Container_20EC87A3_174C_050A_4198_F9830A58FD09",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "height": 80,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "backgroundColor": [
  "#FF361B"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
  "this.Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0"
 ],
 "id": "Container_2F7D65D9_1744_0506_41B3_4FD17B01B645",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-photoalbum"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Image_182FD4E7_17B7_EF41_41AA_D495544C1972"
 ],
 "id": "Container_183F920E_17B1_6AC3_4174_65DF01CAE26A",
 "width": "85%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 1,
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
  "this.Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
  "this.Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353"
 ],
 "id": "Container_1830320E_17B1_6AC3_41B6_E59ACE72BE82",
 "width": "50%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "overflow": "visible",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 460,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6",
 "width": "25%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_rollover.jpg",
 "minWidth": 40,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "75%",
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1831720E_17B1_6AC3_41B2_FDD66A00A2E5, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_1830820E_17B1_6AC3_41A7_A2550D4CD4B6_pressed_rollover.jpg"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "ViewerAreaLabeled_386D08AA_17CC_0B05_41A7_5EF26F48CDAF",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "right": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "bottom": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
  "this.Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
  "this.IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6"
 ],
 "id": "Container_386D68AA_17CC_0B05_41B3_8E850505A16B",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container arrows"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_386D98AA_17CC_0B05_41AE_A3E113DCCC00",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 60,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
  "this.Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4"
 ],
 "id": "Container_386D88AA_17CC_0B05_41B1_9A2C832D4E62",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "Container_386DC8AA_17CC_0B05_418D_1F78D6A291FF",
 "width": 370,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": 40,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_3811C7E8_17DC_0505_4199_1B551680AC34",
 "left": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minWidth": 1,
 "height": 80,
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 17,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>PANORAMA LIST/</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E",
 "width": 50,
 "right": 15,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_rollover.jpg",
 "propagateClick": false,
 "minWidth": 40,
 "height": 50,
 "top": 15,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_381217E8_17DC_0505_41A2_85B8D0083AEA, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_381237E8_17DC_0505_41B6_D4CE0AA1A79E_pressed_rollover.jpg"
},
{
 "id": "HTMLText_2792D64D_17CC_071F_4198_A70438B191B7",
 "left": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minWidth": 1,
 "height": 80,
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 17,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>LOCATION/</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14",
 "width": 70,
 "right": 15,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_rollover.jpg",
 "propagateClick": false,
 "minWidth": 40,
 "height": 70,
 "top": 15,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2792A64E_17CC_071D_41B0_BEA23997C067, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_2792C64E_17CC_071D_41A6_23C9E23D2F14_pressed_rollover.jpg"
},
{
 "id": "HTMLText_245BDB6E_173C_0D1A_41AA_78BDF4EE53FF",
 "left": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minWidth": 1,
 "height": 80,
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 17,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>FLOORPLAN/</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14",
 "width": 70,
 "right": 15,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_rollover.jpg",
 "propagateClick": false,
 "minWidth": 40,
 "height": 70,
 "top": 15,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_24580B6E_173C_0D1A_41B0_1B17CFD194C1, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_24582B6E_173C_0D1A_41AB_C451C6520A14_pressed_rollover.jpg"
},
{
 "id": "HTMLText_20ECF7A3_174C_050A_41A5_0B8AD2C6B179",
 "left": "0%",
 "width": "77.115%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 80,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minWidth": 1,
 "height": 80,
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 17,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:3.64vh;font-family:'Oswald';\"><B>PHOTOALBUM/</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_20ECE7A3_174C_050A_41B4_AF609035102C",
 "width": 50,
 "right": 15,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_rollover.jpg",
 "propagateClick": false,
 "minWidth": 40,
 "height": 50,
 "top": 15,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_20ECC7A3_174C_050A_41B2_47EE9CF02D5F, false, 0, null, null, false)",
 "iconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C.jpg",
 "class": "IconButton",
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed.jpg",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "right",
 "pressedRollOverIconURL": "skin/IconButton_20ECE7A3_174C_050A_41B4_AF609035102C_pressed_rollover.jpg"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "ViewerAreaLabeled_2F7D75D9_1744_0506_41B5_EA00300636BE",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "right": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "minHeight": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "transitionDuration": 500,
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "toolTipFontFamily": "Arial",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "bottom": 0,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": 12,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "data": {
  "name": "Viewer photoalbum"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
  "this.Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
  "this.IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33"
 ],
 "id": "Container_2F7D05DA_1744_0505_41A1_C7BCABBECBE0",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container arrows"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 894,
 "maxWidth": 1341,
 "id": "Image_182FD4E7_17B7_EF41_41AA_D495544C1972",
 "left": "0%",
 "width": "100%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_182FD4E7_17B7_EF41_41AA_D495544C1972.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image5820"
 },
 "scaleMode": "fit_outside",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "shadow": false,
 "id": "Container_1830220E_17B1_6AC3_4178_5E7AD867CE60",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 50,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
  "this.Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
  "this.Button_1830D20E_17B1_6AC3_4198_688BED36E073"
 ],
 "id": "Container_1830020E_17B1_6AC3_4194_70380D44B9C6",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "vertical",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "minWidth": 100,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 25,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-Container text"
 },
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.79
},
{
 "shadow": false,
 "id": "Container_1830A20E_17B1_6AC3_41B1_7B5CC3A88353",
 "width": 370,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "horizontal",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": 40,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 130,
 "maxWidth": 130,
 "id": "IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D",
 "width": "8%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 70,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_rollover.png",
 "minWidth": 70,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "8%",
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton left arrow"
 },
 "pressedIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_386D58AA_17CC_0B05_41B4_E6FBE56E944D_pressed_rollover.png"
},
{
 "id": "Container_386D48AA_17CC_0B05_41AC_EB6F45FE66D5",
 "width": "84%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "30%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 130,
 "maxWidth": 130,
 "id": "IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6",
 "width": "8%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 70,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_rollover.png",
 "minWidth": 70,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "8%",
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton right arrow"
 },
 "pressedIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_386DB8AA_17CC_0B05_41B0_6B5C848304F6_pressed_rollover.png"
},
{
 "id": "HTMLText_386DF8AA_17CC_0B05_41AE_D7BDB2970D08",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 20,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:8.38vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.84vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.76vh;font-family:'Oswald Regular';\">Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae bibendum.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.32vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarColor": "#FF361B",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "fontFamily": "Bebas Neue Bold",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_386DE8AA_17CC_0B05_41B5_DE879E1001C4",
 "width": 207,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FF361B"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "propagateClick": false,
 "label": "lorem ipsum",
 "mode": "push",
 "borderSize": 0,
 "height": 59,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontSize": "3.7vh",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button31015"
 },
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F",
 "width": "10%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 70,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_rollover.png",
 "minWidth": 70,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "10%",
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton left arrow"
 },
 "pressedIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_2F7D35DA_1744_0505_41AF_6A4BEFADCE2F_pressed_rollover.png"
},
{
 "id": "Container_2F7EC5DA_1744_0505_415B_75BFEE966C4E",
 "width": "80%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "layout": "absolute",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 10,
 "borderSize": 0,
 "height": "30%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container separator"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33",
 "width": "10%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 70,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_rollover.png",
 "minWidth": 70,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": "10%",
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "iconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton right arrow"
 },
 "pressedIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed.png",
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center",
 "pressedRollOverIconURL": "skin/IconButton_2F7ED5DA_1744_0505_41B5_30F6E0D44E33_pressed_rollover.png"
},
{
 "id": "HTMLText_1830E20E_17B1_6AC3_419B_A422A7600CB2",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "62.894%",
 "paddingBottom": 3,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:4.63vh;font-family:'Oswald';\"><B>______</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.84vh;font-family:'Oswald';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.76vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ff361b;font-size:2.76vh;font-family:'Oswald Regular';\"><B>Dolor sit amet, consectetur adipiscing elit. Nunc porttitor ac nulla vitae.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.43vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.77vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;font-family:'Oswald';\"><B>www.loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;font-family:'Oswald';\"><B>info@loremipsum.com</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;font-family:'Oswald';\"><B>Tlf.: +11 111 111 111</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;font-family:'Oswald';\"><B>Address line 1</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;font-family:'Oswald';\"><B>Address line 2</B></SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarColor": "#FF361B",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 120,
 "maxWidth": 211,
 "id": "Image_16B75461_1B87_4970_41B9_4F94F65FB1C1",
 "width": "70%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_16B75461_1B87_4970_41B9_4F94F65FB1C1.jpg",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minWidth": 1,
 "propagateClick": false,
 "borderSize": 0,
 "height": "30%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image logo"
 },
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "fontFamily": "Oswald Regular",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1830D20E_17B1_6AC3_4198_688BED36E073",
 "width": 140,
 "rollOverBackgroundColor": [
  "#C1280E"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "iconHeight": 32,
 "paddingLeft": 0,
 "layout": "horizontal",
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#FF361B"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": 59,
 "paddingBottom": 0,
 "label": "CONTACT",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "fontSize": "2.83vh",
 "click": "this.openLink('http://www.loremipsum.com', '_blank')",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "normal",
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "center"
}],
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "minWidth": 20,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "class": "Player",
 "data": {
  "name": "Player468"
 },
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
