class Router {
    // routes
    // path
    // params
    // services

    constructor(routes, services) {
        this.routes = routes;
        this.services = services;
        this.path = window.location.pathname;
        this.params = window.location.search;
    }

    go(path) {
        this.path = path;
        this.move();
    }

    move() {
        let route = this.match();
        let controller = new route[1](this.services);
        let view = controller.handle();
        view.render();
    }

    match() {
        for (let r of this.routes) {
            if (r[0] === this.path) {
                return r;
            }
        }
    }
}

export default Router