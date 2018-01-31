import LoginView from "/Views/LoginView.js";

class LoginController {
    handle() {
        return new LoginView();
    }
}

export default LoginController