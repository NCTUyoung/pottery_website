<template>
  <div class="nav">
    <div class="logo" @click="getRoot">
    </div>
    <el-menu :default-active="navIndex" mode="horizontal" @select="handleSelect">
      <!--<el-menu-item index="4" class="social-media"><i class="fab fa-facebook-square"></i></el-menu-item>-->
      <nuxt-link to="/about">
        <el-menu-item index="1">社團</el-menu-item>
      </nuxt-link>
      <nuxt-link to="/work">
        <el-menu-item index="2">作品</el-menu-item>
      </nuxt-link>
      <nuxt-link to="/activity">
        <el-menu-item index="3">活動</el-menu-item>
      </nuxt-link>

    </el-menu>

  </div>
</template>

<script>
  export default {
    name: "mynav",
    data() {
      return {
        value: 1,
      }
    },
    props:['navIndex'],
    methods: {
      getRoot() {
        this.$router.push({path: '/'})
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
    mounted:function () {

    }
  }
</script>

<style scoped lang="scss">
  .logo {
    position: absolute;
    margin-right: 1em;
    top: 0;
    right: 1em;
    z-index: 1;
    width: 6em;
    height: 4em;
    background-image: url("/logo-white.png");
    background-repeat: no-repeat;
    background-size: 6em 4em;
    @include small() {
      margin: auto;
      position: relative;
    }
    &:hover {
      cursor: pointer;
    }


  }
  .el-menu {
    background: $bg-yellow;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: none;
    color: #303133;

    .el-menu-item {
      background: transparent;
      color: white;

    }
    .is-active {
      color: #C71585;
      border-color: #C71585;
      background: transparent;
    }
    .social-media {
      display: inline-block;
      position: absolute;
      left: 0;
      margin-left: 1em;
      i {
        color: mediumvioletred;
      }
    }
  }
</style>
