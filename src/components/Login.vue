<template>
  <div class="main-body">
    <firstnav />
    <div class="login-area">
      <div class="row">
        <div class="col-md-6 lg-6 sm-12" id="col-1">
          <!-- <h4>dfghjk</h4> -->
        </div>
        <div class="col-md-6 lg-6 sm-12" id="col-2">
          <div class="white-bg-area">
            <h4 id="col-2-h4"><b>{{ colTwoTitle }}</b></h4>
            <marquee><p>Kindly login if registered....................Kindly login if registered</p></marquee>
            <form v-on:submit.prevent="loginAccount">
              <div class="form-group">
                <input type="text" v-model="username" placeholder="Username" class="form-control">
              </div>
              <div class="form-group">
                <input type="password" v-model="password" placeholder="Enter password" class="form-control">
              </div>
              <div class="form-group">
                <input type="submit" value="Login" class="btn btn-success" id="login-btn">
              </div>
            </form>
            <p>Forgot Password,<router-link to="/" id="router"> Click here</router-link></p>
            <button class="btn btn-info" id="facebook-btn">Facebook</button><button class="btn btn-primary" id="twitter-btn">Twitter</button><button class="btn btn-danger" id="google-btn">Google</button>
            <p class="linker">I don't have an account, <router-link to="/register" id="router">Register Now</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import firstnav from '../components/navbar/firstnav'

export default {
  components: {
    firstnav
  },
  data () {
    return {
      colTwoTitle: 'Login Your Account',
      username: '',
      password: ''
    }
  },
  methods: {
    loginAccount() {
      // axios.post('https://mighty-spire-36485.herokuapp.com/auth/login', {
      //   username: this.username,
      //   password: this.password
      // })
      // .then(alert('login success'), (res) => console.log(res.data))
      // .catch((err) => console.log(err))
      this.$router.push('/user/interest')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.login-area {
    background-color: whitesmoke;
  }*/

  #col-2 {
    background-color: #fff;
    text-align: center;
  }

  .row {
    width: 100%;
    margin-right: 0%;
    margin-left: 0%;
    margin-top: 60px;
    background-image: url('../assets/login/pic03.jpg');
    background-size: contain;
  }

  #col-2-h4 {
    margin-top: 71px;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    color: #047a6d;
    padding-top: 50px;
  }
  .white-bg-area {
    background-color: whitesmoke;
    width: 70%;
    margin-right: 15%;
    margin-left: 15%;
  }

  form {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }

  #login-btn {
    width: 100%;
    background-color: #047a6d;
    color: #fff;
    border: transparent;
  }

  #router {
    text-decoration: none;
  }

  .linker {
    padding-bottom: 90px;
    margin-bottom: 80px;
  }

  input {
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    border-bottom: 1px solid;
    background-color: whitesmoke;
  }

  #facebook-btn {
    background: #3b5998;
    border: #3b5998;
  }

  #twitter-btn {
    background: #0084b4;
    border: #0084b4;
  }

  #google-btn {
    background: #d34836;
    border: #d34836;
  }
</style>
