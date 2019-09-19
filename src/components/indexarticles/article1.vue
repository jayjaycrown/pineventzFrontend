<template>
  <div class="main-body">
    <h4 id="mb-h4">Plan & Organize your events by creating boards, pin events (corporates, privates, birthdays, publics etc.), get event accessories and also follow event organizers.</h4>
      <div class="row">
        <div class="col-md-4 lg-4 sm-4">
          <div class="icon-area">
            <font-awesome-icon icon="lock" id="font-icon"/>
            <h4><strong>Lorep Ipsum</strong></h4>
            <p id="icon-p">lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle</p>
          </div>
        </div>
        <div class="col-md-4 lg-4 sm-4">
          <div class="icon-area">
            <font-awesome-icon icon="clock" id="font-icon"/>
            <h4><strong>Lorep Ipsum</strong></h4>
            <p id="icon-p">lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle</p>
          </div>
        </div>
        <div class="col-md-4 lg-4 sm-4">
          <div class="icon-area">
            <font-awesome-icon icon="balance-scale" id="font-icon"/>
            <h4><strong>Lorep Ipsum</strong></h4>
            <p id="icon-p">lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 lg-4 sm-4">
          <div class="icon-area">
            <font-awesome-icon icon="lock" id="font-icon"/>
            <h4><strong>Lorep Ipsum</strong></h4>
            <p id="icon-p">lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle</p>
          </div>
        </div>
        <div class="col-md-4 lg-4 sm-4">
          <div class="icon-area">
            <font-awesome-icon icon="clock" id="font-icon"/>
            <h4><strong>Lorep Ipsum</strong></h4>
            <p id="icon-p">lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle</p>
          </div>
        </div>
        <div class="col-md-4 lg-4 sm-4">
          <div class="icon-area">
            <font-awesome-icon icon="balance-scale" id="font-icon"/>
            <h4><strong>Lorep Ipsum</strong></h4>
            <p id="icon-p">lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle lorep isum It shows four elements: a red rectangle</p>
          </div>
        </div>
      </div>
      <button v-on:mouseenter="changeColor" class="btn btn-success" id="btnnn">View More</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    changeColor: function () {
      this.queryselector('#btnnn').css("background-color", "red")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-body {
    background: white;
    text-align: center;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    font-family: 'Open Sans';
    padding-top: 50px;
  }
  .row {
    margin-top: 50px;
  }

  #mb-h4 {
    font-family: 'Open Sans';
    font-size: 15px;
  }

  #font-icon {
    color: black;
    font-size: 100px;
    text-align: center;
    padding-top: 20px;
  }

  #icon-p {
    font-family: sans-serif;
    font-size: 13px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .icon-area {
    background-color: whitesmoke;
  }

  #btnnn {
    margin-bottom: 30px;
  }
</style>
