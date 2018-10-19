import assert from 'assert';
import Database from '../db/database';
import 'dotenv/config';
import mongoose from 'mongoose';
import User from '../db/user';

mongoose.Promise = global.Promise;

let validUser = new User({name:'Lul',email:'oui@oui.oui',pwd:'miel',team:'plebs'})
let db = new Database();

describe('Tests', function(){
    before((done)=>{
        db.connectToTestDb();
        done();
    });

    this.beforeEach((done)=>{
        mongoose.connection.collections.users.drop(()=>{
            done();
        });
    });

    describe('Create valid user', function() {
        it('should save a user', (done)=> {
            db.createUser(validUser, (userCreated)=>{
                if(userCreated){
                    assert(userCreated);
                    done();
                }
            });
        });
    });

    describe('Create valid user', function() {
        it('should save a user', (done)=> {
            db.createUser(validUser, (userCreated)=>{
                if(userCreated){
                    assert(userCreated);
                    done();
                }
            });
        });
    });
});