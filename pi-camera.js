const PiCamera = require("pi-camera");
const webServer = "/var/www/html/";

const myCamera = new PiCamera({
    mode: "photo",
    output: `${webServer}/test.jpg`,
    width: 1920,
    height: 1080,
    nopreview: true,
    awb: "off",
    shutter: 20000,
    ISO: 800,


});

myCamera
    .snap(photo => {
        console.log('Taking photo...')
    })
    .then((result) => {
        // Your picture was captured
        console.log('Took photo: ' + result)
    })
    .catch((error) => {
        // Handle your error
        console.log('Feil: ' + error)
    });
