const assert  = require('assert');
const {sum, mult} = require('../index.js');

describe('function sum', () => {
    it('should function sum equal 10', () => {
        assert.equal(sum( 2, 4), 6)
    })

    it ('should function sum not equal 0', function () {
        assert.notEqual(sum ( 2, 4), 0)
    });
})

it('should function sum equal 10', () => {
    assert.equal(sum( 2, 4), 6)
})

it ('should function sum not equal 0', function () {
    assert.notEqual(sum ( 2, 4), 0)
});

it('should mult a equals 8', () => {
    assert.equal(mult( 2, 4), 8)
});