var app = angular.module('TrackIt', ['ngMaterial']);
var meal = "";
var percents = 50;
app.controller("AppCtrl", ['$scope', function($scope) {
    getParameters();
    $scope.percents = percents;
    $scope.meal = meal;
}]);

/** Get parameters passed wia search field. */
function getParameters() {
    var query = location.search.substring(1);
    var parameters = {};
    var keyValues = query.split(/&/);
    $.each( keyValues, function( index, keyValue ){
        var keyValuePairs = keyValue.split(/=/);
        var key = keyValuePairs[0];
        var value = keyValuePairs[1];
        parameters[key] = value;
    });
    meal = parameters['meal'];
    percents = parameters['percents'];
}

$(window).load(function() {
    $("#toolbarTitle").html(meal);
    $("#percentsText").html(percents + "%");
});
