
class EmailValidator {
    isEmailValid(email) {
        let regex = new RegExp("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$");
        return email.match(regex);
    }
}

export default EmailValidator;