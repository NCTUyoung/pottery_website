<template>
    <div class="path">
      <member  class="avatar" photo="/person/thub/0.jpg"></member>
    </div>
</template>

<script>
    import Member from "../components/Member";

    export default {
      components: {Member},
      name: "planet"
    }
</script>

<style scoped lang="scss">
  $radis : 10em;
  $spin-radis:15em;
  @keyframes spin {
    from {
      transform:
        translate($spin-radis,$spin-radis)
        rotate(0)
        translate(-$spin-radis,-$spin-radis)
        translate(50%,50%)
        rotate(1turn)
        translate(-50%,-50%)
    }
    to {
      transform:
        translate($spin-radis,$spin-radis)
        rotate(1turn)
        translate(-$spin-radis,-$spin-radis)
        translate(50%,50%)
        rotate(0turn)
        translate(-50%,-50%)
    }
  }

  .avatar {
    display: inline-block;
    position: relative;
    animation: spin 10s infinite linear;
    left: $radis - $spin-radis;
    top: $radis - $spin-radis;
    z-index: 1;

  }
  .path {
    display: block;
    margin: auto;
    width: 2 * $radis;
    height: 2 * $radis;
    border-radius: 50%;
    border: 2px solid mediumvioletred;
  }
</style>
