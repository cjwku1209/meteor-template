import { Template } from 'meteor/templating';
import {Meteor} from "meteor/meteor";

Template.header.onCreated(function () {

});

Template.header.onRendered(function () {
	$("#id_header_dimmer_login").hide();
	$("#id_header_modal_login").modal();
	$("#id_header_dropdown_login").hover(
		() => {
			if (Meteor.user()) {
				$("#id_header_menu_login").stop().fadeIn(500);
			}
		},
		() => {
			if (Meteor.user()) {
				$("#id_header_menu_login").delay(100).stop().fadeOut(200);
			}
		}
	);
	$("#id_header_button_login").click(() => {
		$("#id_header_dimmer_login").show();
		Meteor.loginWithPassword($("#id_header_input_email").val(), $("#id_header_input_password").val());
		$("#id_header_dimmer_login").hide();
	});
});

Template.header.events({
	'click #id_header_item_home': () => {
		window.location = '/';
	},

	'click #id_header_icon_login': () => {
		if (!Meteor.user()) {
			$("#id_header_modal_login").modal('show');
		}
	},

	'click #id_header_button_logout': () => {
		Meteor.logout();
	}
});

Template.header.helpers({});