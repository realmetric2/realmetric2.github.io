import GroupsView from '/Views/GroupsView.js'

class GroupsController {
    // groups

    render() {
        this.loadGroups();
        return new GroupsView(this.groups);
    }

    loadGroups() {
        this.groups = [
            'some',
            'list',
            'of',
            'groups',
        ]
    }

}

export default GroupsController