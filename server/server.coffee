if Meteor.isServer
	Accounts.config(
		sendVerificationEmail: true
	)