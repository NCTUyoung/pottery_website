<template>
  <div @click="click" @mouseenter="hover" class="card-container">
    <color-circle  ref="circle" :x="x*80+10" :y="y*80+10"  class="red float" v-bind:class="colorClass" :size="binSize"></color-circle  >
    <div class="card">
      <div class="img-container" v-bind:style="{ 'background-image': `url(${photo})` }">

      </div>

      <div class="container">
        <h4><b>Jane Doe</b></h4>
        <p>Interior Designer</p>
      </div>
    </div>
  </div>

</template>

<script>
  import ColorCircle from '~/components/colorful-bin.vue'
  export default {
    name: "card",
    components:{
      ColorCircle
    },
    data:function () {
      return {

      }
    },
    props:['photo','x','y','binColor','binSize'],
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
    methods:{
      click:function () {
        let path = this.photo
        let rootpath = '/person/'
        let newpath = path.split("/")
        let filename = newpath[newpath.length-1]
        let originalfile = rootpath+filename
        console.log(filename)
        this.$emit('click',originalfile)
      },
      hover: function (event) {
        console.log(this.$refs)
        let Anim = this.anime({
          targets: this.$refs.circle.$el ,
          scale:[
            {value:1,duration:300,elasticity: 2000},
            {value:8,duration:300,elasticity: 2000},
            {value:1,duration:1,elasticity: 2000},
          ],
          opacity:[
            {value:1,duration:300},
            {value:0,duration:300},
            {value:1,duration:1000},
          ],
          easing: 'linear',
          autoplay:false,
        });
        Anim.restart()
      }
    }
  }
</script>

<style scoped lang="scss">
  .float {
    position: absolute;
    z-index: 1;
  }
  .card-container {
    position: relative;
    display: inline-flex;
    padding: 0.5em;
    border-radius: 10px ;
    transition: 0.3s all ease;

    &:hover {
      cursor: pointer;
      /*background: rgb(105, 105, 105);*/
      background: rgba(199, 21, 133, 0.6);
      transition: 0.7s background ease;
      transition-delay: 0.3s;

      filter: brightness(1.1);

    }
  }
  .card {
    display: inline-block;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 12em;
    height: 10em;
    border-radius: 10px ;
    background: white;
    color: black;

    .img-container {
      border-radius: 10px  10px 0 0;
      height: 7em;
      overflow: hidden;
      background-position: center;
      background-repeat: no-repeat;
    }


    .container {
      height: 4em;
      padding: 2px 16px;
    }

  }






</style>
