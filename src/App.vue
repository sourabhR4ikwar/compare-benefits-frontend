<template>
  <div id="app" class="d-flex flex-column">
    <Navbar />
    <div class="container py-5 flex-grow-1">
      <routerView/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
export default {
  components:{
    Navbar,
    Footer
  }
}
</script>

<style>
#app{
  height: 100vh!important;
}
</style>
