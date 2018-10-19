
class JsonValidator {

    isUserValid(user) {
        if (user.hasOwnProperty('name') && 
            user.hasOwnProperty('pwd') && 
            user.hasOwnProperty('email') && 
            user.hasOwnProperty('team')) {
            return true;
        }
        return false;
    }

    isScoreValid(score) {
        if (score.hasOwnProperty('score') &&
            score.hasOwnProperty('pwd') && 
            score.hasOwnProperty('email')) {
            return true;
        }
        return false;
    }
}

export default JsonValidator;