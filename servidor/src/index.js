//get database of mongos
require('./database')
//get app
const app = require('./app')

//get port for listening
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
