import assert from 'assert';
import Database from '../db/database';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

describe('Tests', function(){
    before((done)=>{
        new Database().connectToDb();
        done();
    });

    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(4), -1);
        });
    });
});