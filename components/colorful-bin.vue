<template>
  <div class="circle " v-bind:style="{ left: `${x}%`,top:`${y}%` ,width:size,height:size}">

  </div>
</template>

<script>
  export default {
    name: "colorful-bin",
    props:['x','y','size'],
    created:function () {

    },
    mounted:function () {
      this.$el.style.visibility = 'visible'
    },
    beforeMount:function () {

    }
  }

</script>

<style scoped lang="scss">

  .circle {
    visibility: hidden;
    position: absolute;
    display: inline-block;
    clip-path: circle(50% at 50% 50%);
    width: 2em;
    height: 2em;
    left:0;
    top:0;
  }

</style>
