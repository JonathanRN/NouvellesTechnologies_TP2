
class EmailValidator {
    isEmailValid(email) {
        let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        return email.match(regex) != null;
    }
}

export default EmailValidator;