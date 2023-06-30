const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');

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
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

console.log(`Your API key is ${process.env.API_KEY}`);

let info;

const resObj = {};

const formUrlLink = (info) => {
  return `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&${info.type}=${info.value}`;
};

const fetchApi = async (URL) => {
  const res = await fetch(URL, {
    method: 'POST',
    redirect: 'follow',
  });
  try {
    const data = await res.json();
    // console.log(data.status.msg);
    if (data.status.msg === 'OK') {
      resObj.msg = true;
      resObj.text = data.sentence_list[0].text;
      resObj.subjectivity = data.subjectivity;
      resObj.confidence = data.confidence;
      resObj.polarity = data.score_tag;
      // console.log(data.sentence_list);
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
  const data = req.body;
  info = data;
});

app.get('/getData', function (req, res) {
  const URL = formUrlLink(info);
  fetchApi(URL).then(() => {
    // console.log(resObj);
    res.send(resObj);
  });
});
