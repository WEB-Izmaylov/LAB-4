(function () {
  'use strict';

  const model = {
    buy: [
      { name: "Яблук", amount: 10, id: 1 },
      { name: "Апельсин", amount: 15, id: 2 },
      { name: "Мандарин", amount: 20, id: 3 },
      { name: "Бананів", amount: 25, id: 4 }
    ],
    bougth: []
  };

  const LAB = angular.module("LAB", []);

  LAB.controller("buy", function ($scope) {
    $scope.data = model;
    $scope.buy = function (id) {
      $scope.data.bougth.push($scope.data.buy.find(item => item.id == id))
      $scope.data.buy.splice($scope.data.buy.indexOf($scope.data.buy.find(item => item.id == id)), 1)
    }
  });

  LAB.controller("bought", function ($scope) {
    $scope.data = model;
  });

})();
