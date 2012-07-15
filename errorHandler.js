process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

process.on('error', function (err) {
  console.log('Error: ' + err);
});
