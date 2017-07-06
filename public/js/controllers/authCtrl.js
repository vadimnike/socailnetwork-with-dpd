var app = angular.module('myApp');

    app.controller('loginCtrl', function($scope){});
    app.controller('registerCtrl', function($scope){});

    app.controller('AuthCtrl', function($scope){

        $scope.Users = [{}];
        $scope.minlength = 7;

        //Switch/case method
        // $scope.isError = function(name, userDetails, isvalid){
        //     switch(name){
        //         case 'loginForm':
        //             $scope.$apply(function(){
        //                 if(!isvalid){
        //                     $scope.showError = true;
        //                     console.log('It is loginForm');
        //                 }
        //                 else {
        //                     $scope.Users.push(userDetails);
        //                 };
        //             });
        //             break;
        //
        //         case 'registerForm':
        //             $scope.$apply(function(){
        //                 if(!isvalid){
        //                     $scope.showError = true;
        //                     console.log('It is registerForm');
        //                 }
        //             });
        //             break;
        //     }
        // };


        //Method with 3 args. FormName as first argument

        $scope.isError = function(name, userDetails, isvalid){
            if (name == 'loginForm'){
               if(!isvalid){
                    $scope.showError = true;
                   console.log('Something gone wrong');
               }
               else {
                   $scope.Users.push(userDetails);
               };
            } else {
                if(!isvalid){
                    $scope.showError = true;
                    console.log('Hello');
                }

            }
        };

        //Method with 2 args. Without FormName as first argument

        // $scope.isError = function(userDetails, isvalid){
        //     if(!isvalid){
        //         $scope.showError = true;
        //         console.log('Something gone wrong');
        //     }
        //     else {
        //         $scope.Users.push(userDetails);
        //     };
        // };

        $scope.getError = function(error){
            if(angular.isDefined(error)){
                if(error.required){
                    return "Поле не должно быть пустым";
                }else  if(error.email){
                    return "Введите правильно email";
                } else  if(error.minlength){
                    return "Пароль должен содержать минимум 7 символов"
                }else  {
                    return "Пароль должен содержать цифры, прописные и заглавные буквы"
                }
            };
        };
    });