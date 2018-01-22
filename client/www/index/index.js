import { Template } from 'meteor/templating'

Router.route('/', function () {
	this.render('index');
}, {
	data: {}
});

Template.index.onCreated(function () {
});

Template.index.onRendered(function () {

});

Template.index.events({});

Template.index.helpers({});


