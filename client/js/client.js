Meteor.autosubscribe(function(){
	Meteor.subscribe("articles");
});


console.log("i am here");


var newsArticles = {};
var imageObject = {};
var data;
var gorkem;



Meteor.call("get_data", data, function(error, xmldata) {
	for(var item = 0; item < xmldata.length; item++){
		var articleObject = {};
		console.log(xmldata[item]);
		var counter = 0;
		// console.log("Item: " +item);
		// console.log(xmldata[item]);
		gorkem = xmldata[item];
		xmlDoc = $.parseXML( gorkem ),
		$xml = $( xmlDoc ),
		$xml.find( "result" ).each(function (index) {
			articleObject[index] = {"id" : index };

			imageObject[index] =  undefined;
			$(this).find("media media_item url").each(function (){
					dashSplit = $(this).text().split(".");
					image_quality = dashSplit[dashSplit.length-2].split("-");
					image_quality = image_quality[image_quality.length-1];
					if(image_quality == ("popup")){
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
			articleObject[index]["topic"] = $(this).find("section").text();


		});
		for (var i = 0; i < Object.keys(imageObject).length; i++){
			if (articleObject[i] != undefined){
					articleObject[i]["imageUrl"] = imageObject[i];
					articleObject[i]["popularity"] = i + 1;
			}

		}

		for (var j = 0; j< Object.keys(articleObject).length; j++ ){
			if (articleObject[j] =! undefined){
				if (articleObject[j]["imageUrl"] == undefined){
					delete(articleObject[j]);
				}
			}

		}
		// console.log(articleObject);

		

		for (var j = 0; j< Object.keys(articleObject).length; j++ ){
			articles.insert(articleObject[j]);
		}
		Session.set('q', articleObject);
	}
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
