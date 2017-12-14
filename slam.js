//var app = angular.module('slambook',[]);
// app.controller('formCtrl',function($scope)
//  {
//  $scope.user = {
//   name:'',
//   lovedone:''
//  };
//  $scope.saveSlam = function(){
//   localStorage.setItem('user', JSON.stringify($scope.user));
//  }
 
// });
​
​
​
var app = angular.module('slambook',[]);
app.controller('slamBookController',function($scope)
 {
 // $scope.user = {
 //  name:'',
 //  lovedone:''
 // };
 $scope.user = {};
 $scope.IsHidden = false;
 $scope.content = true;
 $scope.msg_content ="";
 $scope.saveSlam = function(){
  var value = {
   "name" : $scope.user.name,
   "lovedone" : $scope.user.lovedone,
   "hobbies": $scope.user.hobbies,
   "love": $scope.user.love,
   "mobile": $scope.user.mobile,
   "mail": $scope.user.mail,
   "bday": $scope.user.bday,
   "memories": $scope.user.memories,
   "admire": $scope.user.admire,
   "secrets": $scope.user.secrets
  };
  localStorage.setItem('user', JSON.stringify(value));
  $scope.getvalue = JSON.parse(localStorage.getItem('user'));
  console.log($scope.getvalue.name);
  console.log($scope.getvalue);
  // $scope.IsHidden = true;
  $scope.IsHidden = true;
  $scope.content = false;
  var myEl = angular.element( document.querySelector( '#book' ) );
  myEl.append(document.getElementById("msg_content").innerHTML);
  console.log(document.getElementById("msg_content").innerHTML);
 }
