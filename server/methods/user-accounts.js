import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({

	'create-user': (username, email, password, surname, name, age, sex) => {
		Accounts.createUser({
			username: username,
			email: email,
			password: password,
			profile: {
				surname: surname,
				name: name,
				age: age,
				sex: sex
			}
		})
		Accounts.sendVerificationEmail(Meteor.userId(), email)
	}

});

Accounts.emailTemplates.siteName = 'meteor-template';
Accounts.emailTemplates.from = 'meteor-template Admin <cjwku@connect.ust.hk>';
Accounts.emailTemplates.enrollAccount.subject = (user) => {
	return `Welcome to my meteor-template, ${user.profile.name}`;
};
Accounts.emailTemplates.enrollAccount.text = (user, url) => {
	return 'Please click on the link bellow to activate your account\n\n' + url;
};
Accounts.emailTemplates.verifyEmail = {
	subject() {
		return "Activate your account now!";
	},
	text(user, url) {
		return `Welcome ${user}! To verify your email please click the following link: ${url}`;
	}
};

