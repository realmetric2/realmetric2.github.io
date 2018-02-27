import BaseView from "/Views/BaseView.js";

class LoginView extends BaseView {
    // template

    init() {
        this.template = 'login';
        this.submit('#loginform', this.login());
    }

    login() {

    }
}

export default LoginView