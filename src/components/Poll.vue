<template>
    <section id="home">
<section >
    <!-- <v-btn class="bPoll">
  Create a new Poll
    </v-btn> -->
    <v-btn class="bPoll" v-bind="props"  v-on:click="logOut()">
  LogOut
    </v-btn>
<MainPollCard></MainPollCard>
<PollCards></PollCards>
<!-- <Users></Users> -->
</section>
</section>
</template>

<script>
import MainPollCard from './MainPollCard.vue'
import PollCards from './PollCards.vue'
// import Users from './Users.vue'
import router from "../router/index";

export default {
    name:`Poll`,
    data(){
        return{

        }
    },
    components:{
        MainPollCard,
        PollCards,
        // Users
    },

    methods:{
        logOut(){
            localStorage.removeItem("status")
            localStorage.removeItem("user")
            router.push('/')
        }
    }
}
</script>

<style scoped>
#home{
  /* background-image: url("../assets/HD-Wallpapers1_FOSmVKg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 960px; */
  background-color: bisque;
  display: flex;
  justify-content: center;
}


h2{
    color:black
}

.bPoll{
    color:black;
    /* margin-top:1rem;
    margin-bottom:1rem; */
    background-color: rgb(151, 47, 50);
    padding: 5px;
    margin: 10px;
}

</style>
