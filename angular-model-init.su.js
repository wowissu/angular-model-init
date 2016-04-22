/**
    Version: 1.0.0
    Author: wowissu
    github: https://github.com/wowissu/angular-model-init
 */
/*global arguments, window, $, angular */
/*jslint this:true */
/*property
    require, module, directive, restrict, link, $setViewValue, $render, ngModelInit, $element
*/

(function (angular) {
    "use strict";

    var app = angular.module('ngModelInit', []);

    app.directive('ngModelInit', ['$parse', function ($parse) {
        return {
            require: '?ngModel',
            restrict: 'A',
            link: function ($scope, $element, $attrs, ngModel) {
                if (!ngModel) {
                    return;
                }
                ngModel.$setViewValue($parse($attrs.ngModelInit)($scope));
                ngModel.$render();
            }
        };
    }]);

}(angular));
