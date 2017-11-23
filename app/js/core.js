const cmd = require('node-cmd');
const fs = require('fs');

var core = '';

class CORE {
  constructor(project) {
    if (project)
      this.path = project.path;
  }
  getPackageJSON(callback) {
    fs.readFile(`${this.path}/package.json`, 'utf8', (err, data) => {
      if (err) {
        callback('no package');
      } else {
        callback(JSON.parse(data));
      }
    });
  }
  savePackageJSON(json) {
    fs.writeFile(`${this.path}/package.json`, json, (err, data) => {
      if (err) {
        alert(error);
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
    this.sendNotification(`NPM script is started in default terminal application.`);
  }
  deleteDependency(packageName, packageType) {
    cmd.get(
      `
        cd
        cd ${this.path}
        npm uninstall ${packageName}
      `, (err, message) => {
        console.log(message);
      }
    );
    // this.getPackageJSON((data)=> {
    //   if (packageType == 'main')
    //     delete data.dependencies[packageName];
    //   else if (packageType == 'dev')
    //     delete data.devDependencies[packageName];
    //
    //   this.savePackageJSON(JSON.stringify(data));
    // });
  }
  sendNotification(text) {
    let appNotification = new Notification('NPMonster', {
      body: text
    });

    // myNotification.onclick = () => {
    //   console.log('Notification clicked');
    // };
  }
  checkVersions(callback) {
    cmd.get('npm view node', (err, node) => {
      var nv = node.replace(/[.]{3} \d{1,100000} more items/gi, '');
      eval('nv = ' + nv);

      cmd.get('npm view npm', (err, npm) => {
        var npv = npm.replace(/[.]{3} \d{1,100000} more items/gi, '');
        eval('npv = ' + npv);

        let result = {};
        result.node = nv['dist-tags'].latest == nv.version ? 'ok' : 'update';
        result.npm = npv['dist-tags'].latest == npv.version ? 'ok' : 'update';
        callback(result);
      });
    });
  }
}

function coreInit(p) {
  core = new CORE(p);
}
