
const getRandomItem = items => items[Math.floor(Math.random() * items.length)];

// async await function

export const getCountry = async () => {
  const response = await fetch('//restcountries.eu/rest/v2/all');

  if (response.status === 200) {
    const data = await response.json();
    return getRandomItem(data);
  } else {
    throw new Error(`Error code: ${response.status}`);
  }
};


/*

// promise / fetch function

const getCountry = () => {
  return fetch('//restcount
    "@nodelib/fs.stat": {ries.eu/rest/v2/all').then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Error code: ${response.status}`);
    }
  }).then(data => {
    return getRandomItem(data);
  }).catch(error => {
    console.log(error);
  });
};


// promise function

const getCountry = () => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', event => {
    const isDone = event.target.readyState === 4;


    if (isDone && event.target.status === 200) {
      const data = JSON.parse(event.target.response);
      resolve(getRandomItem(data));
    } else if (isDone) {
      reject(`Error code: ${event.target.status}`);
    }
  });

  request.open('GET', '//restcountries.eu/rest/v2/all');
  request.send();
});


// callback pattern function

const getCountry = callback => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', event => {
    const isDone = event.target.readyState === 4;

    if (isDone && event.target.status === 200) {
      const data = JSON.parse(event.target.response);
      callback(undefined, getRandomItem(data));
    } else if (isDone) {
      callback(`Error code: ${event.target.status}`);
    }
  });

  request.open('GET', '//restcountries.eu/rest/v2/all');
  request.send();
};

 */
