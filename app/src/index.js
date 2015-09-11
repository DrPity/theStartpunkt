console.log("Test Jahahahh");
// var temp = require('./components/home.html');
var fs = require('fs');
var Vue = require('vue');

// Vue.component('alert', {
//     template: require('../components/firstTry')
// });

new Vue({
  el: 'body',
  data: {
    currentView: 'home'
  },
  components: {
    home : require('./components/home')
  }
});


// var text = fs.readFile('./home.html','utf8');
// console.log(text);


// fs.readFile('./home.html', function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });




// var test = $.load( "src/components/home.html" );
