var SerialPort = require("serialport").SerialPort;
var Twit = require('twit');

var serialPort = new SerialPort("/dev/cu.usbmodem1421", {
  baudrate: 9600
});

var T = new Twit({
  consumer_key:         '4geUYzQV5JrAmf1FbU58JPyvM',
  consumer_secret:      '0BHkrNN8qdqeiEiSn5y3xn1c1GNquK8J7bdhxpJcI8h1PSivWk',
  access_token:         '2243908987-pp1ctHECy6JTQz0EsbZAOjU6WOFPEXaO3EYKUtV',
  access_token_secret:  '3jSOrPgHlCTFoRzrBWTyhvk8RvXk3UWQzx2vRAN6c6hCO'
});

var stream = T.stream('statuses/filter', { track: '#HackSussex', language: 'en' });

stream.on('tweet', function(tweet) {
  console.log(tweet);
  serialPort.write('tweet!', function(err, bytesWritten) {
    //nothing
  });
});
