if Meteor.isClient
	Template.content.newsItem = ->
		content = 
			imageUrl: "http://www.musicnfilms.com/wp-content/uploads/2012/11/Justin-Bieber-photos-songs-list.jpg"
			articleUrl:  "http://www.nyt.com"
			articleName: "Hello Kitty"
			articleTopic: "Topic Topic"
		return content