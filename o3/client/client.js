	Template.hello.greeting = function () {
		return "Welcome to o3.";
	};

	Template.hello.events({
		'click input': function () {
			// template data, if any, is available in 'this'
			if (typeof console !== 'undefined') {
				console.log("You pressed the button");
			}
		}
	});

	Template.hello.greeting = function () {
		return "Welcome to o3.";
	};

	Template.hello.events({
		'click input': function () {
			// template data, if any, is available in 'this'
			if (typeof console !== 'undefined') {
				console.log("You pressed the button");
			}
		}
	});

	Deps.autorun(function (user) {
		if (Meteor.user()) {
			userIsLoggedIn();
		} else {
			userIsLoggedOut();
		}
	});

	function userIsLoggedIn() {
		var profileImage = "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large";
		Meteor.users.update({_id:Meteor.user()._id}, {$set:{"profile.profileImage":profileImage}});
	}

	function userIsLoggedOut() {
		console.log('not logged in ');
	}

	console.log(Meteor.users);