const cmd = require('node-cmd');
const fs = require('fs');

var core = '';

class CORE {
  constructor(project) {
    this.path = project.path;
  }
  getPackageJSON(callback) {
    console.log(this.path);
    fs.readFile(`${this.path}/package.json`, 'utf8', (err, data) => {
      if (err) {
        callback('no package');
      } else {
        callback(JSON.parse(data));
      }
    });
  }
  editPackageJSON() {
    cmd.get(
      `
        cd
        cd ${this.path}
        open package.json
      `
    );
  }
  runScript(script) {
    cmd.get(
      `
        osascript -e 'tell application "Terminal" to do script "cd ${this.path}; ${script}"'
      `
    );
    this.sendNotification(`${script} is started in default terminal application.`);
  }
  sendNotification(text) {
    let appNotification = new Notification('NPMonster', {
      body: text
    });

    // myNotification.onclick = () => {
    //   console.log('Notification clicked');
    // };
  }
}

function coreInit(p) {
  core = new CORE(p);
}
