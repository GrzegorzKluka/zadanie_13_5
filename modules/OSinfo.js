var os = require('os');
var colors = require('colors');
var myTime = require('./newTime');

function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System: '.red, type);
    console.log('Release: '.green, release);
    console.log('CPU model: '.blue, cpu);
    console.log('Uptime:'.grey, myTime.newTime());
    console.log('User name:'.cyan, userInfo.username);
    console.log('Home dir:'.yellow, userInfo.homedir);
}

exports.print = getOSinfo;