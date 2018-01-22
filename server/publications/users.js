import { Meteor } from 'meteor/meteor';

Meteor.publish('users_db', function() {
	if (Roles.userIsInRole(Meteor.userId(), ['root'])) {
		return Meteor.users.find();
	} else if (Roles.userIsInRole(Meteor.userId(), ['administrator'])) {
		return Meteor.users.find({
			roles: {
				$nin: ['root']
			}
		});
	} else {
		return Meteor.users.find({
			_id: Meteor.userId()
		});
	}
});