'use strict';

var ImplementationModule = {
    head: function(list) {
        return list[0];
    },

    tail: function(list) {
        return list.slice(1);
    },

    cons: function(x, y) {
        if (Object.prototype.toString.call(y) === '[object Array]') {
            return x.concat(y);
        }

        return false;
    }
}

module.exports = ImplementationModule;
