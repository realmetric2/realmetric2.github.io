class BaseView {
    // template

    render() {
        let template = document.getElementById(this.template + '-template').innerHTML;
        // template = Mustache.render(template, this.data);

        let aa = document.getElementById('app');
        aa.innerHTML = template;
    }

}

export default BaseView