<template>
    <div>Hello from Poll cards</div>
  <v-sheet width="500" class="mx-auto" >
    <v-form fast-fail v-for="data in getPoll" :key="data" class="form">
        <v-row>
    <!-- <p>{{ data.title }}</p> -->
      <v-text-field
        :rules="firstNameRules"
        v-model="newTitle"
      >{{ data.title }}</v-text-field>

    <v-btn >
      <i class="fa-solid fa-pen-to-square" v-on:click="updateTitle(newTitle,data._id)"></i>
    </v-btn>
      </v-row>
<v-radio-group>
  <!-- <v-radio value="1">{{ data.option }}</v-radio> -->
</v-radio-group>

      <v-btn block class="mt-2" @click="deletePoll(data._id)">Delete</v-btn>
    
    </v-form>
  </v-sheet>


  <!-- <div v-for="data in getPoll" :key="data">
    {{ data.title }}
  </div> -->

</template>

<script>
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';


export default {
    name:`PollCards`,
    data(){
        return{
            newTitle:"",
            // firstNameRules:[
            //      () =>{
            //         return this.title
            //     }
            // ]
        }
    },
    computed: mapGetters(['getPoll']),

    methods:{
        ...mapActions(['getAllPoll', 'deletePoll','updateTitle']),
        editTitle(){
            return{
                
            }
        }
    },
}
</script>


<style scoped>

</style>