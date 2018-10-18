import assert from 'assert';
import database from '../db/database'

describe('Tests', function() {
    before('connect', function(){
        new database().connectToDb(); 
    })

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

});