console.log("i am here");

var data;
var gorkem;
Meteor.call("get_data", data, function(error, xmldata) {
		gorkem = xmldata;
	//console.log(gorkem);
	xmlDoc = $.parseXML( gorkem ),
		$xml = $( xmlDoc ),
		$url = $xml.find( "result" ).each(function (index) {
			$final_url = $(this).find("media").find("media_item url");
				//console.log($final_url.text());
			
		});
});

Template.content.newsItem = function() {
	var content;
	content = {
		imageUrl: "http://www.musicnfilms.com/wp-content/uploads/2012/11/Justin-Bieber-photos-songs-list.jpg",
		articleUrl: "http://www.nyt.com",
		imageUrl1: "http://photography.naturestocklibrary.com/orca-stock-photo.jpg",
		imageUrl2: "http://a0.twimg.com/profile_images/1226543249/Justin_Bieber__179__reasonably_small.jpg",
		imageUrl3: "https://twimg0-a.akamaihd.net/profile_images/2974305624/105d75afc69b5c704c7d8b987a21473d.png",
		articleName: "Article Header Foo Bar Foo",
		articleTopic: "Topic: Lorem Ipsum"
	};
	return content;
};
 
Template.content.rendered = function () {
	var $container = $('#container');
	$container.imagesLoaded( function(){
			$container.masonry({
					itemSelector : '.item',
					isAnimated : true,
					columnWidth: function( containerWidth ) {
						return containerWidth / 10;
					}
			});
	});

	$(document).scroll(function() {
		$("#navContainer").css("margin-top",""+$(document).scrollTop()+"px");
	});
};

Template.content.events({
	'click li': function (event) {
		var li_id = event.currentTarget.className;// always a P
		console.log("hello:	"+li_id);// could be the P or a child element
	}
});
