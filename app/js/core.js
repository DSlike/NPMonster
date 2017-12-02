const cmd = require('node-cmd');
const fs = require('fs');

const os = require('os').type();

var core = '';

class CORE {
  constructor(project) {
    if (project) {
      this.path = project.path;
      this.projectPathCommand = `
        cd
        cd ${project.path}
      `;
      if (os == 'Darwin') {
        this.system = new Darwin(this.path);
      }
    }
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
  installDependency(name, dev, callback) {
    const key = '-save' + (dev ? '-dev' : '');
    this.runCommand(`npm install ${name} ${key}`, (err, data, stderr)=> {
      callback();
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
      this.system.runFromTerminal(script)
    );
    this.sendNotification(`NPM script is started in default terminal application.`);
  }
  deleteDependency(packageName, callback) {
    this.runCommand(`npm uninstall ${packageName}`, (err, data, stderr)=> {
      callback();
    });
  }
  sendNotification(text) {
    let appNotification = new Notification('NPMonster', {
      body: text,
      requireInteraction: true
    });
  }
  checkVersions(callback) {
    cmd.get('npm view node', (err, node) => {
      var nv = node.replace(/[.]{3} \d{1,100000} more items/gi, '');
      eval('nv = ' + nv);
      cmd.get('node -v', (err, nodeLocal) => {
        var nl = nodeLocal.replace('v', '');
        if (nv['dist-tags'].latest != nl)
          this.sendNotification(`NodeJS has an update to version ${nv['dist-tags'].latest}`);
      });
    });
    cmd.get('npm view npm', (err, npm) => {
      var npv = npm.replace(/[.]{3} \d{1,100000} more items/gi, '');
      eval('npv = ' + npv);

      cmd.get('npm -v', (err, npmLocal) => {
        var nl = npmLocal.replace('v', '').replace('\n', '');
        if (npv['dist-tags'].latest != nl)
          this.sendNotification(`NPM has an update to version ${npv['dist-tags'].latest}`);
      });
    });
  }
  runCommand(commandString, callback) {
    cmd.get(`
      ${this.projectPathCommand}
      ${commandString}
      `, (err, data, stderr)=> {
        callback(err, data, stderr);
      });
  }
}

function coreInit(p) {
  core = new CORE(p);
}

class Darwin{
  constructor(path) {
    this.path = path;
  }
  runFromTerminal(script) {
    return `
      osascript -e 'tell application "Terminal" to do script "cd; cd ${this.path}; ${script}"'
    `;
  }
}
