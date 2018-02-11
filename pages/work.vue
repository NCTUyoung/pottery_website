<template>

  <div class="main">
    <mynav nav-index="2"></mynav>
    <div class="planet " >
      <colorful-bin
        v-for="s in star"
        :x="Math.floor((Math.random() * 80)+10)"
        :y="Math.floor((Math.random() * 80)+10)"
        :key="s.id"
        class="red float"
        :size="'1em'"

      >
      </colorful-bin>

      <div class="path">
        <member v-for="(member,index) in mytest"
                :photo="member.thub"
                :key="member.id"
                class="avatar"
                v-bind:style="{ zIndex: index+2,animationDelay: `${index+0.5*index}s`}">
        </member>

      </div>
      <div class="path2">

      </div>
    </div>
    <div class="content">
      <!--<div class="gallery-header">-->
        <!--<member v-for="member in mytest" :photo="member.thub" :key="member.id"></member>-->

      <!--</div>-->

      <div class="gallery" :gutter="10">

        <card :binSize="'1em'"
              :binColor="0"
              :x="Math.floor((Math.random() * 2))"
              :y="Math.floor((Math.random() * 2))"
              v-for="card in mytest"
              :key="card.id"
              :photo="card.thub"
              @click="showModal">
        </card>

      </div>

    </div>
    <transition name="fade">

      <div v-show="modal" id="myModal" class="modal">
        <div class="model-container">
          <!-- The Close Button -->
          <span class="close" @click="modal=false">&times;</span>

          <!-- Modal Content (The Image) -->

          <img ref="modalImg" class="modal-content" id="img01">

          <!-- Modal Caption (Image Text) -->
          <div id="caption"></div>
        </div>

      </div>
    </transition>



  </div>





</template>

<script>
  import Member from "../components/Member";
  import AutoBin from "../components/AutoBin";
  import Card from "../components/Card";
  import ColorfulBin from "../components/colorful-bin";
  import Mynav from "../components/Mynav";


  export default {
    components: {
      Mynav,
      ColorfulBin,
      Card,

      Member},
    name: "work",
    data() {
      return {

        modal:false,
        memberlist:[],
        photolist:[
          {
            name:'jimmy',
            photos:['']
          },
          {
            name:'',
            photos:[]
          }

        ],
        mytest:[
          {thub:'/person/thub/0.jpg'},
          {thub:'/person/thub/1.jpg'},
          {thub:'/person/thub/2.jpg'},
          {thub:'/person/thub/3.jpg'},
          {thub:'/person/thub/4.jpg'},
          {thub:'/person/thub/1.jpg'},
          {thub:'/person/thub/2.jpg'}
        ],
        star:[
          {},{},{},{},{},
          {},{},{},{},{},
          {},{},{},{},{},
          {},{},{},{},{},
        ]

      };
    },
    methods: {

      showModal(path) {

        this.modal = true
        console.log(event)
        this.$refs.modalImg.src = path
      },
      getRandom() {

        let a = Math.floor((Math.random() * 80)+10);
        console.log('getRandom',a)
        return a
      },

      colorClass: function (binColor) {
        let color = {
          'red':false,
          'green':false,
          'blue':false
        }

        switch (binColor) {
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
    mounted: function () {

    },
    computed:{

    }



  }

  </script>

<style  scoped lang="scss">
  @import "../assets/global/model";
  @import "../assets/global/planet";
  .main {
    /*background: url("/background/work-background3.png");*/
    background: rgb(0, 0, 0);

    /*background-size: 100%;*/
  }
  [v-cloak] {
    display: none;
  }
  .content {
    background: $bg-yellow;

    color: white;
    margin: 2em 5em 0 5em;
    @include small() {
      margin: 0;
    }
    .gallery-header {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 7em;
      .member-container {
        margin: 0.5em;
        /*border-bottom: 2px solid mediumvioletred;*/
      }
      .is-active {
        border-bottom: 2px solid mediumvioletred;
      }
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content:center;
      margin-top: 7em;
      .card-container {
        margin: 1em;
      }
    }




    .main-member {
      .member-name {
        display: inline-block;
        text-align: left;
        border-style: solid;
        border-radius: 0;
        border-width: 0;
        border-top-width: 1px;
      }
    }
    .sub-member {
      .member-icon {
        border-width: 5em;
        border-bottom-color: black;
      }
      .member-name {
        border-width: 5px;
        border-bottom-color: black;
        text-align: left;
      }
    }







  }




</style>
