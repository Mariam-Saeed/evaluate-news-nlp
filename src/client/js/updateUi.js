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
  subjectivityEl.textContent = data.subjectivity;
  confidenceEl.textContent = data.confidence;
  textExceptEl.textContent = data.text;
};

export { updateUI };
