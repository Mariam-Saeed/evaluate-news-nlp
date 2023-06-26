import { checkForURL } from './urlChecker';

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formUrl = document.getElementById('url');
  // console.log(document.getElementById('url').checkValidity());
  // checkForURL(formUrl);

  console.log('::: Form Submitted :::');

  // fetch('http://localhost:8080/test')
  //   .then((res) => res.json())
  //   .then(function (res) {
  //     console.log(res);
  //     document.getElementById('results').innerHTML = res.agreement;
  //   });
}

export { handleSubmit };
