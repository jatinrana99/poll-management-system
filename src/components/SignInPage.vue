<template>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="signIn(username,password,role)">
        <v-text-field
          v-model="username"
          label="User Name"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          label="Password"
        ></v-text-field>

        <v-text-field
          v-model="role"
          label="Role"
        ></v-text-field>
        <v-btn  type="submit" block class="mt-2">Sign In</v-btn>
      </v-form>
    </v-sheet>
  </template>

<script>

import {mapActions} from 'vuex'
export default {
    name:`SignInPage`,
    data(){
        return{
            username:"",
            password:"",
            role:"",
            // dialog: false,
            dialog1: false
        }
    },
    methods:{
        ...mapActions(["addUser"]),
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

    }
}
</script>

<style scoped>

.SI{
    background-color: aquamarine;
}


</style>