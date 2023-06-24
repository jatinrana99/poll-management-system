<template>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="">
        <v-text-field
          v-model="username"
          label="User Name"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          label="Password"
        ></v-text-field>

        <v-text-field v-if="ST"
          v-model="role"
          label="Role"
        ></v-text-field>
        <v-btn  type="submit" block class="mt-2" v-if= "ST" @click="signIn(username,password,role)">Sign In</v-btn>
        <v-btn  type="submit" block class="mt-2" v-if= "LT" @click="login(username,password)">Login In</v-btn>
      </v-form>
    </v-sheet>
  </template>

<script>

import {mapActions, mapGetters} from 'vuex'
import router from '@/router';
export default {
    name:`SignInPage`,
    props:[
      'ST',
      'LT'
    ],
    data(){
        return{
            username:"",
            password:"",
            role:"",
            // dialog: false,
            dialog1: false
        }
    },
    computed:mapGetters(['getAllUsers']),
    methods:{
        ...mapActions(["addUser","loginUser",'getAllPoll']),
        signIn(username,password,role){
            this.username = username;
            this.password = password;
            this.role = role;
            

            let signObj={
              username:this.username,
              password:this.password,
              role:this.role
            }

            this.addUser({
                signObj
            })
            console.warn("hi",username);
        },




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

.SI{
    background-color: aquamarine;
}


</style>