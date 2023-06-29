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

const URL = 'https://api.meaningcloud.com/sentiment-2.1';

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

console.log(`Your API key is ${process.env.API_KEY}`);

let info;

const createFormData = () => {
  const formData = new FormData();
  formData.append('key', 'fb4f28fea957a61e81d7b1c05f0bc826');
  formData.append(info.type, info.value);
  formData.append('lang', 'auto');
  return formData;
};

const resObj = {};

const fetchApi = async (URL) => {
  const formData = createFormData();
  const res = await fetch(URL, {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  });
  try {
    const data = await res.json();
    console.log(data.status.msg);
    if (data.status.msg === 'OK') {
      resObj.msg = true;
      resObj.text = data.sentence_list[0].text;
      resObj.subjectivity = data.subjectivity;
      resObj.confidence = data.confidence;
      resObj.polarity = data.score_tag;
      console.log(data.sentence_list);
    } else {
      resObj.msg = false;
      resObj.text = '';
      resObj.subjectivity = '';
      resObj.confidence = '';
      resObj.polarity = '';
    }
    // console.log(resObj);
  } catch (error) {
    console.log(error.message);
  }
};

app.post('/addUrl', (req, res) => {
  // console.log(`post request`);
  const data = req.body;
  info = data;
  console.log(info);
});

app.get('/getData', function (req, res) {
  fetchApi(URL).then(() => {
    console.log(resObj);
    res.send(resObj);
  });
});
