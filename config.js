/**
 * Created by mcbridn on 6/2/2017.
 */

var studio_configuration = {
    "cameras":{
        "grey-wall-cam": {
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
            },
            "mute":["Mic/Aux 2"],
            "unmute": ["Mic/Aux"]
        },
        "green-screen-cam": {
            "camera_id": "green-screen-cam",
            "button_name": "Green Screen",
            "thumbnail": "thumbnails/green-screen-camera-button.jpg",
            "button_color": "#00FF00",
            "sources": {
                "island": {
                    "source_name": "Island",
                    "source_id": "island",
                    "thumbnail": "thumbnails/scene-1.jpg",
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
                "Cloister": {
                    "source_name": "Cloister",
                    "source_id": "cloister",
                    "thumbnail": "thumbnails/cloister.jpg",
                    "button_color": "#000000",
                    "type": "layer"
                },
                "Quad": {
                    "source_name": "Quad",
                    "source_id": "quad",
                    "thumbnail": "thumbnails/quad.jpg",
                    "button_color": "#000000",
                    "type": "layer"
                },
                "founders-steps": {
                    "source_name": "Founders Steps",
                    "source_id": "founders-steps",
                    "thumbnail": "thumbnails/founders-steps.jpg",
                    "button_color": "#000000",
                    "type": "layer"
                },

                "fountain-motion-1": {
                    "source_name": "Founders Fountain",
                    "source_id": "fountain-motion-1",
                    "thumbnail": "thumbnails/founders-fountain.jpg",
                    "button_color": "#000000",
                    "type": "layer"
                },
                "Computer Input":{
                    "source_name" : "AUX Input",
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
            },
            "mute":["Mic/Aux"],
            "unmute": ["Mic/Aux 2"]
        },
        "full-screen-hdmi": {
            "camera_id": "full-screen-hdmi",
            "button_name": "Full Screen AUX Input",
            "thumbnail": "thumbnails/full-screen-aux.jpg",
            "button_color": "",
            "sources": {
            },
            "mute":["Mic/Aux"],
            "unmute": ["Mic/Aux 2"]
        },
        "green-screen-fs-hdmi": {
            "camera_id": "green-screen-fs-hdmi",
            "button_name": "AUX Input as Green Screen",
            "thumbnail": "thumbnails/greenscreen-aux.jpg",
            "button_color": "",
            "sources": {
            },
            "mute":["Mic/Aux"],
            "unmute": ["Mic/Aux 2"]
        }
    }

};