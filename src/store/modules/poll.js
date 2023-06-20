import axios from "axios"

const state ={
    poll:[]
};
const actions={

    async addPoll({commit},pollDetails){
        const res = await axios.post(`http://65.108.77.50:3031/add_poll?title=${pollDetails.title}%20&options=${pollDetails.options[0]}____${pollDetails.options[1]}____${pollDetails.options[2]}____${pollDetails.options[3]}`);
        commit("add_poll",res.data);
        // console.log(res.data);
        // console.warn("Hello from poll title",pollDetails.options[0]);
        // console.warn("Hello from poll title2",pollDetails.options[1]);
        // console.warn("Hello from poll title3",pollDetails.options[2]);
        

    },


    async getAllPoll({commit}){
        const res = await axios.get(`http://65.108.77.50:3031/list_polls`);
        commit("setPoll" , res.data.data);
        // console.log("Hello from api Poll" , res.data);
        // console.warn("Hello from api Poll Title" , res.data.data._id);
    },

    async deletePoll({commit},id){
        let res=await axios.delete(`http://65.108.77.50:3031/delete_poll?id=${id}`);
        commit("removePoll" ,res.data);
    },

    async updateTitle({commit},obj){
        // console.log(obj.obj.newTitle,"hello from api Poll")
        // console.log(`http://65.108.77.50:3031/update_poll_title?id=${obj.obj.id}&title=${obj.obj.newTitle}`)
        // console.log(obj.obj.newTitle,"Title is in api");
        // console.log(obj.obj.id,"Id is in api");
        let res= await axios.post(`http://65.108.77.50:3031/update_poll_title?id=${obj.obj.id}&title=${obj.obj.newTitle}`);
        commit(("setTitle"),res.data);
    },

    async deletePollOption({commit},delObj){
        console.log("deleteId in API" , delObj.delObj.id);
        console.log("deleteText in API", delObj.delObj.text);
        console.log(`http://65.108.77.50:3031/delete_poll_option?id=${delObj.delObj.id}&option_text=${delObj.delObj.text}`)
        let res= await axios.delete(`http://65.108.77.50:3031/delete_poll_option?id=${delObj.delObj.id}&option_text=${delObj.delObj.text}`);
        commit(("removePollOption"),res.data);
    }
};
const mutations={
    add_poll:(state,poll) => state.poll.push(poll),
    setPoll:(state,poll) => (state.poll=poll),
    removePoll:(state,id) => (state.poll.filter(poll=>
                                                poll.id !== id)),
    remove:(state,id) => (state.poll.filter(poll=>
                                            poll.id !== id))                                           

};
const getters={
    getPoll : state => state.poll
};

export default {
    state,
    actions,
    mutations,
    getters
}