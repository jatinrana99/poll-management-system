<template>
    <v-sheet width="300" class="mx-auto">
      <v-form fast-fail @submit.prevent="login">
        <v-text-field
          v-model="username"
          label="User Name"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          label="password"
        ></v-text-field>
        <!-- <v-btn type="submit" block class="mt-2">Log In</v-btn> -->
        <router-link to="/poll">
            <v-btn type="submit" block class="mt-2">Log In</v-btn>
        </router-link>
      </v-form>
    </v-sheet>
  </template>

<script>
import { mapActions } from 'vuex'
export default {
    name:`LoginPage`,
    data(){
        return{
            username:"",
            password:"",
        }
    },
    methods:{
        ...mapActions(["loginUser"]),
        login(){
            this.loginUser({
                username:this.username,
                password:this.password,
            })
        }
    }
}
</script>


<style scoped>


</style>