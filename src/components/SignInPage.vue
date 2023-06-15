<template>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="signIn">
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
        <v-btn type="submit" block class="mt-2" >Sign In</v-btn>
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
            role:""
        }
    },
    methods:{
        ...mapActions(["addUser"]),
        signIn(){
            this.addUser({
                username : this.username,
                password : this.password,
                role: this.role,
            })
            console.warn("hi",this.username);
        },

    }
}
</script>

<style scoped>

.SI{
    background-color: aquamarine;
}


</style>