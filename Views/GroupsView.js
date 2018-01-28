class GroupsView {
    // data

    constructor(groups) {
        this.data = []
        this.data['groups'] = groups;
    }

    render() {
        let template = document.getElementById('groups').innerHTML;
        template = Mustache.render(template, this.data);

        let aa = document.getElementById('app');
        aa.innerHTML = template;
    }
}

export default GroupsView