<template>
    <div>Hello from Poll cards</div>
  <v-sheet width="500" class="mx-auto" >
    <v-form fast-fail v-for="(data,index ) in getPoll" v-bind:key="index" class="form">
        <v-row>
    <div  @click="toggle(index)" >{{ data.title }}{{ index }}</div>
      <v-text-field
      v-if="editIndex==index"
        v-model="newTitle"
      ></v-text-field>

    <v-btn >
      <i class="fa-solid fa-pen-to-square" v-on:click="nayaTitle(newTitle,data._id)" ></i>
    </v-btn>
      </v-row>
<v-radio-group>

  <v-radio v-for="(opt , index) in data.options" :key="index">{{ opt.option }}</v-radio>
</v-radio-group>

      <v-btn block class="mt-2" @click="deletePoll(data._id)">Delete</v-btn>
    
    </v-form>
  </v-sheet>

</template>

<script>
// import { ref } from 'vue';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';


export default {
    name:`PollCards`,
    data(){
      // const showFirst= ref(true);

      // const toggle =  (index) => {
      //   // console.log(index);
      //   this.editIndex=index;
      //   // if(this.editIndex==index){

      //     // this.showFirst =!this.showFirst;
      //   // }
      //   // if(index==)
      //   // this.editIndex = index;
      //   // if(this.editIndex !== -1){
      //   //   showFirst.value =!showFirst.value;
      //   // }
      // }
        return{
            newTitle:"",
            // editDetails:[],
            // showFirst,
            title:"",
            // toggle,
            editIndex:-1,
            // showFirst:true
        }
    },
    computed: mapGetters(['getPoll']),

    methods:{
        ...mapActions(['getAllPoll', 'deletePoll','updateTitle']),
      
      nayaTitle(newTitle,id){
        this.id=id;
        this.newTitle=newTitle
        console.log(this.id);
        let obj={
          newTitle : this.newTitle,
          id : this.id,
        }
        console.log(obj);
          this.updateTitle({
            obj
        })

      },
      toggle(index){
        // console.log(index);
        this.editIndex=index;
        // if(this.editIndex==index){

          // this.showFirst =!this.showFirst;
        // }
        // if(index==)
        // this.editIndex = index;
        // if(this.editIndex !== -1){
        //   showFirst.value =!showFirst.value;
        // }
      }

        
           

        
    },
}
</script>


<style scoped>

</style>