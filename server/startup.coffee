if Meteor.isServer
	Meteor.startup ->
		#db.articles.ensureIndex({'imageUrl' : 1}, {unique : true, dropDups : true})
