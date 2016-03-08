(function (angular) {

    var app = angular.module('ngModelInit');

    app.directive('ngModelInit', ['$parse', function ($parse) {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function ($scope, $element, $attrs, ngModel) {
                ngModel.$setViewValue($parse($attrs.ngModelInit)($scope));
                ngModel.$render();
            }
        };
    }]);

})(angular)
