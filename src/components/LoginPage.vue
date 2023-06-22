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
        <!-- <router-link >
        </router-link> -->
        <v-btn type="submit" block class="mt-2"  @click=" getPoll()">Log In</v-btn>
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
        ...mapActions(["loginUser",'getAllPoll']),
        login(){
            this.loginUser({
                username:this.username,
                password:this.password,
            })
        },
        getPoll(){
        this.getAllPoll();
      }
    }
}
</script>


<style scoped>


</style>