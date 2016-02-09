'use strict';
module.exports = {

  inherit: true,
  replace: true,
  name: "home",
  template: require('./home.html'),

  props: {
    text:{
      type: String,
      required: true
    },
    image:{
      type: String,
      required: true
    },
  },

  data: function() {
    return {
    };
  },

  ready: function() {

  },

  beforeDestroy: function() {

  },

  methods: {

    setBackground: function(item) {
      // console.log("The item: ", item);
      return "background-image:" + "url(" + this.image +  ")";
    },

  },

  // setValue: setValue
};
