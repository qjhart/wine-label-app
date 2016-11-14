var request = require('superagent');
var config = require('../config');

function get(id) {
  console.log('todo');
}

function getAll(callback) {
  request
    .get(`${config.host}/data/wine-list.json`)
    .end(callback);
}

module.exports = {
  get : get,
  getAll : getAll
}