import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
	let root = Meteor.users.findOne({
		username: 'root'
	});
	if (root) {
		Meteor.users.remove({
			username: 'root'
		});
	}
	let user = Accounts.createUser({
		username: 'root',
		password: 'root',
		profile: {
			name: 'Super User'
		}
	});
	Roles.addUsersToRoles(user, ['root', 'administrator']);
});