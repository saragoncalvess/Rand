let express = require('express');
let app = express();
let aleatorio = require('./aleatorio');

const webServerPort = process.env.PORT || 3002;
app.get('/randomizado', function(req, res) {
    res.send(aleatorio.getRandomizado().toString());
})

app.get('/newInt', function(req, res){
    res.send(aleatorio.getRandomInteger(50, 51).toString());
})

app.listen(webServerPort, function(){
    console.log('listen on port', webServerPort);
})