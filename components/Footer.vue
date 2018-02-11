<template>
  <section class="footer">
    <hr>
    <el-row :gutter="20">
      <el-col class="content-container" :span="8" :xs="24">
        <h3 >關於我們</h3>

        <div class="footer-content">
          陶藝 本來就是貼近生活的<br>
          只要喜歡動動手<br>
          歡迎加入陶藝社這個溫馨家庭 : )
        </div>
      </el-col>
      <el-col  class="content-container" :span="8" :xs="24">
        <h3>地點</h3>

        <div class="footer-content">
          新竹市東區交通大學<br>
          第一餐廳旁 陶藝社辦

        </div>


      </el-col>

      <el-col  class="content-container" :span="8" :xs="24">
        <h3>社群網路</h3>

        <div class="footer-content">
          Facebook粉絲專頁<br>
          <a href="#"><i  class="fab fa-facebook-square"></i> 交大陶藝</a>
        </div>


      </el-col>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "my-footer"
  }
</script>

<style scoped lang="scss">

  .footer {
    hr {
      margin: 0 15% 0 15%;
      border-top: 1px solid mediumvioletred;
      border-bottom: 1px solid mediumvioletred;
    }
    width: 100vw;
    background: rgb(0, 0, 0);
    padding:0 2em 2em 2em;
    color: white;
    text-align: center;
    margin-top: 1em;
    @include small() {
      text-align: left;
      padding: 2em;
    }
    h3 {
      color: mediumvioletred;
    }
    .footer-content {
      margin-top: 0.5em;

    }
    .content-container {
      margin-top: 2em;
      @include small() {
        margin-top: 1em;
      }
      a {
        color: inherit;
        text-decoration: none;
        i {
          color: #3a8ee6;
          background: black;
        }
      }
    }


  }
</style>
