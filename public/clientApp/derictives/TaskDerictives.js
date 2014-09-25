

angular.module('clientApp').directive('ngEnterAction', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnterAction);
                });

                event.preventDefault();
            }
        });
    };
});

angular.module('clientApp').directive('ngSelectText', function () {
    return function (scope, element, attrs)
    {
        scope.$watch(attrs.ngShow,function(value)
        {
            if(value)
            {
                var jElement = $(element);
                jElement.focus();
                jElement.select();
            }
        });
    };
});

angular.module('clientApp').directive('ngCancelEditAction', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngCancelEditAction);
                });

                event.preventDefault();
            }
        });
    };
});
