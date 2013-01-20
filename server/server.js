if (Meteor.isServer) {
	Accounts.config({
		sendVerificationEmail: true
	});
}

// url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.xml?api-key=56234986fa369f80fe481a2daf74df87:4:67204078";

// url2 = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.xml?offset=40&api-key=56234986fa369f80fe481a2daf74df87:4:67204078";
urllist = [];
for(var i = 0; i<15 ; i++){
	url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.xml?offset=" + i * 50 + "&api-key=e3bcfaf6ffa70682f89fc777770f47ac:6:67207105";
	urllist.push(url);
}

//console.log(urllist);



var xmllist = [];

for (var i = 0; i<15; i++){
	Meteor.http.get(urllist[i], function(err, res) {
		xmllist.push(res.content);
});
}

Meteor.methods({
				get_data: function(data) {
						var xmldata = xmllist;
						return xmldata;
				}
		});

// url = "http://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.xml?api-key=56234986fa369f80fe481a2daf74df87:4:67204078";


// Meteor.http.get(url, function(err, res) {
//   var xml;
//   xml = res.content;

// });

// Template.xml.xml = function () {
//   return xml;
// };

