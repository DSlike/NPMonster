const path = require('path');

process.env.URL = `file://${__dirname}/app/index.html`;

const electron = require('electron');
const {
  app,
  BrowserWindow
} = electron;
app.commandLine.appendSwitch('enable-experimental-web-platform-features');
app.commandLine.appendSwitch('enable-transparent-visuals');
app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    transparent: true,
    frame: true,
    show: true,
    resizable: true,
    titleBarStyle: 'hidden-inset',
    vibrancy: 'light',
    icon: `./app/imgs/icon.png`,
    title: 'NPMonster'
  });
  mainWindow.loadURL(process.env.URL);

  mainWindow.setTitle('NPMonster');
});
