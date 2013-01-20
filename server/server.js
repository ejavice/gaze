if (Meteor.isServer) {
  Accounts.config({
    sendVerificationEmail: true
  });
}

url = "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.xml?api-key=56234986fa369f80fe481a2daf74df87:4:67204078";

var xml;
Meteor.http.get(url, function(err, res) {
  xml = res.content;
});

Meteor.methods({
        get_data: function(data) {
            var xmldata = xml;
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

