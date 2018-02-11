<template>

  <div>
    <div class="logo"></div>
    <el-row class="main" >

      <el-col :xs="24" :span="8" class="block " id="left" v-on:mouseenter.native="hover" v-on:mouseleave.native = "left=false" >
        <color-circle  class="red" id="circle-left"  ></color-circle >
        <el-row>
          <h1>社團</h1>
          <h3>了解設備、環境</h3>

          <nuxt-link to="/about"><el-button plain ><i class="fas fa-home"></i></el-button></nuxt-link>

        </el-row>
      </el-col>
      <el-col :xs="24" :span="8" class="block " id="middle" v-on:mouseenter.native="hover" v-on:mouseleave.native = "middle=false">
        <color-circle  class="green" id="circle-middle"  ></color-circle >
        <el-row>
          <h1>作品</h1>
          <h3>參觀美美的作品</h3>
          <nuxt-link to="/work"><el-button plain><i class="fas fa-coffee"></i></el-button></nuxt-link>
        </el-row>
      </el-col>
      <el-col :xs="24" :span="8" class="block" id="right" v-on:mouseenter.native="hover" v-on:mouseleave.native = "right=false">
        <color-circle  class="blue" id="circle-right"  ></color-circle >
        <el-row>
          <h1>活動</h1>
          <h3>社遊/吃喝玩樂不能少</h3>
          <el-button plain><i class="fas fa-trophy"></i></el-button>
        </el-row>
      </el-col>
    </el-row>
  </div>



</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import ColorCircle from '~/components/colorful-bin.vue'
  // import anime from 'animejs'
  export default {
    data: function () {
      return {
        left: false,
        middle:false,
        right:false,
        star:[
          {
            x:7,
            y:13,
            classobj:{'red':true,'green':false,'blue':false}
          },
          {x:35,y:30,classobj:{'red':false,'green':true,'blue':false}},
          {x:70,y:30,classobj:{'red':false,'green':false,'blue':true}},

        ]
      }
    },
    computed:{
      colorClass: function () {
        let color = {
          'red':false,
          'green':false,
          'blue':false
        }

        switch (this.binColor) {
          case 0:
            color.red = true
            break
          case 1:
            color.green = true
            break
          case 2:
            color.blue = true
            break
        }
        return color
      },
    },
    methods: {
      hover(event) {
        let id,color,background;
        let list = ['#left','#middle','#right'];
        let colorlist = ['#C71585','#66CDAA','#48D1CC']
        let backgroundlist = ['/background/club-black.jpg','/background/work-black-v2.jpg','/background/activity-black.jpg']
        let main = document.querySelector('.main');
        switch (event.target.id) {
          case 'left':
            id = list[0];
            color = colorlist[0];
            background = backgroundlist[0];
            break;
          case 'middle':
            id = list[1];
            color = colorlist[1];
            background = backgroundlist[1];
            break
          case 'right':
            id = list[2];
            color = colorlist[2];
            background = backgroundlist[2];
            break
        }

        // let Anim = this.anime({
        //   targets: `${id} .circle` ,
        //   scale:[
        //     {value:1,duration:300,elasticity: 2000},
        //     {value:8,duration:300,elasticity: 2000},
        //     {value:1,duration:1,elasticity: 2000},
        //   ],
        //   opacity:[
        //     {value:1,duration:300},
        //     {value:0,duration:300},
        //     {value:1,duration:1000},
        //   ],
        //   easing: 'linear',
        //   autoplay:false,
        // });
        // Anim.restart()

        // main.style.backgroundImage = `url(${background})`;


      }
    },
    components: {
      AppLogo,
      ColorCircle
    },

  }
</script>

<style scoped lang="scss">
$circle-length :20em;

  .logo {
    position: fixed;
    margin-right: 1em;
    top: 0;
    right: 1em;
    align-content: center;
    z-index: 2;
    width: 12em;
    height: 8em;
    background-image: url("/logo-white.png");
    background-repeat: no-repeat;
    background-size: 12em 8em;
    @include small() {
      margin: auto;
      position: relative;
    }
  }
  .el-button {

    &:focus {
      border-color: white;
    }
  }

  .main {
    position: relative;
    transition: 1s background ease;
    /*background-image: url("/background/club-black.jpg");*/
    background-repeat: no-repeat;
    background-size: 100% ;

    .block {
      height: 100vh;
      background: black;
      color: white;
      @include small() {
        height: 40vh;
      }
      .el-row {
        position: relative;
        top: 40%;
        @include small() {
          top: 3em;
        }
        .el-button {
          margin-top: 1em;
          background: transparent;
          color: white;
          a {

            color: inherit;
          }
        }
        text-align: center;

      }
    }
  }

  @mixin hover($bg) {
    background: $bg;
    .el-button  {
      &:hover {
        color: rgba($bg, 1.5);
        border-color: inherit;
        background: white;
      }
      &:active {
        color: rgba($bg, 1.5);
        border-color: rgba($bg, 1.5);
      }

    }
  }

  #left {
    position: relative;
    overflow: visible;
    &:hover {
      @include hover(rgba($red, 0.5))
    }
  }
  #middle {
    position: relative;
    &:hover {
      @include hover(rgba($green, 0.5))
    }
  }

  #right {
    position: relative;
    &:hover {
      @include hover(rgba($blue, 0.5))
    }
  }

  /*電腦*/
  #circle-left {
    width: $circle-length;
    height: $circle-length;

    position: absolute;
    top: 30%;
    left: 30%;
    @include small() {
      width: 0.7*$circle-length;
      height: 0.7*$circle-length;
      top: 15%;
      left: 30%;
    }
  }
  #circle-middle {

    width: $circle-length;
    height: $circle-length;

    position: absolute;
    top: 15%;
    left: 25%;
    @include small() {
      width: 0.7*$circle-length;
      height: 0.7*$circle-length;
      top: 15%;
      left: 30%;
    }
  }
  #circle-right {

    width: $circle-length;
    height: $circle-length;

    position: absolute;
    top: 20%;
    left: 30%;
    @include small() {
      width: 0.7*$circle-length;
      height: 0.7*$circle-length;
      top: 15%;
      left: 30%;
    }
  }

</style>
