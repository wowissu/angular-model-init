# angular-model-init
let ng-model can init

# How to use


## Example

```js
app.directive('ngModelInit', ['$parse', function ($parse) {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function ($scope, $element, $attrs, ngModel) {
            ngModel.$setViewValue($parse($attrs.ngModelInit)($scope));
            ngModel.$render();
            $scope.$destroy();
        }
    };
}]);
```


```html
<input ng-model="myModel" ng-model-init="'123456'" />
<input ng-model="myModel" ng-model-init="[1, 2, 3]" />
<input ng-model="myModel" ng-model-init="myVar" />
```


