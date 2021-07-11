const { app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

app.on('ready', function () {
  const win = new BrowserWindow();
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // 'console-message' is the last to be called, it is used to know when the DOM is ready
  win.webContents.on('console-message', function () {
    app.exit();
  });
});
