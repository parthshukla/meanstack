/* 
 *  @version: 0.0.1
 *  @author : Parth<parthshukla1985@gmail.com>
 *  @purpose:For angular routing of views using stateprovider(ui-router)
 *  
 */
'use strict';
angular.module('ResourceApp')
        .run(["$rootScope", "$state", function ($rootScope, $state) {
            $rootScope.$state = $state; // state to be accessed from view
        }])
        .config(['$stateProvider', function ($stateProvider) {
                $stateProvider
                        .state('addUser', {
                            url: '/addUser',
                            templateUrl: 'views/addUser.html',
                            controller:"restApiController"
                        })
                        .state('updateUser', {
                            url: '/updateUser',
                            templateUrl: 'views/updateUser.html',
                            controller:"restApiController"
                        })
                        .state('viewUser', {
                            url: '/viewUser',
                            templateUrl: 'views/viewUser.html',
                            controller:"restApiController"
                        })
                        .state('viewAllUsers', {
                            url: '/viewAllUsers',
                            templateUrl: 'views/allUsers.html',
                            controller:"viewAllController"
                        })
                        .state('deleteUser', {
                            url: '/deleteUser',
                            templateUrl: 'views/deleteUser.html',
                            controller:"restApiController"
                        });

            }]);