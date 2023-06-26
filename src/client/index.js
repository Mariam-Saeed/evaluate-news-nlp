import { checkForURL } from './js/urlChecker';
import { handleSubmit } from './js/formHandler';
import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';

// console.log(checkForURL);

// alert('I EXIST');
console.log('CHANGE!!');

const btn = document.getElementById('btn');

btn.addEventListener('click', handleSubmit);

const urlObj = {
  url: 'https://dev.to/roktim32/the-secret-to-mastering-react-js-hone-your-skills-with-these-javascript-topics-first-ok4',
};

const postURL = async (data, URL) => {
  const res = await fetch(URL, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    body: JSON.stringify(data),
  });
  try {
    console.log('client side', res);
    const resData = await res.json();
    console.log(resData);
    return resData;
  } catch (error) {
    console.log(error.message);
  }
};

postURL(urlObj, 'http://localhost:8080/addUrl');

// export { checkForURL, handleSubmit };
