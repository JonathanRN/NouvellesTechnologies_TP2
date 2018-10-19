
class UserCreationValidation {

    isUserValid(user) {
        if (this.doesUserHaveName(user) && 
            this.doesUserHavePassword(user) && 
            this.doesUserHaveEmail(user) && 
            this.doesUserHaveTeam(user)) {
            return true;
        }
        return false;
    }

    doesUserHaveName(user) {
        if (user.hasOwnProperty('name')) {
            return true;
        }
        return false;
    }

    doesUserHavePassword(user) {
        if (user.hasOwnProperty('pwd')) {
            return true;
        }
        return false;
    }

    doesUserHaveEmail(user) {
        if (user.hasOwnProperty('email')) {
            return true;
        }
        return false;
    }

    doesUserHaveTeam(user) {
        if (user.hasOwnProperty('team')) {
            return true;
        }
        return false;
    }
}

export default UserCreationValidation;