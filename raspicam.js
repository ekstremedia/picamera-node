var RaspiCam = require("raspicam");
let opts = { 
    mode: "photo",
    output: "/var/www/html/test.jpg"
}
var camera = new RaspiCam({ opts });

//to take a snapshot, start a timelapse or video recording
camera.start( );

