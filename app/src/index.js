
var Vue = require('vue');

app = {};

app.mainView = function (){
  return;
};

app.setVariable = function(vue, variable, value){
  vue.$set(variable,value);
};

app.getVariable = function(vue, variable){
  return view.$get(variable);
};


app.setView = function(vue, view){
  vue.$set('currentView', view);
};

app.getView = function(vue){
  return vue.currentView;
};

app.newVue = function(element, dataAtrributes, component){
  console.log(component);
  return new Vue({
    el: element,
    data: dataAtrributes,
    components: component
  });
};


var dataAtrributes = {text: 'Some test content which can be dynamically injected'};
var component = { home : require('./components/home'), };

app.mainView = app.newVue('#wrapper', dataAtrributes, component);
console.log(app.mainView);
Preloader.init();
