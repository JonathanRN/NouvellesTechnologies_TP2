
class EmailValidator {
    isEmailValid(email) {
        let regex = new RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");
        let found = email.match(regex);
        return (found == true);
    }
}

export default EmailValidator;