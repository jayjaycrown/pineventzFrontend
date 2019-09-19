<template>
  <div class="main-body">
    <firstnav />
    <div class="main-content">
      <div class="row">
        <div class="col-md-6 lg-6 sm-6">
          
        </div>
        <div class="col-md-6 lg-6 sm-6" id="second-col">
          <div class="second-col-main">
            <h4 class="col-2-h4"><b>{{ secondColTitle }}</b></h4>
            <marquee><p>Kindly fill in correct details during registration.........Kindly fill in correct details during registration...</p></marquee>
            <form v-on:submit.prevent="registerAccount">
              <div class="form-group">
                <input type="text" v-model="fullName" placeholder="Enter Full name" class="form-control">
              </div>
              <div class="form-group">
                <input type="email" v-model="emailAddress" placeholder="Enter Email Address" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" v-model="username" placeholder="Choose a Username" class="form-control">
              </div>
              <div class="form-group">
                <input type="password" v-model="password" placeholder="Choose a Password" class="form-control">
              </div>
              <div class="form-group">
                <input type="password" v-model="confirmPassword" placeholder="Confirm Password" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" v-model="cityCountry" placeholder="City, Country" class="form-control">
              </div>
              <div class="form-group">
                <input type="date" v-model="dateOfBirth" placeholder="Date Of Birth" class="form-control">
              </div>
              <div class="form-group">
                <input type="radio" value="male" v-model="gender"> Male <input type="radio" value="female" v-model="gender"> Female
              </div>
              <div class="form-group">
                <input type="checkbox" value="yes" v-model="checkbox"> I agree to the <router-link to="/terms&conditions" id="terms_link">terms and conditions</router-link>
              </div>
              <div class="form-group">
                <input type="submit" Value="Register Account" class="btn btn-success" id="reg-btn">
              </div>
            </form>
            <p id="after-form-p">Already Have an account, <router-link to="/login" id="linker">Login</router-link></p>
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
      secondColTitle : 'Sign Up For a New Account',
      fullName: '',
      emailAddress: '',
      username: '',
      password: '',
      confirmPassword: '',
      cityCountry: '',
      dateOfBirth: '',
      gender: '',
      checkbox: ''
    }
  },
  methods: {
    registerAccount() {
      axios.post('https://mighty-spire-36485.herokuapp.com/auth/signup', 
      {fullName: this.fullName,
        emailAddress: this.emailAddress,
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword,
        cityCountry: this.cityCountry,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        checkbox: this.checkbox
      })
      .then(alert('You have successfully created an account'), (res) => console.log(res.data))
      .catch((err) => console.log(err))
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-content {
    background-image: url('../assets/login/pic03.jpg');
    background-size: cover;
    margin-top: 60px;
  }

  #second-col {
    background-color: #fff;
    text-align: center;
  }

  .row {
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }

  .col-2-h4 {
    margin-top: 40px;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    color: #047a6d;
    padding-top: 40px;
  }

  .second-col-main {
    background: whitesmoke;
    width: 70%;
    margin-right: 15%;
    margin-left: 15%;
  }

  form {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }

  input {
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    border-bottom: 1px solid;
    background-color: whitesmoke;
  }

  #reg-btn {
    width: 100%;
    background-color: #047a6d;
    color: #fff;
    border: transparent;
  }
  #after-form-p {
    margin-bottom: 43px;
    padding-bottom: 30px;
  }

  #linker {
    text-decoration: none;
  }

  #terms_link {
    text-decoration: none;
  }
</style>
