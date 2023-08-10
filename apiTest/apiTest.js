const axios = require('axios');
const API = "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com";


async function callApi() {
  const response = await axios.get(`${API}/carts`);

  console.log(response.data);
}

callApi();


// node ./apiTest/apiTest.js


// POSTMAN 을 깔면 됨. 유용함