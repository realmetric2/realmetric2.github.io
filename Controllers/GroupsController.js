import GroupsView from '/Views/GroupsView.js'
import RmApi from '/Library/RmApi.js'

class GroupsController {
    // groups

    handle() {
        let token = localStorage.getItem('token');


        let api = new RmApi('https://realmetric.mailfire.io/');
        api.addHeader('Authorization', 'Basic ' + token);
        api.get('metrics')
            .then(function (data) {


                GroupsView.data = function () {
                    return {
                        'test': 'shmest',
                        'metrics': data.metrics,
                    }
                };
                Vue.component('template-component', GroupsView);
                let view = new Vue({
                    el: '#app',
                });


            });

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