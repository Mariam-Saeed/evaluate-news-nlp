import { postURL } from './postUrl';
import { updateUI } from './updateUi';

const p = document.getElementById('warn');
const info = {};

const inputChecker = (value) => {
  if (value.startsWith('http')) {
    info.type = 'url';
    info.value = value;
  } else {
    info.type = 'txt';
    info.value = value;
  }
  console.log(info);
};

const handleChange = () => {
  console.log('changed');
  p.textContent = '';
};

const handleSubmit = (event) => {
  event.preventDefault();

  const inputValue = document.getElementById('input').value;
  inputChecker(inputValue);

  postURL(info, 'http://localhost:8080/addUrl').then(getData());

  console.log('::: Form Submitted :::');
};

const getData = async () => {
  const res = await fetch('http://localhost:8080/getData');
  try {
    const data = await res.json();
    if (!data.msg) p.textContent = 'Plz enter a valid URL or text';
    updateUI(data);
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

export { handleSubmit, handleChange };
