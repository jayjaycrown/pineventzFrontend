<template>
  <div class="main-body">
      <h3 id="blog-h3"><b>{{ blogTitle }}</b></h3>
      <div class="row">
        <div class="col-md-4">
          <div class="white-area">
            <font-awesome-icon icon="lock" id="font-icon"/>
            <h4 id="icon-title"><strong>Sign Up</strong></h4>
            <p id="icon-p">We provide you with and easy and interactives user sign up interface to get registered with us at pineventz.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="white-area">
            <font-awesome-icon icon="file-upload" id="font-icon"/>
            <h4 id="icon-title"><strong>Create Boards</strong></h4>
            <p id="icon-p">Yeah...Successful registration allows the eligibility to create boards of evets on the user dashboard.Isn't that awesome?</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="white-area">
            <font-awesome-icon icon="edit" id="font-icon"/>
            <h4 id="icon-title"><strong>Pin Events</strong></h4>
            <p id="icon-p">hooray!!! You can start pinning events on your user area developed by pineventz.That sounds nice...Why not give it a try</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      blogTitle: 'It\'s Being Made Easy With Us...'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-body {
    background-color: whitesmoke;
  }

  #blog-h3 {
    text-align: center;
    padding-top: 30px;
    font-family: verdana;
    /*font-size: 12px;*/
  }

  .row {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
    margin-top: 30px;
    padding-bottom: 30px;
  }

  #font-icon {
    font-size: 35px;
    margin-top: 15px;
  }

  #icon-title{
    font-size: 15px;
    margin-top: 10px;
  }

  .white-area {
    background-color: #fff;
    border-radius: 50px;
  }

  #icon-p {
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
  }
</style>
