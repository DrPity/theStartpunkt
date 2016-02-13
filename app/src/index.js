module.exports = {
  getRouter: function(){
    return startApp.router;
  }
};

var $ = require('jquery');
var Vue = require('vue');
var Router = require('vue-router');
var home = require('./components/home.vue');



Vue.use(Router);

function App(url){
  this.router = new Router({
    history: false,
    transitionOnLoad: true,
    saveScrollPosition: true,
    hashbang: false,
  });
  this.model = {};
  this.init(url);
}

App.prototype.init = function (url) {
  var _this = this;
  $.when(_this.readJson(url)).then(function(data) {
    console.log(data);
    _this.model = data;

    //load the jävla model here:
    var RoutedApp = Vue.extend({
      data: function() {
        return data;
      },
      created: function() {
        //do stuff her that dep. on model and the build DOM struct. e.g.:
        //  $(document).foundation();
        console.log("Created");
      }
    });
    _this.createRouterMap();
    _this.redirectionMap();
    _this.router.start(RoutedApp, '#wrapper');
  });
};

App.prototype.readJson = function (url) {
  console.log("In read Json");
  return $.getJSON(url).then(function(data){
    console.log(JSON.stringify(data, null, 2));
    return data;
  });
};

App.prototype.createRouterMap = function () {
  this.router.map({
    '*':{
      component: home,
    },
    '/': {
      component: home,
    },
    '/async': {
      component: function (resolve) {
         loadjs(['test'], resolve);
      }
    }
  });
};


App.prototype.redirectionMap = function () {

  this.router.redirect({
    //just an example
    '*': '/'
  });

};

//global variable for debugging. You can also use the vue dev. browser plugin
window.startApp = new App('./assets/model.json');
