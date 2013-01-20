console.log("i am here");

var articleObject = {};
var newsArticles = {};
var imageObject = {};
var data;
var gorkem;
var counter = 0;


Meteor.call("get_data", data, function(error, xmldata) {
	gorkem = xmldata;
	xmlDoc = $.parseXML( gorkem ),
	$xml = $( xmlDoc ),
	$xml.find( "result" ).each(function (index) {

		articleObject[index] = {"id" : index, "attributes" : [] };

		$(this).find("media media_item url").each(function (){
				dashSplit = $(this).text().split("-");
				image_quality = dashSplit[1].split(".")[0];
				if(image_quality == ("popup" || "superJumbo" || "articleInline" || "Jumbo")){
					console.log(index + " " + image_quality);
					imageObject[index] =  $(this).text();
				}
					
		});
		$(this).find("url").each(function (index){
			urlSplit = $(this).text().split(".");
			if(urlSplit[3] == "html"){
				articleUrl = {"articleUrl" : $(this).text()};
				articleObject[counter]["articleUrl"] = $(this).text();
				counter = counter + 1;
			}
		});

		articleObject[index]["title"] = $(this).find("title").text();


	});
	for (var i = 0; i <= Object.keys(imageObject).length; i++){
		//if (imageObject[i] != undefined){
		//str = imageObject[i];
		//imageObject[i] = str.replace("thumbStandard","popup");
		// }
		articleObject[i]["imageUrl"] = imageObject[i];
		articleObject[i]["popularity"] = i + 1;
	}
	console.log(articleObject);
	Session.set('q', articleObject);

	});

Template.content.articleItem = function() {

	return Session.get('q');
};


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
