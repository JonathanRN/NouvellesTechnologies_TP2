
class JsonValidator {

    isUserValid(user) {
        if (user.hasOwnProperty('name') && 
            user.hasOwnProperty('pwd') && 
            user.hasOwnProperty('email') && 
            user.hasOwnProperty('team')) {
            return true;
        }
        console.log("Json invalid");
        return false;
    }

    isScoreValid(score) {
        if (score.hasOwnProperty('score') &&
            score.hasOwnProperty('pwd') && 
            score.hasOwnProperty('email')) {
            return true;
        }
        console.log("Json invalid");
        return false;
    }

    compareUsers(user1,user2) {
        return user1.name == user2.name && user1.pwd == user2.pwd && user1.email == user2.email && user1.team == user2.team;
    }
}

export default JsonValidator;