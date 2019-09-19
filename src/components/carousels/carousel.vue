<template>
  <div class="carousel-page">
    <div id="demo" class="carousel slide" data-ride="carousel">
<div>
  <!-- <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fadein
    indicators
    img-width="1024"
    img-height="480"
  >
  </b-carousel> -->
</div>
<div class="parent">

  <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      style="text-shadow: 1px 1px 2px #333;"
  >

  <b-carousel-slide
  :img-src="img1"
  img-height="200"
  class="setHeight"
  >
  
  </b-carousel-slide>

  <b-carousel-slide
  :img-src="img2"
  img-height="200"
  class="setHeight"
  >
  </b-carousel-slide>

  </b-carousel>
  
</div>
  </div>
</div>
</template>

<script>
  export default {
   data() {
     return {
       slide: 0,
       img1: require('../../assets/carousel/eventbanner.jpg'),
       img2: require('../../assets/carousel/eventbanner2.jpg'),
       img3: require('../../assets/carousel/eventbanner4.jpg')
     }
   },
   methods: {
      
    },
  }
</script>

<style scoped>
    .carousel-page {
      margin-top: 66px;
    }

    .banner-h1 {
      font-size: 40px;
      margin-top: -750px;
    }

    .banner-rest {
      margin-top: 200px;
    }

    #trig-btn {
      margin-top: 20px;
    }

    #findd {
      color: #fff;
      text-decoration: none;
      font-size: 20px;
    }


    @media screen and (min-width: 480px) {
        .banner-h1 {
        font-size: 30px;
        margin-top: -10px;
      }

      .banner-rest {
        margin-top: 0px;
      }

      #trig-btn {
        margin-top: 0px;
      }

      #legal-issh {
        font-size: 20px;
      }

      #findd {
        color: #fff;
        text-decoration: none;
        font-size: 15px;
      }
    }


.write-up{
  margin-top: -30%
}

@media (max-width: 576px) {
    .setHeight{
  height: 230px !important
}
}

@media (min-width: 578px){
  .setHeight{
  height: 400px !important
}
}

@media (min-width: 992px) {
.setHeight{
  height: 618px !important
}
}
   


</style>