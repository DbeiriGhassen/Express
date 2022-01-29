
const express = require('express');
const midelware = require('./middleware');
const app = express();
const port = 4000;
const midleware= require('./middleware')
app.use(express.json())

app.get('/service',midleware, (req, res) => {
    res.sendFile(__dirname + '/Html pages/ourservices.html')

})

app.get('/contactus.html',midelware, (req, res) => {
    res.sendFile(__dirname + '/Html pages/contactus.html')

})

app.get('/home.html',midleware, (req, res) => {
    res.sendFile(__dirname + '/Html pages/home.html')

})

app.listen(port, function () {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s',
        port);
});