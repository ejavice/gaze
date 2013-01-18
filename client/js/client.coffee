if Meteor.isClient
	Template.main.greeting = ->
		return "Hows it going"

	Template.main.hello = ->
		return true