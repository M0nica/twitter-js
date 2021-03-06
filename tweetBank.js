var _ = require ('underscore');

var data = [];

var id;
var add = function (name, text){
  id = Math.floor((Math.random() * 100) + 1);
  data.unshift({ name: name, text: text, id: id});
  //printed out name and id for testing purposes
  //console.log("name:" + name + " id: " + id);


};

var list = function() {
	return _.clone(data);
};

var find = function (properties){
	return _.where(data, properties);
};

module.exports = { add: add, list: list, find: find};



var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Will', 'Charlotte', 'Jacob','Ethan','Sophia','Emma','Madison'];
  var fakeLasts = ["Alley", 'Stacky', 'Fullstackerson', 'Nerd', 'Ashby', 'Gatsby', 'Hazelnut', 'Cookie', 'Tilde', 'Dash'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome','breathtaking','amazing','sexy','sweet','cool','wonderful','mindblowing'];
  return "Monica Powell is " + randArrayEl(awesome_adj) + "! She is just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for(var i=0; i<10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}


/*console.log(data);*/