<template>
    <h2>Create Your Own Poll</h2>
    <PollCard></PollCard>
    <PollCard></PollCard>
</template>

<script>
import PollCard from './PollCard.vue'

export default {
    name:`Poll`,
    data(){
        return{

        }
    },
    components:{
        PollCard
    }
}
</script>

<style scoped>
h2{
    color:black
}
</style>