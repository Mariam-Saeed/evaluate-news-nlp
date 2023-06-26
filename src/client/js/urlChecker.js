import { postURL } from './postUrl';

const p = document.getElementById('warn');

const checkForURL = (url) => {
  console.log(url.checkValidity());
  if (!url.checkValidity()) p.textContent = 'Plz enter a valid URL';
  else {
    p.textContent = '';
    const urlLink = url.value;
    postURL(urlLink, '/addUrl');
  }
  console.log(url.value);
};

export { checkForURL };
