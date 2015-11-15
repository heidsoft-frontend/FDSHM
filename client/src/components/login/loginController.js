module.exports = ['$scope', 'BaseService', '$rootScope', function($scope, BaseService, $rootScope) {
    if (window.location.pathname == '/login') {
        $scope.loginIsShow = true;
    } else {
        $scope.loginIsShow = false;
    }
    $scope.$on('showLogin', function() {
        $scope.loginIsShow = true;
    })
    $scope.changeLoginShow = function($event) {
        console.log($event);
        if ($event.target.id == "change-show" && window.location.pathname != '/login') {
            $scope.loginIsShow = !$scope.loginIsShow;
        }
    }
    $scope.login = function() {
        if (!$scope.user.username || !$scope.user.password) {
            return;
        }
        BaseService.user.login($scope.user.username, $scope.user.password).then(function(result) {
            console.log(result);
            if (result.data.success) {
                window.location.pathname = '/';
            } else {
                alert('账号不存在，或者密码错误！');
            }
        });
    }
    $scope.showSignup = function(){
        $rootScope.$broadcast('showSignup');
    }
}]
