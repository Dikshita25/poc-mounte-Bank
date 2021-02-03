const mb = require('mountebank');
const settings = require('./settings');
const documentService = require('./document-service');

const mbServerInstance = mb.create({
  port: settings.port,
  pidfile: '../mb.pid',
  logfile: '../mb.log',
  protofile: '../protofile.json',
  ipWhitelist: ['*']
});

mbServerInstance.then(function() {
  documentService.addService();
});