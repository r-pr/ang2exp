var express = require('express'),
	app = express();

app.use(express.static('client'));
app.use('/scripts', express.static('node_modules'));


app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - not found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(8080, function(){
    console.log( 'Express started on localhost:8080 ; press Ctrl-C to terminate.' );
});