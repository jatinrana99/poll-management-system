<template>
    <!-- <HomePage/> -->
    <div id="home">Home page code except nav bar</div>
    <PollCards></PollCards>

    <!-- <section>
      <h2></h2>
    </section>

    <LoginPage></LoginPage>
    <SignInPage></SignInPage> -->
</template>

<script>
// @ is an alias to /src
// import HomePage from '../components/HomePage.vue'

// import LoginPage from '@/components/LoginPage.vue';
// import SignInPage from '@/components/SignInPage.vue';
import { mapActions } from 'vuex';
import PollCards from '../components/PollCards.vue'

export default {
  name: 'HomeView',
  components: {
    // LoginPage,
    // SignInPage
    PollCards
},
methods:{
  ...mapActions(["getUsers"]),
},
mounted(){
  this.getUsers()
}
}
</script>


<style scoped>
#home{
  background-image: url("../assets/HD-Wallpapers1_FOSmVKg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 960px;
}
</style>
