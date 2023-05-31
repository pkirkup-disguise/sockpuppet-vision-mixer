// server.js
const express = require('express');
const bodyParser = require('body-parser');
const osc = require('osc');

const app = express();
const udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: 5000,
    remoteAddress: "127.0.0.1",
    remotePort: 7401
});

udpPort.open();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/sendOscMessage', (req, res) => {
    const message = {
        address: "/d3/layer/Video/video",
        args: [req.body.videoPath]
    };
    
    udpPort.send(message);
    
    res.sendStatus(200);
});

app.post('/sendOscMessage2', (req, res) => {
    const message = {
        address: "/d3/layer/Video 2/video",
        args: [req.body.videoPath]
    };
    
    udpPort.send(message);
    
    res.sendStatus(200);
});

app.post('/sendOscMessage3', (req, res) => {
    const message = {
        address: "/d3/layer/Background/video",
        args: [req.body.videoPath]
    };
    
    udpPort.send(message);
    
    res.sendStatus(200);
});

app.post('/sendTransitionOscMessage', (req, res) => {
    const message = {
        address: "/d3/transition",
        args: [req.body.value]
    };
    
    udpPort.send(message);
    
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
