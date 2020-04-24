angular
.module('phoneDetails')
.component('phoneDetails', {
    templateUrl: 'components/phone-details/phone-details.template.html',
    controller: ['$routeParams', '$http', function PhoneDetailsController($routeParams, $http) {
        this.phoneId = $routeParams.phoneId;
        var self = this;
        this.mainImage = '';
        $http.get(`phones/${this.phoneId}.json`)
        .then((response) => {
            self.phone = response.data;
            this.mainImage = self.phone.images[0];
        });
        this.mostraTitolo = true;

        this.setImage = function(imgUrl) {
            this.mainImage = imgUrl;
        }
    }],
});