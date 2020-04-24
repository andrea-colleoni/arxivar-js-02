angular
.module('phoneList')
.component('phoneList', {
    templateUrl: 'components/phone-list/phone-list.template.html',
    controller: ['$http', function PhoneListController($http) {
        // il servizio $http è disponibile qui, perchè la D.I: di angular provvede
        // a iniettarlo nel controller
        // - $https deve essere disponibile nel module che ha caricato QUESTO modulo
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
        this.query = '';
        
        var self = this;
        $http.get('phones/phones.json').then((response) => self.phones = response.data);

        this.valoreChiave = function(chiave) {
            return this.orderProps.find(p => p.chiave === chiave ).valore;
        }
    }],
});
