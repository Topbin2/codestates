// function fetchApi() {
//   return fetch("https://api.coinpaprika.com/v1/coins")
//     .then((data) => data.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err, "에러났어요"));
// }

async function fetchApi() {

  try {
    const response = await fetch("https://api.coinpaprika.com/v1/coins123");
    const result = await response.json();
    console.log(result);
  } catch(err) {
    console.log(err, '에러났어요');
  }

}

fetchApi();
