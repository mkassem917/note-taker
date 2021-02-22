var express = require ('express');

var app = express(); 

app.get('/',  (req, res)  => {
    res.send('This is a test page, hell yeah');
});
app.get('/contact',  (req, res)  => {
    res.send('This is a the contact page');
});


app.listen(3001);