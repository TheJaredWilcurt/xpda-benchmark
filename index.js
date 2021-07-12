const si = require('systeminformation');
const manifest = require('./package.json');

async function getCPU () {
  try {
    const cpu = await si.cpu();
    let response = '';
    if (cpu.manufacturer) {
      // 'Intel®'
      response = response + ' ' + cpu.manufacturer;
    }
    if (cpu.brand) {
      // 'Intel ' + 'Core™ i7-3687U'
      response = response + ' ' + cpu.brand;
    }
    if (cpu.speed && typeof(cpu.speed) === 'number') {
      // 'Intel Core i7-3687U CPU @ 2.10GHz'
      response = response + ' CPU @ ' + cpu.speed.toPrecision(3) + 'GHz';
    }
    if (cpu.speedMax && typeof(cpu.speedMax) === 'number') {
      // 'Intel Core i7-3687U CPU @ 2.10GHz (2.60 GHz)'
      response = response + ' (' + cpu.speedMax.toPrecision(3) + ')';
    }
    response = response.split('®').join('');
    response = response.split('™').join('');
    console.log('CPU: ' + response.trim());
  } catch (err) {
    console.log('Error getting CPU', err);
  }
}

async function getMem () {
  try {
    const mem = await si.mem();
    console.log('RAM: ' + Math.round(mem.total / 1024 / 1024 / 1024) + 'GB');
  } catch (err) {
    console.log('Error getting RAM', err);
  }
}

async function getOS () {
  try {
    const os = await si.osInfo();
    response = '';
    if (os.distro) {
      // 'Microsoft Windows 10 Enterprise'
      response = os.distro
      response = response.split('Microsoft').join('');
      response = response.split('Enterprise').join('');
    } 
    console.log('OS: ' + response.trim());
  } catch (err) {
    console.log('Error getting OS', err);
  }
}

async function getModel () {
  try {
    const system = await si.system();
    console.log('Model: ' + system.model);
  } catch (err) {
    console.log('Error getting model', err);
  }
}

getOS();
console.log('Node.js version: ' + process.version.split('v').join(''));
console.log('NW.js version: ' + manifest.devDependencies.nw.toUpperCase());
console.log('Electron version: ' + manifest.devDependencies.electron);
getModel();
getCPU();
getMem();
