<template>
    <div>Hello from Poll cards</div>
  <!-- <v-sheet width="500" class="mx-auto" > -->
    <v-form fast-fail v-for="(data,index ) in getPoll" v-bind:key="index" class="form">
        <v-row>
    <div  @click="toggle(index)" >{{ data.title }}</div>
      <v-text-field
      v-if="editIndex==index"
        v-model="newTitle"
      ></v-text-field>

    <v-btn >
      <i class="fa-solid fa-pen-to-square" v-on:click="nayaTitle(newTitle,data._id)" ></i>
    </v-btn>
      </v-row>
<v-radio-group>

  
  <v-radio :label=" opt.option " class="bradio" v-for="(opt , index) in data.options" :key="index">
    <!-- {{ opt.option }} {{ data._id }}<br><br> -->
    <i class="fa-solid fa-trash-can"  @click="deleteOption(data._id,opt.option)"></i> 
  </v-radio>
</v-radio-group>

<div class="edit"  v-if="editOption==(data._id)">
      <v-text-field
      
        v-model="newOption"
      ></v-text-field>
      <i class="fa-solid fa-square-plus" v-on:click="nayaOption(newOption,data._id)"></i>
      </div>

<v-btn block class="mt-2" @click="toggleEdit(data._id)">Add Poll Option</v-btn>
      <v-btn block class="mt-2" @click="deletePoll(data._id)">Delete Poll</v-btn>
     
    
    </v-form>
  <!-- </v-sheet> -->

</template>

<script>
// import { ref } from 'vue';
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';


export default {
    name:`PollCards`,
    data(){
      // const showFirst= ref(true);

      // const toggleEdit =  () => {
      //   this.editIndex=index;
      //   // if(this.editIndex==index){

          // this.showFirst =!this.showFirst;
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
            // toggleEdit,
            editIndex:-1,
            showFirst:false,
            editOption:-1
          
        }
    },
    computed: mapGetters(['getPoll']),

    methods:{
        ...mapActions(['getAllPoll', 'deletePoll','updateTitle','deletePollOption','addPollOption']),
      
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
      },

      toggleEdit(id){
        this.id=id;
        console.log(this.id , "Please");
        this.editOption=id;
        console.log(this.editOption,"Please2");
      },


      deleteOption(id , text){
        this.id=id;
        this.text=text;
        // console.log(this.id,"Option");
        // console.log(this.text,"option text");

        let delObj={
          id : this.id,
          text : this.text,
        }
        // console.log(delObj ,"data in delete object");

        this.deletePollOption({
          delObj
        })
      },

      nayaOption(newOption,id){
        this.id=id;
        this.newOption = newOption;
        console.log(this.id ,"add new option ID");
        console.log(this.newOption ,"data in naya option");

        let addObj ={
          newOption:this.newOption,
          id:this.id
        }

        this.addPollOption({
          addObj
        })
                
      }

        
           

        
    },
}
</script>


<style scoped>
.form{
  border: 6px solid;
margin-bottom: 69px;
padding: 42px;
color: black;
border-bottom-right-radius: 16px;
border-top-left-radius: 106px;
}

.bradio{
  border: 2px solid black;
  margin: 6px;
  padding: 20px;
}

.edit{
  display: flex;
}
</style>