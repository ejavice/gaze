appRouter = Backbone.Router.extend(
	routes = "*path" : "main"
	main = (url_path) -> 
		Session.set('page_id', url_path)
)

Router = new appRouter

Backbone.history.start(
	pushState: true
)