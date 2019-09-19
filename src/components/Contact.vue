<template>
  <div class="main-body">
    <firstnav />
    <div class="banner-area">
      <h4 class="banner-area-h4"><b>Contact Us</b></h4>
      <hrDesign />
    </div>
    <div class="contact-area">
      <div class="row">
        <div class="col-md-4" id="col">
          <font-awesome-icon icon="landmark" id="font-icon"/>
          <p>SUG Building TASUED, <br>Ijagun Road, Ijebu-Ode, Ogun State</p>
        </div>
        <div class="col-md-4" id="col">
          <font-awesome-icon icon="phone-square" id="font-icon"/>
          <p>+234 81 75052427</p>
        </div>
        <div class="col-md-4" id="col">
          <font-awesome-icon icon="envelope-square" id="font-icon"/>
          <p>contact@pineventz.com</p>
        </div>
      </div>
    </div>
    <div class="map-form-area">
      <div class="row">
        <div class="col-md-5">
          <h4 id="h4-map-form-area"><b>Get In Touch</b></h4>
          <hrDesign />
          <form>
            <div class="form-area">
              <div class="form-group">
                <input type="text" name="" placeholder="Enter name" class="form-control">
              </div>
              <div class="form-group">
                <input type="email" name="" placeholder="Enter Email Address" class="form-control">
              </div>
              <div class="form-group">
                <input type="text" name="" placeholder="Message Subject" class="form-control">
              </div>
              <div class="form-group">
                <textarea cols="40" rows="5" class="form-control" placeholder="Enter Message Here"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-success" id="send-msgBtn">
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-7">
          <h4 id="h4-map-form-area"><b>Let's Help You Find Us</b></h4>
          <hrDesign />
          <div class="map-section">
            <iframe width="100%;" height="410" id="gmap_canvas" src="https://maps.google.com/maps?q=Port%20Hacourt%20Rivers%20State%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
          </div>
        </div>
      </div>
    </div>
    <footerCompo />
  </div>
</template>

<script>
import firstnav from '../components/navbar/firstnav'
import hrDesign from '../components/horizontalLine/hr'
import footerCompo from '../components/footer/footer'

export default {
  components: {
    firstnav,
    hrDesign,
    footerCompo
  },
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner-area {
    background-image: url('../assets/contact/a5.jpg');
    background-size: cover;
    margin-top: 65px;
    width: 100%;
    height: 350px;
  }

  .banner-area-h4 {
    padding-top: 130px;
    text-align: center;
    color: #047a6d;
    font-family: 'Open Sans';
    font-size: 40px;
    letter-spacing: 0.1em;
  }

  .row {
    width: 100%;
    margin: 0px;
    text-align: center;
    margin-top: 40px;
  }

  #font-icon {
    font-size: 100px;
    color: lightgrey;
  }

  #font-icon:hover {
    font-size: 100px;
    color: #047a6d;
  }

  #col {
    text-align: center;
    /*background-color: #047a6d;
    border-radius: 190px;*/
  }

  #col > p {
    margin-top: 20px;
  }

  #h4-map-form-area{
    font-family: Open Sans;
    color: #047a6d;
  }

  form {
    background-color: whitesmoke;
    width: 70%;
    margin-right: 15%;
    margin-left: 15%;
  }

  .form-area {
    width: 80%;
    margin-right: 10%;
    margin-left: 10%;
    padding-top: 5%;
  }

  #send-msgBtn {
    width: 100%;
    background-color: #047a6d;
    color: #fff;
    border: transparent;
    margin-bottom: 30px;
  }

  input {
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    border-bottom: 1px solid;
    background-color: whitesmoke;
  }

  textarea {
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    border-bottom: 1px solid;
    background-color: whitesmoke;
  }

  .map-section {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
</style>
