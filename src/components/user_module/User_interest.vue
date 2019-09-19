<template>
  <div class="main-body">
    <firstnav />
    <div class="main-content-area">
       <h3 id="page-head-h3"> <font-awesome-icon icon="user-circle" id="font-icon"/> {{ pageHead }}</h3>
       <hrDesign />
       <div class="alert alert-info" id="alert-div">
         <p id="page-head-p"><b>{{ pageHeadP }}</b></p>
       </div>
       <div class="row">
         <div class="col-md-4 sm-3">
           <h6><b>private</b></h6>
           <div class="interests">
             <font-awesome-icon icon="users" id="font-icon"/> <b>Family Gathering</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="universal-access" id="font-icon"/> <b>Fitness</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="smile" id="font-icon"/> <b>Humor</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="female" id="font-icon"/> <b>Fashion</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="gift" id="font-icon"/> <b>Festivals</b>
           </div>
         </div>
          <div class="col-md-4 sm-3">
           <h6><b>public</b></h6>
           <div class="interests">
             <font-awesome-icon icon="birthday-cake" id="font-icon"/> <b>Birthday</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="futbol" id="font-icon"/> <b>Football</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="bicycle" id="font-icon"/> <b>Cycling</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="user-circle" id="font-icon"/> <b>Weightlifting</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="laptop" id="font-icon"/> <b>Surfing</b>
           </div>
         </div>
          <div class="col-md-4 sm-3">
           <h6><b>coporate</b></h6>
           <div class="interests">
             <font-awesome-icon icon="user-circle" id="font-icon"/> <b>Lunch</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="user-circle" id="font-icon"/> <b>Networking</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="keyboard" id="font-icon"/> <b>Conferences</b>
           </div>
           <div class="interests">
             <font-awesome-icon icon="user-circle" id="font-icon"/> <b>Weightlifting</b>
           </div>
         </div>
         <button class="btn btn-success" id="getBtn">Get started</button>
       </div>
    </div>
  </div>
</template>

<script>
import firstnav from '../../components/navbar/firstnav'
import hrDesign from '../../components/horizontalLine/hr'

export default {
  components: {
    firstnav,
    hrDesign
  },
  data () {
    return {
      pageHead: ' User Interest Page',
      pageHeadP: 'Choose your area of interest...Maximum of two(2) interest'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-content-area {
    margin-top: 130px;
  }

  #page-head-h3 {
    text-align: center;
    color: #047a6d;
  }

  #page-head-p {
    text-align: center;
  }

  #alert-div {
    text-align: center;
    width: 60%;
    margin-right: 20%;
    margin-left: 20%;
    height: 40%;
  }

  .row {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20px;
    text-align: left;
    background-color: whitesmoke;
    border-radius: 5px;
  }

  .col-md-4 {
    padding-top: 20px;
  }

  .interests {
    margin-top: 30px;
    text-align: left;
  }

  #getBtn {
    width: 40%;
    margin-right: 30%;
    margin-left: 30%;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #047a6d;
    color: #fff;
    border: transparent;
  }

  #font-icon {
    font-size: 25px;
    color: #047a6d;
  }
</style>
