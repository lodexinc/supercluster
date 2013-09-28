'use strict';
var WorkerExp = new require('../lib/Worker');
var Worker = new WorkerExp.Worker();
var data = { role: 'worker' };

Worker.on('masterAvailable', function(name, msg, reason) {
  console.log('masterAvailable', name, msg, reason);
});

Worker.on('workerUnavailable', function(name, msg, reason) {
  console.log('workerUnavailable', name, msg, reason);
});
