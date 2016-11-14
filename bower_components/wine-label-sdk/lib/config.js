function Config() {
  this.host = 'http://localhost:8080';

  this.init = function(data) {
    for( var key in data ) {
      this[key] = data;
    }
  }
}

module.exports = new Config();