<template>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="login(username,password)">
        <v-text-field
          v-model="username"
          label="User Name"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          label="password"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">Log In</v-btn>
      </v-form>
    </v-sheet>
  </template>

<script>
import router from '@/router';
import { mapActions , mapGetters } from 'vuex'
export default {
    name:`LoginPage`,
    data(){
        return{
            username:"",
            password:"",
            // role:""
        }
    },
    computed:mapGetters(['getAllUsers']),
    methods:{
      ...mapActions(["loginUser",'getAllPoll']),
       async login(username,password){

          this.username=username;
          this.password= password;
          // this.role=role;

          console.log("username: " , this.username);
          console.log("password: ", this.password);
          let loginObj={
            username:this.username,
            password:this.password,
            // role:this.role
          }

         await this.loginUser({
            loginObj,
            
            })
            
            for (let index = 0; index < this.getAllUsers.data.length; index++) {
              // console.log(this.getAllUsers.data[index].password);
              // const element = this.getAllUsers.data[index];
              console.log(this.username,this.password);
              if(this.getAllUsers.data[index].username==this.username && this.getAllUsers.data[index].password==this.password) {
                  let role= this.getAllUsers.data[index].role;
                  localStorage.setItem("role", role)
                console.log("role.....",this.getAllUsers.data[index].role);
                  console.log(role);
                  if(role=="admin") {
                    router.push({path:'/poll',});
                  } 
                  if(role=="user"){
                    router.push({path:'/pollUser'});
                  } 
            }
          }

          this.username=""
          this.password=""
                    // this.role=""
        },
    }
}
</script>


<style scoped>


</style>