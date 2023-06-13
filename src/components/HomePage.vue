<template>
<section  id="home">

<section id="nav">
  <div id="left"><img src="../assets/Tampa_Bay_Buccaneers_logo_red.png" alt=""></div>
  <div id="right">
    <div id="lp">
      <span v-on:click="()=>TogglePopup('buttonTrigger')">Login In</span>
    </div>
    <div id="sp">
      <span>Sign In</span>
    </div>
  </div>
</section>

<LoginPage></LoginPage>
<br>
<br>
<SignInPage></SignInPage>

<h1></h1>


<Pop v-if="popupTriggers.buttonTrigger" :TogglePopup="
()=>TogglePopup('buttonTrigger')">
<Login></Login>
</Pop>


</section>
</template>

<script>
import LoginPage from './LoginPage.vue';
import SignInPage from './SignInPage.vue';
import Pop from './PopUp.vue'
import {ref} from 'vue'

export default {
  
  name: `HomePage`,
  data(){
    const popupTriggers=ref({
      buttonTrigger:false
    });

    const TogglePopup=(trigger)=>{
      popupTriggers.value[trigger] =! popupTriggers.value[trigger]
    };
    return{
      Pop,
      popupTriggers,
      TogglePopup
    }
  },
  components:{
    LoginPage,
    SignInPage,
    Pop
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#home{
  background-image: url("../assets/backGround.png");
  /* background-size:; */
  background-repeat: no-repeat;
}

#nav{
  background-color:black;
  display: flex;
  justify-content: space-between;
}

#left img{
  height: 45px;
  left: 56px;
  margin-left:30px ;
}

#right{
  display: flex;
  gap: 5px;
}

#lp{
  padding: 12px;
  border: 2px solid;
  border-radius: 30%;
}

#sp{
  padding: 12px;
  border:2px solid;
  margin-left:30px ;
  margin-right:30px ;
  border-radius: 30%;
}
</style>
