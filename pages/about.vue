<template>
  <div class="main">
    <mynav nav-index="1"></mynav>
    <article>
      <div id="section1" class="section" >
        <div class="content">
          <!--<h3 class="ocean-blue">社辦 / 空間</h3>-->
          <br>
          <h3 class="text-blue">
            超大的獨立社辦，來社上睡覺 / 吃飯都可以~
          </h3>
          <br>
          <div>
            我們的社辦獨立於第一餐廳旁，裡頭有手作空間還有調釉室。<br>
            大大的桌子可以讓你盡情享受捏陶的時光。<br>
            捏累了，泡個咖啡直接在桌上讀書也很適合喔
          </div>
          <br>
        </div>
        <div class="header"
             v-bind:style="{ backgroundImage: `url('/about/space.jpg')`}">
        </div>



      </div>
      <div id="section2" class="section">
        <div class="content">
          <!--<h3 class="purple">設備 / 器材</h3>-->
          <br>
          <h3 class="text-purple">
            我們有大、中、小窯，所有作品Size 都能滿足!!
          </h3>
          <br>
          <div>
            如果你喜歡來點刺激的，可以來挑戰大花瓶<br>
            也可以做些生活常用的馬克杯，<br>
            或是來些彩繪的小公仔，妝點你的生活
          </div>
        </div>
        <div class="header"
             v-bind:style="{ backgroundImage: `url('/about/furnace.jpg')`}">
        </div>

      </div>
      <div id="section3" class="section">
        <div class="content" >
          <!--<h3 class="red">原料 / 釉料</h3>-->
          <br>
          <h3 class="text-red">
            猶如化學實驗室的各種原料，還有古代配方等你開發
          </h3>
          <br>
          <div>
            釉色的多變迷幻，是很多人一生追求的目標<br>
            我們有釉下彩、色料、還有原料<br>
            你可以調配屬於自己的秘方
          </div>
        </div>
        <div class="header"
             v-bind:style="{ backgroundImage: `url('/about/color-material.jpg')`}">
        </div>


      </div>

    </article>
  </div>


</template>

<script>
    import Mynav from "../components/Mynav";


    export default {
      components: {

        Mynav},
      name: "about"
    }
</script>

<style scoped lang="scss">
  .main {
    margin-left: 10%;
    margin-right: 10%;
    padding-bottom: 5%;
    @include small(){
      padding: 0;
    }
    color: white;

    .section {
      padding: 2em 2em 0 2em ;
      @include small(){
        padding: 0;
      }
      display: flex;
      border-radius: 20px;
      flex-wrap:wrap;
      align-content:space-around;
      justify-content: center;

      .header {
        height: 35vh;
        flex-grow: 0.5;
        flex-basis: 300px;
        background: $red;
        background-size: cover;
        border-radius: 10px;

      }
      .content {
        padding-left: 2em;
        padding-right: 5em;
        flex-grow: 1.5;
        flex-basis: 300px;

        @include small{
          margin-top: 1em;
          padding-left: 0;
          padding-right: 0;
        }
        /*background: white;*/
        h3 {
          padding-left: 1em;

          border-radius: 50px;
        }
        div {
          padding-left: 1em;
        }
      }
    }
    #section2 {
      .header {
        order: -1;
        @include small{
          order: 1;
        }
      }
    }
  }

</style>
