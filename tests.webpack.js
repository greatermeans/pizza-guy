console.log('START tests.webpack.js')

MockFirebase.override();

var context = require.context('./test', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;

console.log('END tests.webpack.js')
