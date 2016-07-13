/* 
 *  @version: 0.0.1
 *  @author : Parth<parthshukla1985@gmail.com>
 *  @purpose : Create a service with resource for Rest Apis here 
 */
angular.module('ResourceApp').factory('ResourceFactory',function($resource){
    return $resource('/user/:id',null,{ 'update': { method:'PUT' }});
});

