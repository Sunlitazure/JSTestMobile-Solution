'use strict';

var TestModule = require('../../src/test-module');

describe('#reverse', function() {
    it('It should take a string and return the words in reverse', function() {
        // set up
        var str = 'life is so much better in reverse';

        // run unit
        var result = TestModule.reverse(str);

        // verfiy expectations
        expect(result)
        .to.equal('reverse in better much so is life');
    });
});

describe('#enforceUniqueValues', function() {
    it('should take a list and return a list of only unique values', function() {
        // set up
        var list = ['couches', 'shoes', 'watches', 'pets', 'watches', 'rope', 'shoes'];

        // run unit
        var result = TestModule.enforceUniqueValues(list);

        // verify expectations
        expect(result)
        .to.eql(['couches', 'pets', 'rope', 'shoes', 'watches'])
    });
});

describe('#flatten', function() {
    it('should flatten multi-dimensional arrays', function() {
        // set up
        var multi = [1, 2, [3, 4], 5, [6, 7, [8, 9], 10]];

        // run unit
        var result = TestModule.flatten(multi);

        // verify expectations
        expect(result)
        .to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});

describe('#areStringsAnagrams', function() {
    it('should return true if strings are anagrams', function() {
        // set up
        var str1 = 'the quick brown fox';
        var str2 = 'quick fox brown the';

        // run unit
        var result = TestModule.areStringsAnagrams(str1, str2);

        // verify expectations
        expect(result)
        .to.be.true;
    });
});

describe('#emailContainsLettersAndNumbers', function() {
    it('should return true if string has letters and numbers', function() {
        // set up
        var address = 'creole333@aol.com';

        // run unit
        var result = TestModule.emailContainsLettersAndNumbers(address);

        // verify expectations
        expect(result)
        .to.be.true;
    });

    it('should return false if string has letters and numbers', function() {
        // set up
        var address = 'biff@aol.com';

        // run unit
        var result = TestModule.emailContainsLettersAndNumbers(address);

        // verify expectations
        expect(result)
        .to.be.false;
    });
});
