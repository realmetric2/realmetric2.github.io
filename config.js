import GroupsController from "/Controllers/GroupsController.js";
import LoginController from "/Controllers/LoginController.js";

const Config = {
    'routes': [
        ['/', GroupsController],
        ['/login', LoginController]
    ],
};
export default Config