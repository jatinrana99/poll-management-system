<template>
    <!-- <HomePage/> -->
    <div id="home">Home page code except nav bar</div>
</template>

<script>
// @ is an alias to /src
// import HomePage from '../components/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    // HomePage
  }
}
</script>


<style scoped>
#home{
  background-image: url("../assets/backGround.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 1080px;
}
</style>
