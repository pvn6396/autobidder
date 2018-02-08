angular.module('angularApp')
.controller('add_equipCtrl', ['$scope','$http', function ($scope,$http) {
    $scope.basic={};
    $scope.types=[
        {id:0, item:'Equipment', cat:['cat1','cat2'] },
        {id:1, item:'Car', cat:['sedan','hatchback '] },
        {id:2, item:'Truck', cat:['6','4'] }
    ];

    $scope.add_equipment=function(){
        $http.get("public/templates/equipments/add_eq_end.html")
        .then(function(data) {
            $('#form').html(data.data);
        });
    };
    $scope.checkouteq=function(){
        console.log("$scope.basic");
        console.log($scope.choice);
    };
    
 }]);

//google search API https://maps.googleapis.com/maps/api/place/autocomplete/json?input=indore&types=(cities)&language=pt_BR&key=AIzaSyD4UZHEVCIkShQBMTxLbndiFr5Y5EIS7aI