const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
let mockAPIResponse = require('./mockAPI.js');

const app = express();

// Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
  // res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

// app.get('/test', function (req, res) {
//   res.send(mockAPIResponse);
// });

console.log(`Your API key is ${process.env.API_KEY}`);

// let url;

app.post('/addUrl', (req, res) => {
  console.log(`post request`);
  const data = req.body;
  const url = data;
  console.log(url);
});

const formData = new FormData();
formData.append('key', 'fb4f28fea957a61e81d7b1c05f0bc826');
formData.append(
  'txt',
  'Main dishes were quite good, but desserts were too sweet for me'
);
// formData.append(
//   'url',
//   'https://dev.to/integridsolutions/style-position-fixed-in-a-better-way-169g'
// );
formData.append('lang', 'auto');

const fetchApi = async (URL) => {
  const res = await fetch(URL, {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  });
  try {
    mockAPIResponse = await res.json();
    console.log(mockAPIResponse);
  } catch (error) {
    console.log(error.message);
  }
};

// fetchApi('https://api.meaningcloud.com/sentiment-2.1');

// app.get('/test', function (req, res) {
//   res.send(mockAPIResponse);
// });
