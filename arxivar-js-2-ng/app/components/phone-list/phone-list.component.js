angular
.module('phoneList')
.component('phoneList', {
    templateUrl: 'components/phone-list/phone-list.template.html',
    controller: function PhoneListController() {
        this.orderProps = [
            {
                chiave: 'name',
                valore: 'Alfabetico',
            },
            {
                chiave: 'age',
                valore: 'Età',
            }
        ]
        this.query = 'tablet';
        this.phones = [
            {
              name: 'Nexus S',
              snippet: 'Fast just got faster with Nexus S.',
              age: 1
            }, {
              name: 'Motorola XOOM™ with Wi-Fi',
              snippet: 'The Next, Next Generation tablet.',
              age: 2
            }, {
              name: 'MOTOROLA XOOM™',
              snippet: 'The Next, Next Generation tablet.',
              age: 3
            }
          ];

        this.valoreChiave = function(chiave) {
            return this.orderProps.find(p => p.chiave === chiave ).valore;
        }
    }
});
