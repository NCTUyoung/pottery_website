<template>
  <div class="circle " v-on:mouseenter="hover">

  </div>
</template>

<script>
  export default {
    name: "auto-bin",
    data() {
      return {
        hoverStatus:false
      }
    },
    methods: {
      hover(event) {

        let Anim = this.anime({
          targets: event.target,
          scale: [
            {value: 1, duration: 300, elasticity: 2000},
            {value: 8, duration: 300, elasticity: 2000},
            {value: 1, duration: 1, elasticity: 2000},
          ],
          opacity: [
            {value: 1, duration: 300},
            {value: 0, duration: 300},
            {value: 1, duration: 5000},
          ],
          easing: 'linear',
          autoplay: false,
        });
        Anim.restart()


      }
    }
  }

</script>

<style scoped lang="scss">

  .circle {
    background: mediumvioletred;
    clip-path: circle(50% at 50% 50%);
    width: 2em;
    height: 2em;

  }

</style>
