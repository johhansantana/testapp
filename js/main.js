var app = angular.module("testapp", []);

app.controller("FirstCtrl", function FirstCtrl(){
	var self = this;
	self.greeting = "First";
})

app.controller('RoomCtrl', function(){
	this.OpenDoor = function(){
		alert("creak");
	}

	this.buttonTitle = "I'm a button";
})