const {app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
  setTimeout(() => {
    win = new BrowserWindow({
      width: 1250,
      height: 650,
      icon: './src/favicon.ico',
      webPreferences: {
        nodeIntegration: false 
      }
    });

    win.loadURL(url.format({
      pathname: 'localhost:4200',
      protocol: 'http:',
      slashes: true
    }));

    win.webContents.openDevTools(); 
    win.maximize();
    win.on('closed', () => {
      win = null;
    });
  }, 10000);
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
//