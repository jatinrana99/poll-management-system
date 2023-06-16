<template>
    <div>Hello from Poll cards</div>
  <v-sheet width="300" class="mx-auto" >
    <v-form fast-fail v-for="data in getPoll" :key="data">
      <v-text-field
        v-model="firstName"
        :rules="firstNameRules"
      >{{ data.title }}</v-text-field>

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
import {mapActions} from 'vuex'

export default {
    name:`PollCards`,
    data(){
        return{

        }
    },
    computed: mapGetters(['getPoll']),

    methods:{
        ...mapActions(['getAllPoll', 'deletePoll'])
    },
}
</script>


<style scoped>

</style>