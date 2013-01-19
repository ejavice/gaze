if Meteor.isClient
	Template.main.greeting = ->
		return "Hello"