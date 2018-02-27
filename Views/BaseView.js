class BaseView {
    // template
    // container
    // events

    constructor(services) {
        this.container = document.getElementById('container');
        this.events = services.events;
        this.init()
    }

    init() {
        // your code in View
    }

    render() {
        let template = document.getElementById(this.template + '-template').innerHTML;
        // template = Mustache.render(template, this.data);
        this.container.innerHTML = template;
    }

    listen(event, selector, callback) {

    }

    submit(selector, callback) {
        // return data;
    }

}

export default BaseView