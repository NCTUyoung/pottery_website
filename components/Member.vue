<template>
  <div class="member-container" >
    <div class="member" v-bind:style="{ 'background-image': `url(${photo})` }">

    </div>
  </div>
</template>

<script>
  export default {
    name: "member",
    props:['photo']
  }
</script>

<style scoped lang="scss">
.member-container {

  height: 6em;
  width: 6em;

  .member {

    display: inline-block;
    height: 6em;
    width: 6em;
    background: mediumaquamarine;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 9em 6em;

    clip-path: circle(50% at 50% 50%);


  }
}

</style>
