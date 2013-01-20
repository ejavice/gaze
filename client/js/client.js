Meteor.autosubscribe(function(){
	Meteor.subscribe("articles");
});

var newsArticles = {};
var imageObject = {};
var data;
var gorkem;



// Meteor.call("get_data", data, function(error, xmldata) {
// 	for(var item = 0; item < xmldata.length; item++){
// 		var articleObject = {};
// 		console.log(xmldata[item]);
// 		var counter = 0;
// 		// console.log("Item: " +item);
// 		// console.log(xmldata[item]);
// 		gorkem = xmldata[item];
// 		xmlDoc = $.parseXML( gorkem ),
// 		$xml = $( xmlDoc ),
// 		$xml.find( "result" ).each(function (index) {
// 			articleObject[index] = {"id" : index };

// 			imageObject[index] =  undefined;
// 			$(this).find("media media_item url").each(function (){
// 					dashSplit = $(this).text().split(".");
// 					image_quality = dashSplit[dashSplit.length-2].split("-");
// 					image_quality = image_quality[image_quality.length-1];
// 					if(image_quality == ("popup")){
// 						imageObject[index] =  $(this).text();
// 					}
						
// 			});
// 			$(this).find("url").each(function (index){
// 				urlSplit = $(this).text().split(".");
// 				if(urlSplit[3] == "html"){
// 					articleUrl = {"articleUrl" : $(this).text()};
// 					articleObject[counter]["articleUrl"] = $(this).text();
// 					counter = counter + 1;
// 				}
// 			});

// 			articleObject[index]["title"] = $(this).find("title").text();
// 			articleObject[index]["topic"] = $(this).find("section").text();
// 		});
		
// 		for (var i = 0; i < Object.keys(imageObject).length; i++){
// 			if (articleObject[i] !== undefined){
// 					articleObject[i]["imageUrl"] = imageObject[i];
// 					articleObject[i]["popularity"] = i + 1;
// 			}

// 		}

// 		for (var j = 0; j< Object.keys(articleObject).length; j++ ){
// 			if (articleObject[j] !== undefined){
// 				if (articleObject[j]["imageUrl"] === undefined){
// 					delete(articleObject[j]);
// 				}
// 			}

// 		}
// 		// console.log(articleObject);

		

// 		for (j = 0; j< Object.keys(articleObject).length; j++ ){
// 			if(articleObject[j] !== undefined && articleObject[j]["imageUrl"]!== undefined){
// 				articles.insert(articleObject[j]);
// 			}
// 		}
// 	}
// });


Template.content.article = function() {
	if(Session.get("category")===undefined) return articles.find({}, {limit: 100});
	return articles.find({'topic' : Session.get("category")}, {limit: 100});
};




 
Template.content.rendered = function () {

	$(document).ready(function(){
		$(".pop1").css("width","40%");
		$(".pop2").css("width","40%");
		$(".pop3").css("width","40%");
		$(".pop4").css("width","40%");
		$(".pop5").css("width","40%");
		$(".pop6").css("width","30%");
		$(".pop7").css("width","30%");
		$(".pop8").css("width","30%");
		$(".pop9").css("width","30%");
		$(".pop10").css("width","30%");
		$(".pop11").css("width","20%");
		$(".pop12").css("width","20%");
		$(".pop13").css("width","20%");
		$(".pop14").css("width","20%");
		$(".pop15").css("width","20%");
	});
	$(function(){
			var $container = $('#container');
			$container.imagesLoaded( function(){
			$container.masonry({
					itemSelector : '.image_container',
					isAnimated : true,
					isFitWidth : false,
					columnWidth: function( containerWidth ) {
						return containerWidth / 15;
					}
				});
			});
		});

	$(document).ready(function(){
		$("#container").masonry('reloadItems');
		$("#container").masonry('reload');
	});
	$(document).scroll(function() {
		$("#navContainer").css("margin-top",""+$(document).scrollTop()+"px");
	});
};

Template.content.events({
	'click li': function (event) {
		var li_id = event.currentTarget.className;// always a P
		//console.log("hello:	"+li_id);// could be the P or a child element
		Session.set("category", ""+li_id);
	}
});