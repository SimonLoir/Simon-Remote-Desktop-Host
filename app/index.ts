import {app, BrowserWindow as bw} from "electron";
import * as fs from "fs";

app.on('ready', () => {
    let window = new bw({
        webPreferences: {
            nodeIntegration: true,
        },
    })

    console.log("dir", __dirname);

    window.loadURL(
       `file://${__dirname}/public/index.html`
    );

    window.on('closed', () => {
        window = null;
        app.exit();
    });

    app.on('window-all-closed', function() {
        app.quit();
    });
})