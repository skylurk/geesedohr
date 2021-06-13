const mongoose = require ('mongoose');

//Connecting to the mongodb
mongoose.connect(
    'mongodb://localhost/dataone'
);

mongoose.connection.once('open', function() {
  console.log('connection has been made Dumbass!');  
}).on('error', function(error) {
    console.log('error: ', error);
})