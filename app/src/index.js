console.log("Test Jahahahh");

var fs = require('fs');
var Vue = require('vue');

new Vue({
  el: 'body',
  data: {
    currentView: 'home'
  },
  components: {
    home : require('./components/home')
  }
});
