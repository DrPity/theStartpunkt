console.log("Javascript reloads on any saved changes");

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
