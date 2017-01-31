var rest = require('../rest');
var eventBus = require('../eventBus');

function WineCollection() {
  this.allLoaded = false;

  this.data = [];
  // for fast lookup
  this.indexes = {
    id : {}
  };

  this.load = function() {
    if( this.loadCalled ) return;
    this.loadCalled = true;

    rest.wine.getAll((err, resp) => {
      if( err ) throw new Error('Error loading all wines in SDK.collections.wines');
      this.data = resp.body.list;

      /**
       * setup index by id
       */
      this.data.forEach((item) => {
        this.indexes.id[item.wine] = item;
      });

      this.allLoaded = true;
      eventBus.emit('all-wine-data-loaded', this.data);
    });
  },

  this.get = function(id, callback) {
    var item = this.indexes.id[id];
    if( this.allLoaded || item) {
      return callback(item);
    }

    rest.wine.get(id, (err, resp) => {
      if( err ) throw new Error(`Error loading wine ${id} in SDK.collections.wines`);

      var item = resp.body;
      this.indexes.id[item.wine] = item;

      eventBus.emit('wine-data-loaded', item);
      if( callback ) callback(item);
    });
  }

}

module.exports = new WineCollection();