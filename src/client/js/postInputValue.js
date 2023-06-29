//* Function to POST data
const postInputValue = async (data, URL) => {
  const res = await fetch(URL, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    body: JSON.stringify(data),
  });
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export { postInputValue };
