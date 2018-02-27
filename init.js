import Config from '/config.js'
import Router from '/Library/Router.js'
import Events from '/Library/Events.js'


let services = {
    'events': new Events(),
};

let router = new Router(Config.routes, services);
router.move();
