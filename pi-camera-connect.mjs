#!/usr/bin/env node

// import { StillCamera } from "pi-camera-connect";

import { StillCamera } from "pi-camera-connect";

// import * as fs from "fs";
import { writeFileSync } from "fs";
// Take still image and save to disk
const runApp = async () => {

    const stillCamera = new StillCamera();

    const image = await stillCamera.takeImage();

    writeFileSync("still-image.jpg", image);
    console.log('Pic taken', image)
};

runApp();