<template>
  <div>
    <firstnav />
    <carousel />
    <article1 />
    <article2 />
    <footercompo />
  </div>
</template>

<script>
import firstnav from '../components/navbar/firstnav'
import carousel from '../components/carousels/carousel'
import article1 from '../components/indexarticles/article1'
import article2 from '../components/indexarticles/article2'
import footercompo from '../components/footer/footer'

export default {
  components: {
    firstnav,
    carousel,
    article1,
    article2,
    footercompo
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
