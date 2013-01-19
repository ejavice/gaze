console.log("i am here");

var data;
var gorkem;
Meteor.call("get_data", data, function(error, xmldata) {
    gorkem = xmldata;
	console.log(gorkem);
	xmlDoc = $.parseXML( gorkem ),
    $xml = $( xmlDoc ),
    $url = $xml.find( "result" ).each(function (index) {
    	$final_url = $(this).find("media").find("media_item url");
    		console.log($final_url.text());
    	
    });
});

Template.content.newsItem = function() {
  var content;
  return content = {
    imageUrl: "http://www.musicnfilms.com/wp-content/uploads/2012/11/Justin-Bieber-photos-songs-list.jpg",
    articleUrl: "http://www.nyt.com",
    articleName: "Hello Kitty",
    articleTopic: "Topic Topic"
  };
  return content;
};