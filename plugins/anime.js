import Vue from 'vue'
import anime from 'animejs'

var kute = require("kute.js"); //grab the core
require("kute.js/kute-svg"); // Add SVG Plugin
require("kute.js/kute-css"); // Add CSS Plugin
require("kute.js/kute-attr"); // Add Attributes Plugin
require("kute.js/kute-text"); // Add Text Plugin

Vue.use(function(Vue) {
  Vue.prototype.anime = anime
  Vue.prototype.KUTE = kute
})
