<!-- <template>
<div>Hello from Poll Card</div>

</template> -->

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="1024" >
      <template v-slot:activator="{ props }">
        <v-btn class="bPoll" v-bind="props">
  Create a new Poll
    </v-btn>
      </template >
      <v-card >
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Question For Poll" required v-model="title"></v-text-field>
              </v-col>
              <v-row cols="12">
                <v-text-field label="Options" required v-model="option"></v-text-field>
                <i class="fa-solid fa-circle-plus" v-on:click="addOption()" id="add"></i>
              </v-row>
              <v-col cols="12">
                <div v-for="item in options" :key="item">
                  {{ item }}
                </div>
              </v-col>
            </v-row>
          </v-container>
          <small>{{ err }}</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
            Close
          </v-btn>
          <router-link to="/poll">
          <v-btn color="blue-darken-1" variant="text" @click="dialog = true;addNewPoll() " >
            Add
          </v-btn>
        </router-link>
        </v-card-actions>
      </v-card>

    </v-dialog>
  </v-row>

  <!-- <PollCards></PollCards> -->
</template>



<script>
import { mapActions } from 'vuex';
// import PollCards from './PollCards.vue'

export default {
    name:`MainPollCard`,
    // components:{
    //   PollCards
    // },
    data(){
      return {
        dialog: false,
        option: "",
        options:[],
        title:"",
        err:"",
      }
    },
    methods:{
      addOption(){
        this.options.push(this.option);
        this.option = "";
      },
      ...mapActions(['addPoll','getAllPoll']),
      addNewPoll(){

        if(this.options.length > 1){
          this.addPoll({
            
            title:this.title,
            options:this.options,
            
          })
          
        } else {
          this.err="*For poll aleast Two options are mandatory."

        }
        // this.addPoll({
          
        //   title:this.title,
        //   options:this.options,
          
        // })
        console.log("Hello from title",this.addPoll.title);
        console.warn("Hello from options",this.addPoll.options);
       
      },

      // getPoll(){
      //   this.getAllPoll();
      // }
    }
}

</script>


<style scoped>

.bPoll{
    color:black;
    margin-top:1rem;
    margin-bottom:1rem;
    background-color: rgb(47, 151, 151);
}

.pollForm{
border: 12px solid cadetblue;
background-color: cornsilk;
border-radius: 140px;
padding: 21px;
}


</style>