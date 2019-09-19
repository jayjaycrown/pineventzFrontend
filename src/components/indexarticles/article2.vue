<template>
  <div>
    <div class="main-body">
      <div class="advert-area">
        <h5 id="adv-area-h5"><b>Do You Want to plan and organize your events?</b></h5>
        <button class="btn btn-secondary" id="get-started">Get Started Free</button>
      </div>
    </div>
    <article3 />
  </div>
</template>

<script>
import article3 from '../../components/indexarticles/article3'
export default {
  components: {
    article3
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-body {
    /*background-image: url('../../assets/3.jpg');*/
    background-color: #047a6d;
    margin-bottom: 10px;
  }

  .advert-area {
    text-align: center;
    padding-top: 30px;
    color: #fff;
  }

  #adv-area-h5{
    font-size: 25px;
    font-family: verdana
  }

  #get-started {
    width: 200px;
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 25px;
    border-radius: 10px;
  }
</style>
