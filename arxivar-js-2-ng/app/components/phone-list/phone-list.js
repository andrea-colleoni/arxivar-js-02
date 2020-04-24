angular
.module('corsoJS')
.component('phoneList', {
    templateUrl: 'components/phone-list/phone-list.html',
    controller: function PhoneListController($scope) {
        $scope.phones = [{
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
        }, {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
        }, {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
        }];
    }
});
