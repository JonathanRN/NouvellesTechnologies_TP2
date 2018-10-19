import assert from 'assert';
import Database from '../db/database';
import 'dotenv/config';
import mongoose from 'mongoose';
import User from '../db/user';
import Score from '../db/score'

mongoose.Promise = global.Promise;

let validUser = {name:'Lul',email:'raoul@gmail.com',pwd:'miel',team:'plebs'};
let noNameUser = {email:'raoul@gmail.com',pwd:'miel',team:'plebs'};
let noEmailUser = {name:'Lul',pwd:'miel',team:'plebs'};
let noPasswordUser = {name:'Lul',email:'raoul@gmail.com',team:'plebs'};

let noAtEmailUser = {name:'Lul',email:'raoulgmail.com',pwd:'miel',team:'plebs'};
let noDotEmailUser = {name:'Lul',email:'raoul@gmailcom',pwd:'miel',team:'plebs'};
let noAdressEmailUser = {name:'Lul',email:'@gmail.com',pwd:'miel',team:'plebs'};
let noDomainEmailUser = {name:'Lul',email:'raoul@.com',pwd:'miel',team:'plebs'};

let validPostRequestScore = {email:'raoul@gmail.com',score:1000,pwd:'miel'};
let noEmailPostRequestScore = {score:1000,pwd:'miel'};
let noScorePostRequestScore = {email:'raoul@gmail.com',pwd:'miel'};
let noPasswordPostRequestScore = {email:'raoul@gmail.com',score:1000};
let negativeScorePostRequestScore = {email:'raoul@gmail.com',score:-1000,pwd:'miel'};

let db = new Database();

describe('Tests', function(){
    before((done)=> {
        db.connectToTestDb();
        done();
    });

    after((done) => {
        mongoose.connection.close();
        done();
    })

    this.beforeEach((done)=> {
        mongoose.connection.collections.users.drop(()=> {
            done();
        });
    });

    //User Creation tests
    describe('////UserCreationTests////', function(){
        describe('Create valid user', function() {
            it('should save a user', (done)=> {
                db.createUser(validUser, (userCreated)=>{
                    assert(userCreated);
                    done();
                });
            });
        });

        describe('Create user with no name', function() {
            it('should not save a user', (done)=> {
                db.createUser(noNameUser, (userCreated)=>{
                    assert(!userCreated);
                    done();
                });
            });
        });

        describe('Create user with no password', function() {
            it('should not save a user', (done)=> {
                db.createUser(noPasswordUser, (userCreated)=>{
                    assert(!userCreated);
                    done();
                });
            });
        });

        describe('Create user with no email', function() {
            it('should not save a user', (done)=> {
                db.createUser(noEmailUser, (userCreated)=>{
                    assert(!userCreated);
                    done();
                });
            });
        });

        describe('Create user with no @ email', function() {
            it('should not save a user', (done)=> {
                db.createUser(noAtEmailUser, (userCreated)=>{
                    assert(!userCreated);
                    done();
                });
            });
        });

        describe('Create user with no dot email', function() {
            it('should not save a user', (done)=> {
                db.createUser(noDotEmailUser, (userCreated)=>{
                    assert(!userCreated);
                    done();
                });
            });
        });

        describe('Create user with no adress email', function() {
            it('should not save a user', (done)=> {
                db.createUser(noAdressEmailUser, (userCreated)=>{
                    assert(!userCreated);
                    done();
                });
            });
        });

        describe('Create user with no domain email', function() {
            it('should not save a user', (done)=> {
                db.createUser(noDomainEmailUser, (userCreated)=>{
                    assert(!userCreated);
                    done();
                });
            });
        });
    });

    //Score creation tests
    describe('////ScoreCreationTests////', function(){
        describe('Create valid score in leaderboard', function() {
            it('should save a score in leaderboard', (done)=> {
                db.createUser(validUser, (userCreated)=> {
                    if(userCreated) {
                        db.addScoreToLeaderboard(validPostRequestScore, (scoreCreated)=> {
                            assert(scoreCreated);
                            done();
                        });
                    }
                });
            });
        });

        describe('Create score with no email in leaderboard', function() {
            it('should not save a score in leaderboard', (done)=> {
                db.createUser(validUser, (userCreated)=> {
                    if(userCreated) {
                        db.addScoreToLeaderboard(noEmailPostRequestScore, (scoreCreated)=> {
                            assert(!scoreCreated);
                            done();
                        });
                    }
                });
            });
        });

        describe('Create score with no score in leaderboard', function() {
            it('should not save a score in leaderboard', (done)=> {
                db.createUser(validUser, (userCreated)=> {
                    if(userCreated) {
                        db.addScoreToLeaderboard(noScorePostRequestScore, (scoreCreated)=> {
                            assert(!scoreCreated);
                            done();
                        });
                    }
                });
            });
        });

        describe('Create score with no password in leaderboard', function() {
            it('should not save a score in leaderboard', (done)=> {
                db.createUser(validUser, (userCreated)=> {
                    if(userCreated) {
                        db.addScoreToLeaderboard(noPasswordPostRequestScore, (scoreCreated)=> {
                            assert(!scoreCreated);
                            done();
                        });
                    }
                });
            });
        });

        describe('Create negative score in leaderboard', function() {
            it('should not save a score in leaderboard', (done)=> {
                db.createUser(validUser, (userCreated)=> {
                    if(userCreated) {
                        db.addScoreToLeaderboard(negativeScorePostRequestScore, (scoreCreated)=> {
                            assert(!scoreCreated);
                            done();
                        });
                    }
                });
            });
        });
    });
});