<template>
<section id="home">
    <!-- <v-btn class="bPoll">
  Create a new Poll
    </v-btn> -->

<MainPollCard></MainPollCard>
<PollCards></PollCards>
</section>
</template>

<script>
import MainPollCard from './MainPollCard.vue'
import PollCards from './PollCards.vue'

export default {
    name:`Poll`,
    data(){
        return{

        }
    },
    components:{
        MainPollCard,
        PollCards
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
}


h2{
    color:black
}

.bPoll{
    color:black;
    margin-top:1rem;
    margin-bottom:1rem;
    background-color: rgb(47, 151, 151);
}
</style>
