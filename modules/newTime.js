var os = require('os');

function myTime() {
    var uptime = Math.floor(os.uptime());
    var hours = Math.floor(uptime / 3600);
    var minutes = Math.floor((uptime - (hours * 3600)) / 60);
    seconds = uptime % 60;
    return hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds'
}

exports.newTime = myTime;