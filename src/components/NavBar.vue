<template>
<section  id="bghome">

<section id="nav">
  <div id="left"><img src="../assets/Tampa_Bay_Buccaneers_logo_red.png" alt="">
  <router-link to="/" class="link">Home</router-link>
  <router-link to="/about" class="link">About</router-link>
  <router-link to="/poll" class ="link">Poll</router-link>
</div>
  <div id="right">
    <div id="lp">
      <span v-on:click="()=>ToggleLoginPopup('LoginTrigger')">Login</span>
    </div>
    <div id="sp">
      <span v-on:click="()=>ToggleSignInPopup('buttonTrigger')">Sign In</span>
    </div>
  </div>
</section>


<LoginPop v-if="popupTriggers.LoginTrigger" :ToggleLoginPopup="
()=>ToggleLoginPopup('LoginTrigger')">
<Login></Login>
</LoginPop>

<SignInPop v-if="popupTriggers.buttonTrigger" :ToggleSignInPopup="
()=>ToggleSignInPopup('buttonTrigger')">
<SignIn></SignIn>
</SignInPop>


</section>

<!-- <section class="bgHome"></section> -->

<router-view></router-view>
</template>

<script>
import LoginPop from './LoginPop.vue'
import {ref} from 'vue'
import SignInPop from './SignInPop.vue';
// import SignInPage from './SignInPage.vue';

export default {
  
  name: `NavBar`,
  data(){
    const popupTriggers=ref({
      LoginTrigger:false
    });

    const ToggleLoginPopup=(trigger)=>{
      popupTriggers.value[trigger] =! popupTriggers.value[trigger]
    };

    const ToggleSignInPopup=(trigger)=>{
      popupTriggers.value[trigger] =! popupTriggers.value[trigger]
    };

    return{
      LoginPop,
      popupTriggers,
      ToggleLoginPopup,
      ToggleSignInPopup,
      SignInPop
    }
  },
  components:{
    LoginPop,
    SignInPop,
    // SignInPage
},
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.link{
 color : aliceblue;
}
/* 
#bghome{
  background-image: url("../assets/backGround.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 1080px;
} */

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

#left{
  display: flex;
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

.link{
  padding: 12px;
  border:2px solid;
  margin-left:30px ;
  margin-right:30px ;
  border-radius: 30%;
}
</style>
