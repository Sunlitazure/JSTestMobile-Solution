'use strict';

var ImplementationModule = require('../../src/implementation-module');

describe('ImplementationModule', function() {
    describe('#head', function() {
        it('Should return the first item in an array', function() {
		var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
		var result = ImplementationModule.head(arr);

		expect(result)
		.to.equal('a');
        });
    });

    describe('#tail', function() {
        it('should remove the first item from an array', function() {
		var arr = ['a', 'b', 'c', 'd',["d.1", "d.2"], 'e', 'f'];
		var result = ImplementationModule.tail(arr);

		expect(result)
		.to.eql(['b', 'c', 'd',["d.1", "d.2"], 'e', 'f']);
        });
    });

    describe('#cons', function() {
        it('Should return concatinated array of both variables if both are arrays', function() {
		var x = [ 1, 'a', "alpha"];
		var y = [ 2, 'b', "beta"];

		var result = ImplementationModule.cons(x, y);

		expect(result)
		.to.eql(x.concat(y));
        });

	it('Should return false if y is not an array', function() {
		var x = [ 1, 'a', "alpha"];
		var y = "potato";

		var result = ImplementationModule.cons(x, y);

		expect(result)
		.to.false;
	});
    });
});
