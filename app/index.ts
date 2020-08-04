import { app, BrowserWindow as bw, ipcMain as ipc } from 'electron';
import * as fs from 'fs';
import * as robot from 'robotjs';

app.on('ready', () => {
    let window = new bw({
        webPreferences: {
            nodeIntegration: true,
        },
    });

    console.log('dir', __dirname);

    window.loadURL(`file://${__dirname}/public/index.html`);

    window.on('closed', () => {
        window = null;
        app.exit();
    });

    app.on('window-all-closed', function () {
        app.quit();
    });
});

ipc.on('mouse-move', (event, args) => {
    const { x, y } = args;
    robot.moveMouse(x, y);
});
