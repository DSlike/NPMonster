const path = require('path');

const electron = require('electron'),
  {
    app,
    BrowserWindow
  } = electron;
app.commandLine.appendSwitch('enable-experimental-web-platform-features');
app.commandLine.appendSwitch('enable-transparent-visuals');
app.on("ready", function() {
  var mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    minWidth: 400,
    minHeight: 400,
    transparent: true,
    frame: true,
    show: true,
    resizable: true,
    titleBarStyle: 'hidden-inset',
    vibrancy: 'dark',
    icon: path.join(__dirname, 'app/imgs/icon.png'),
    title:"NPMonster"
  });
  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  mainWindow.setTitle("NPMonster");

  const cmd = require("node-cmd");

  cmd.get("npm search express", function(err, data, stderr) {
    // console.log(data);
  });

  cmd.get(
    `cd
    pwd`,
    function(err, data, stderr) {
      // console.log('the current working dir is : ',data)
    }
  );
});
