const PiCamera = require("pi-camera");
const webServer = '/var/www/html/'

const myCamera = new PiCamera({
    mode: "photo",
    output: `${webServer}/test.jpg`,
    width: 640,
    height: 480,
    nopreview: true,
});

myCamera
    .snap()
    .then((result) => {
        // Your picture was captured
    })
    .catch((error) => {
        // Handle your error
    });
