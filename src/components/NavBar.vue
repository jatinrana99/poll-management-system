<template>
<section  id="bghome">

<section id="nav">
  <div id="left"><img src="../assets/Tampa_Bay_Buccaneers_logo_red.png" alt="">
  <router-link to="/" class="link">Home</router-link>
  <router-link to="/about" class="link">About</router-link>
  <router-link  to="/poll" class ="link" v-if= "role == admin" >Poll</router-link>
  <router-link to="/pollUser" class="link" v-else>Poll</router-link>
  <!-- <v-btn class="bPoll" v-on:click="check()">
  LogOut
    </v-btn> -->
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
          Sign In
       </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
    <!-- <LoginPage @click="isActive.value = true"></LoginPage> -->
    <SignInPage ST="True" @click="isActive.value = true"></SignInPage>
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
          Login 
       </v-btn>
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
    <SignInPage LT="True" @click="isActive.value = true"></SignInPage>
          </v-card>
        </template>
      </v-dialog>

  </div>
 
</section>

</section>


<router-view></router-view>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import LoginPage from './LoginPage.vue';
import SignInPage from './SignInPage.vue';
// import router from "../router/index";

export default {
  
  name: `NavBar`,
  data(){
    return{
      user:"user",
      role:localStorage.getItem("role"),
      
    }
  },
  components:{
    // LoginPage,
    SignInPage
},
  props: {

  },

  computed:mapGetters(['getAllUsers']),
  methods:{
    ...mapActions(['getAllPoll']),

    // check(){
    //   console.log(this.role);
      // for (let index = 0; index < this.getAllUsers.data.length; index++) {
      //          console.log(this.getAllUsers.data[0].role , "password");
      //         //  const element = this.getAllUsers.data[index];
      //          console.log(this.username,this.password);
      //         if(this.getAllUsers.data[index].username==this.username && this.getAllUsers.data[index].password==this.password) {
      //             let role= this.getAllUsers.data.role;
      //           console.log("role.....",this.getAllUsers.data.role);
      //             console.log(role);
      //             if(role=="admin") {
      //               router.push({path:'/poll',});
      //             } 
      //             if(role=="user"){
      //               router.push({path:'/pollUser'});
      //             } 
      //        }
      //     }
    // }
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
