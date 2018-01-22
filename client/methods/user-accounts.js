import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Accounts.onEmailVerificationLink((token, done) => {
	Accounts.verifyEmail(token, (err) => {
		if (!err) {
			Roles.addUsersToRoles(Meteor.userId(), ['user']);
		}
	})
})