<template>
<section  id="bghome">

<section id="nav">
  <div id="left"><img src="../assets/Tampa_Bay_Buccaneers_logo_red.png" alt="">
  <router-link to="/" class="link">Home</router-link>
  <router-link to="/about" class="link">About</router-link>
  <router-link to="/poll" class ="link">Poll</router-link>
  <v-btn class="bPoll" v-bind="props"  v-on:click="logOut()">
  LogOut
    </v-btn>
</div>
  <div id="right">
  
<!-- for login in form -->

      <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
     
          <v-btn variant="text"
          v-bind="props">
          Login
       </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
    <LoginPage @click="isActive.value = true"></LoginPage>
          </v-card>
        </template>
      </v-dialog>

<!-- for sign in form -->
      
      <v-dialog
        transition="dialog-bottom-transition"
        width="auto"
      >
        <template v-slot:activator="{ props }">
          <v-btn variant="text"
          v-bind="props">
          Sign In
       </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
    <SignInPage @click="isActive.value = true"></SignInPage>
          </v-card>
        </template>
      </v-dialog>

  </div>
 
</section>

</section>


<router-view></router-view>
</template>

<script>
import LoginPage from './LoginPage.vue';
import SignInPage from './SignInPage.vue';
import router from "../router/index";

export default {
  
  name: `NavBar`,
  data(){
    return{
    }
  },
  components:{
    LoginPage,
    SignInPage
},
  props: {
  },


  methods:{
    removeComponentFromNavBar (navBar, componentName) {
  let index = -1
  for (let i = 0; i < navBar.length; i++) {
    if (navBar[i].name === componentName) {
      index = i
      break
    }
  }

  if (index !== -1) {
    navBar.splice(index, 1)
  }
},

logOut(){
            localStorage.removeItem("status")
            router.push('/')
        }
  }
}
</script>

<style scoped>

.link{
 color : aliceblue;
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

#left{
  display: flex;
}

#right{
  display: flex;
  gap: 34px;
margin-top: 8px;
margin-right: 34px;
}

.link{
  padding: 12px;
  /* border:2px solid; */
  margin-left:30px ;
  margin-right:30px ;
  border-radius: 30%;
}
</style>
