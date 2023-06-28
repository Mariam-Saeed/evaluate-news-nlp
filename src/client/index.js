import { handleChange, handleSubmit } from './js/formHandler';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/results.scss';

// console.log('CHANGE!!');

const btn = document.getElementById('btn');
const inputEl = document.getElementById('input');

btn.addEventListener('click', handleSubmit);
inputEl.addEventListener('change', handleChange);

// export { checkForURL, handleSubmit };
