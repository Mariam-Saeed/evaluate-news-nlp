import { postInputValue } from './postInputValue';
import { getData } from './getData';

const polarityEl = document.getElementById('polarity');
const subjectivityEl = document.getElementById('subjectivity');
const confidenceEl = document.getElementById('confidence');
const textExceptEl = document.getElementById('text-except');
const polarity = {
  'P+': 'strong positive',
  P: 'positive',
  NEU: 'neutral',
  N: 'negative',
  'N+': 'strong negative',
  NONE: 'without polarity',
};

const updateUI = (data) => {
  polarityEl.textContent = polarity[data.polarity];
  subjectivityEl.textContent = data.subjectivity.toLowerCase();
  confidenceEl.textContent = data.confidence;
  textExceptEl.textContent = data.text;
};

const p = document.getElementById('warn');
const displayWarn = () => {
  p.textContent = 'Plz enter a valid URL or text';
};

const inputChecker = (value) => {
  const info = {};
  if (value.startsWith('http')) {
    info.type = 'url';
    info.value = value;
  } else {
    info.type = 'txt';
    info.value = value;
  }
  return info;
};

const handleChange = () => {
  p.textContent = '';
};

const handleSubmit = (event) => {
  event.preventDefault();

  const inputValue = document.getElementById('input').value;
  const info = inputChecker(inputValue);

  postInputValue(info, 'http://localhost:8080/addUrl').then(getData());
};

export { handleSubmit, handleChange, inputChecker, updateUI, displayWarn };
