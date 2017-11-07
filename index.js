const path = require('path');

const electron = require('electron');
const {
  app,
  BrowserWindow
} = electron;
app.commandLine.appendSwitch('enable-experimental-web-platform-features');
app.commandLine.appendSwitch('enable-transparent-visuals');
app.on('ready', function() {
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 500,
    minWidth: 400,
    minHeight: 400,
    transparent: true,
    frame: true,
    show: true,
    resizable: true,
    titleBarStyle: 'hidden-inset',
    vibrancy: 'dark',
    icon: path.join(__dirname, 'app/imgs/icon.png'),
    title: 'NPMonster'
  });
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  mainWindow.setTitle('NPMonster');
});
