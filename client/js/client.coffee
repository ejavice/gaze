if Meteor.isClient
	Template.main.greeting = ->
		return Meteor.userId()