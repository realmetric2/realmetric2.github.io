import BaseController from '/Controllers/BaseController.js';
import LoginView from "/Views/LoginView.js";

class LoginController extends BaseController {
    handle() {
        return new LoginView(this.services);
    }
}

export default LoginController