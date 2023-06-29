import { updateUI, displayWarn } from './formHandler';

const getData = async () => {
  const res = await fetch('http://localhost:8080/getData');
  try {
    const data = await res.json();
    if (!data.msg) displayWarn();
    updateUI(data);
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};

export { getData };
