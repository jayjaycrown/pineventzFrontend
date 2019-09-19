<template>
  <div class="main-body">
      <div>
        <div class="row">
          <div class="col-md-4 lg--4 sm-4" id="row-col">
            <h5><b>Company</b></h5>
            <ul type="square">
              <li><router-link to="/about" id="footer-link">About us</router-link></li>
              <li><router-link to="/contact" id="footer-link">Contact us</router-link></li>
              <li><router-link to="/privacy_policy" id="footer-link">Privacy Policy</router-link></li>
              <li><router-link to="/terms&conditions" id="footer-link">Terms of use</router-link></li>
              <li><router-link to="" id="footer-link">FAQs</router-link></li>
              <li><router-link to="" id="footer-link">Blogs</router-link></li>
            </ul>
          </div>
          <div class="col-md-4 lg--4 sm-4" id="row-col">
            <h5><b>Contact us</b></h5>
            <p><font-awesome-icon icon="landmark" id="font-icon"/> SUG Building TASUED, Ijagun Road, Ijebu-Ode, Ogun State</p>
            <p><font-awesome-icon icon="phone-square" id="font-icon"/> +234 81 75052427</p>
            <P><font-awesome-icon icon="envelope-square" id="font-icon"/> contact@pineventz.com</P>
            <!-- <a href=""><font-awesome-icon icon="whatsapp" id="font-icon"/></a -->
          </div>
          <div class="col-md-4 lg--4 sm-4" id="row-col">
            <h5><b>Connect us</b></h5>
            <p>We'll keep you informed and updated Sign up for our email newsletters</p>
            <form>
              <div class="form-group">
                <input type="text" name="" class="form-control" placeholder="Full name">
              </div>
              <div class="form-group">
                <input type="email" name="" class="form-control" placeholder="Email Address">
              </div>
              <div class="form-group">
                <input type="submit" value="Submit" class="btn btn-success" id="submit-btn">
              </div>
            </form>
          </div>
        </div>
        <p id="copy">Copyright &copy 2019-pineventz</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main-body {
    background-color: #047a6d;
  }

  .row {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    color: #fff;
  }

  #row-col {
    margin-top: 30px;
    text-align: justify;
  }

  #copy {
    text-align: center;
    color: #fff;
    margin-bottom: 0px;
    padding-bottom: 30px;
  }

  #footer-link {
    color: #fff;
  }

  #submit-btn {
    width: 100%;
  }
</style>
