/**
 * Created by mcbridn on 6/2/2017.
 */

var studio_configuration = {
    "cameras":{
        "grey-wall-camera": {
            "camera_id": "grey-wall-cam",
            "button_name": "Grey Wall Cam",
            "thumbnail": "thumbnails/grey-wall-camera-button.jpg",
            "button_color": "",
            "default": true,
            "sources": {
                "Computer Input":{
                    "source_name" : "HDMI Input",
                    "source_id" : "hdmi-2",
                    "thumbnail": "thumbnails/colorbars.jpg",
                    "button_color": "",
                    "type": "overlay"
                },
                "Green Screen Input":{
                    "source_name" : "Green Screen",
                    "source_id" : "green-screen-cam",
                    "thumbnail": "thumbnails/green-screen-camera-button.jpg",
                    "button_color": "",
                    "type" : "overlay"
                },
                "Juniata Logo":{
                    "source_name" : "Juniata Logo",
                    "source_id" : "juniata-logo",
                    "thumbnail": "thumbnails/juniata-logo-button.jpg",
                    "button_color": "",
                    "type" : "overlay"
                }
            }
        },
        "green-screen-cam": {
            "camera_id": "green-screen-cam",
            "button_name": "Green Screen Cam",
            "thumbnail": "thumbnails/green-screen-camera-button.jpg",
            "button_color": "#00FF00",
            "sources": {
                "scene 1": {
                    "source_name": "Island",
                    "source_id": "scene1",
                    "thumbnail": "thumbnails/scene-1.jpg",
                    "button_color": "",
                    "type": "layer"
                },
                "scene 2": {
                    "source_name": "Studio",
                    "source_id": "scene2",
                    "thumbnail": "thumbnails/scene-2.jpg",
                    "button_color": "",
                    "type": "layer"
                },
                "Black": {
                    "source_name": "Black",
                    "source_id": "black",
                    "thumbnail": "",
                    "button_color": "#000000",
                    "type": "layer"
                },
                "White": {
                    "source_name": "White",
                    "source_id": "white",
                    "thumbnail": "",
                    "button_color": "#FFFFFF",
                    "type": "layer"
                },
                "Chroma Key": {
                    "source_name": "Chroma Key",
                    "source_id": "chroma-key",
                    "thumbnail": "",
                    "button_color": "#28e04a",
                    "type": "layer"
                },
                "Computer Input":{
                    "source_name" : "HDMI Input",
                    "source_id" : "hdmi-2",
                    "thumbnail": "thumbnails/colorbars.jpg",
                    "button_color": "",
                    "type": "overlay"
                },
                "Juniata Logo":{
                    "source_name" : "Juniata Logo",
                    "source_id" : "juniata-logo",
                    "thumbnail": "thumbnails/juniata-logo-button.jpg",
                    "button_color": "",
                    "type" : "overlay"
                }
            }
        },
        "full-screen-hdmi": {
            "camera_id": "full-screen-hdmi",
            "button_name": "Full Screen HDMI",
            "thumbnail": "thumbnails/hdmi-input-camera-button.jpg",
            "button_color": "",
            "sources": {
            }
        }
    }

};