<template>
    <section id="home">
    <!-- <div>Hello In user Potral</div> -->
    <v-btn class="bPoll" v-bind="props"  v-on:click="logOut()">
    LogOut
    </v-btn>
    <v-form fast-fail v-for="(data,index ) in getPoll" v-bind:key="index" class="form">
        <v-row>
          <section id="title" >    
            <div>{{ data.title }}</div>
    </section>
    </v-row>
<v-radio-group>

  <div>
    <v-radio :label=" opt.option " class="bradio" v-for="(opt , index) in data.options" :key="index">
    <!-- {{ opt.option }} {{ data._id }}<br><br> -->
  </v-radio>
</div>
</v-radio-group>

<v-btn block class="mt-2">Vote</v-btn>
     
    
    </v-form>

</section>

</template>



<script>
import { mapActions, mapGetters } from 'vuex';
import router from "../router/index";

export default {
    name:`Users`,
    computed: mapGetters(['getPoll']),
    
    methods:{
        ...mapActions(['getAllPoll']),
        getPoll(){
        this.getAllPoll();
      },
        logOut(){
            localStorage.removeItem("status")
            router.push('/')
        }
    }

}
</script>


<style scoped>


.form{
border: 6px solid;
margin-bottom: 69px;
padding: 42px;
color: black;
border-radius: 16px;
/* border-top-left-radius: 106px; */
background-color: cadetblue;
width: 752px;
margin-left: 25%;
}

.bradio{
  border: 2px solid black;
  margin: 6px;
  padding: 20px;
}

#title{
display: flex;
align-items: center;
gap: 120px;
padding: 29px;
margin-left: 330px;
}


#title div{
  border: 2px solid;
  padding: 15px;
  border-radius: 16px;
/* border-top-left-radius: 16px; */
}


#home{
  /* background-image: url("../assets/HD-Wallpapers1_FOSmVKg.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 960px; */
  background-color: bisque;
  /* display: flex; */
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