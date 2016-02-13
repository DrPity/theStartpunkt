<template>
  <div class="bg" v-bind:style="setBackground(item)" transition="fade">
    <p><strong>This is a super duper awesome async test!!</strong></p>
  </div>
</template>

<script>
'use strict';
module.exports = {

  inherit: true,
  replace: true,
  name: "test",

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
</script>
