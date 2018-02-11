<template>
  <div class="main">
    <mynav nav-index="3"></mynav>
  </div>
</template>

<script>
  import Mynav from "../components/Mynav";

  export default {
    components: {Mynav},
    name: "activity"
  }
</script>

<style scoped lang="scss">
.main {
  margin-left: 10%;
  margin-right: 10%;
  height: 100vh;
}
</style>
