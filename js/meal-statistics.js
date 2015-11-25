var app = angular.module('TrackIt', ['ngMaterial']);

$(window).load(function() {
    /** Get parameters passed wia search field. */
    var query = location.search.substring(1);
    var parameters = {};
    var keyValues = query.split(/&/);
    $.each( keyValues, function( index, keyValue ){
        var keyValuePairs = keyValue.split(/=/);
        var key = keyValuePairs[0];
        var value = keyValuePairs[1];
        parameters[key] = value;
    });
    var meal = parameters['meal'];
    var percents = parameters['percents'];

    $("#toolbarTitle").html(parameters['meal']);
});