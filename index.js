const Logger = require('./logger');
const ConsoleLogger = require('./console-logger');
const FileLogger = require('./file-logger');
const DeferredFileLogger = require('./deferred-file-logger');


let log = new Logger();
let conLog = new ConsoleLogger('pr', 'ERROR', null);
let fsLog = new FileLogger('def.txt', 'dd', 'INFO');
let dfsLog = new DeferredFileLogger("myFIle.txt", 2, '--Pr', 'INFO');

console.log(log.format("Some many text"));
conLog.log('Some many text');
fsLog.log('Some many text');
dfsLog.log('Some many text');
