import assert from 'assert';
import Database from '../db/database'

describe('Tests', function() {
    before('connect', function(){
        new Database().connectToDb(); 
    })

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

});