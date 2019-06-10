casperApp.controller('registerCtrl', function($scope, $http){
    $scope.closeMsg = function(){
     $scope.alertMsg = false;
    };
   
    $scope.login_form = true;
   
    $scope.showRegister = function(){
     $scope.login_form = false;
     $scope.register_form = true;
     $scope.alertMsg = false;
    };
   
    $scope.showLogin = function(){
     $scope.register_form = false;
     $scope.login_form = true;
     $scope.alertMsg = false;
    };
   
    $scope.submitRegister = function(){
     $http({
      method:"POST",
      url:"register.php",
      data:$scope.registerData
     }).success(function(data){
      $scope.alertMsg = true;
      if(data.error != '')
      {
       $scope.alertClass = 'alert-danger';
       $scope.alertMessage = data.error;
      }
      else
      {
       $scope.alertClass = 'alert-success';
       $scope.alertMessage = data.message;
       $scope.registerData = {};
      }
     });
    };
   
    $scope.submitLogin = function(){
     $http({
      method:"POST",
      url:"login.php",
      data:$scope.loginData
     }).success(function(data){
      if(data.error != '')
      {
       $scope.alertMsg = true;
       $scope.alertClass = 'alert-danger';
       $scope.alertMessage = data.error;
      }
      else
      {
       location.reload();
      }
     });
    };
   
   });