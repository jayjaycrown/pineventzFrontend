<template>
  <div>
    <div class="first-nav">
        <div class="nav-area">
          <nav class="navbar navbar-expand-md bg-dark navbar-dark fixed-top" id="nav">
            <div class="row">
              <div class="col-md-6 lg-6 sm-6">
                <a href="/"><img src="../../assets/logo.png" class="logo-img"></a>
              </div>
              <div class="col-md-6 lg-6 sm-4" id="second-col">
                <router-link to="/" class="navbar-brand">contact@pineventz.com</router-link>
                <router-link to="/about" class="navbar-brand">About us</router-link>
                <router-link to="/contact" class="navbar-brand">Contact us</router-link>
                <router-link to="/register" class="navbar-brand"> <font-awesome-icon icon="edit" id="font-icon"/> Register</router-link>
                <router-link to="/login" class="navbar-brand"><font-awesome-icon icon="lock" id="font-icon"/> Login</router-link>
              </div>
            </div>
        </nav> 
       </div>
     </div>
     <!-- <secondnav /> -->
  </div>
</template>

<script>
import secondnav from '../navbar/secondnav'

export default {
  components: {
      secondnav
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-brand {
    font-size: 13px;
  }
  .row {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    /*text-align: center;*/
  }

  .logo-img {
    width: 150px;
    height: 50px;
  }

  .break-space {
    margin-top: 60px;
    height: 80px;
    background-color: transparent;
  }

  #font-icon {
    color: #fff;
  }
</style>
