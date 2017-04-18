import 'babel-polyfill';
import 'whatwg-fetch';
import _ from 'lodash';

const API_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

let API = {
  
  getInfo(getUrl) {
    return fetch(getUrl,
    {
      method: 'GET',
      credentials: 'same-origin',
      headers: API_HEADERS
    })
    .then(function(response){ 
      return response.json();
    }).then(function(data) {
      return data;
    });
  },


  postInfo(postUrl, postBody) {
    return fetch(postUrl,
    {
      method: 'POST',
      credentials: 'same-origin',
      headers: API_HEADERS,
      body: postBody
    })
    .then(function(response){ 
      return response.json();
    }).then(function(data) {
      return data;
    });
  },
}
export default API; 