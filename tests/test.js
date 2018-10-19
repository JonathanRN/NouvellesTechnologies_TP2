import assert from 'assert';
import Database from '../db/database';
import 'dotenv/config';
import mongoose from 'mongoose';
import User from '../db/user';
import Score from '../db/score'

mongoose.Promise = global.Promise;

let validUser = new User({name:'Lul',email:'email',pwd:'miel',team:'plebs'});
let noNameUser = new User({email:'oui@oui.oui',pwd:'miel',team:'plebs'});
let noEmailUser = new User({name:'Lul',pwd:'miel',team:'plebs'});
let noPasswordUser = new User({name:'Lul',email:'oui@oui.oui',team:'plebs'});

let validScore = new Score({email:'email',score:1000,pwd:'miel'});

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

    describe('Create user with no name', function() {
        it('should not save a user', (done)=> {
            db.createUser(noNameUser, (userCreated)=>{
                if(userCreated){
                    assert(!userCreated);
                    done();
                }
            });
        });
    });

    describe('Create user with no password', function() {
        it('should not save a user', (done)=> {
            db.createUser(noPasswordUser, (userCreated)=>{
                if(userCreated){
                    assert(!userCreated);
                    done();
                }
            });
        });
    });

    describe('Create user with no email', function() {
        it('should not save a user', (done)=> {
            db.createUser(noEmailUser, (userCreated)=>{
                if(userCreated){
                    assert(!userCreated);
                    done();
                }
            });
        });
    });

    describe('Create valid score in leaderboard', function() {
        it('should save a score in leaderboard', (done)=> {
            db.createUser(validUser, (userCreated)=>{
                if(userCreated){
                    db.addScoreToLeaderboard(validScore, (scoreCreated)=>{
                        if(scoreCreated)
                        {
                            console.log(validScore.email)
                            console.log(validUser.email)
                            assert(scoreCreated);
                            done();
                        }
                    });
                }
            });
        });
    });


});