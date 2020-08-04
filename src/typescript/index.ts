import { ipcRenderer as ipc } from 'electron';

ipc.send('mouse-move', { x: 0, y: 0 });
