<template>
  <div class="main-body">
    <firstnav />
    <div class="banner-area">
      <h4 class="banner-area-h4"><strong>Our Terms Of Use</strong></h4>
    </div>
    <hrDesign />
    <div class="row">
      <div class="col-md-12 lg-12 sm-12">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi tempora neque doloremque esse dicta dolorum. Qui reiciendis expedita similique atque natus nam magni ab voluptates in vitae! Quos, adipisci perferendis fugit deleniti numquam ratione illo, laudantium excepturi unde voluptatibus ipsam voluptatum incidunt deserunt nostrum eos tenetur. Voluptatum eos pariatur ratione fuga provident modi quia, animi dolorem aliquam quisquam libero architecto recusandae similique nobis? Assumenda facilis suscipit minus qui saepe? Eos vero impedit sed incidunt iure, temporibus voluptates corrupti voluptatem rerum facilis, optio eveniet maiores reprehenderit eaque id quaerat cumque omnis est quis? Non, adipisci! Ipsam fugiat unde vitae. Impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi tempora neque doloremque esse dicta dolorum. Qui reiciendis expedita similique atque natus nam magni ab voluptates in vitae! Quos, adipisci perferendis fugit deleniti numquam ratione illo, laudantium excepturi unde voluptatibus ipsam voluptatum incidunt deserunt nostrum eos tenetur. Voluptatum eos pariatur ratione fuga provident modi quia, animi dolorem aliquam quisquam libero architecto recusandae similique nobis? Assumenda facilis suscipit minus qui saepe? Eos vero impedit sed incidunt iure, temporibus voluptates corrupti voluptatem rerum facilis, optio eveniet maiores reprehenderit eaque id quaerat cumque omnis est quis? Non, adipisci! Ipsam fugiat unde vitae. Impedit?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi tempora neque doloremque esse dicta dolorum. Qui reiciendis expedita similique atque natus nam magni ab voluptates in vitae! Quos, adipisci perferendis fugit deleniti numquam ratione illo, laudantium excepturi unde voluptatibus ipsam voluptatum incidunt deserunt nostrum eos tenetur. Voluptatum eos pariatur ratione fuga provident modi quia, animi dolorem aliquam quisquam libero architecto recusandae similique nobis? Assumenda facilis suscipit minus qui saepe? Eos vero impedit sed incidunt iure, temporibus voluptates corrupti voluptatem rerum facilis, optio eveniet maiores reprehenderit eaque id quaerat cumque omnis est quis? Non, adipisci! Ipsam fugiat unde vitae. Impedit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi tempora neque doloremque esse dicta dolorum. Qui reiciendis expedita similique atque natus nam magni ab voluptates in vitae! Quos, adipisci perferendis fugit deleniti numquam ratione illo, laudantium excepturi unde voluptatibus ipsam voluptatum incidunt deserunt nostrum eos tenetur. Voluptatum eos pariatur ratione fuga provident modi quia, animi dolorem aliquam quisquam libero architecto recusandae similique nobis? Assumenda facilis suscipit minus qui saepe? Eos vero impedit sed incidunt iure, temporibus voluptates corrupti voluptatem rerum facilis, optio eveniet maiores reprehenderit eaque id quaerat cumque omnis est quis? Non, adipisci! Ipsam fugiat unde vitae. Impedit?</p>
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
    margin-top: 80px;
  }

  .banner-area-h4 {
    padding-top: 30px;
    font-size: 25px;
    text-align: center;
  }

  .row {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
</style>
