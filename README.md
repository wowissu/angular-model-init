# angular-model-init
init ng-model

## Example

```html
<input ng-model="myModel" ng-model-init="'123456'" />
<input ng-model="myModel" ng-model-init="[1, 2, 3]" />
<input ng-model="myModel" ng-model-init="myVar" />
```


## Directive

```js
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
```