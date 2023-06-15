import axios from "axios"

const state ={
    poll:[]
};
const actions={

    async addPoll({commit},pollDetails){
        const res = await axios.post(`http://65.108.77.50:3031/add_poll?title=${pollDetails.title}%20&options=${pollDetails.options[0]}____${pollDetails.options[1]}____${pollDetails.options[2]}____${pollDetails.options[3]}`);
        commit("add_poll",res.data);
        console.log(res.data);
        console.warn("Hello from poll title",pollDetails.options[0]);
        console.warn("Hello from poll title2",pollDetails.options[1]);
        console.warn("Hello from poll title3",pollDetails.options[2]);
        

    }

};
const mutations={
    add_poll:(state,poll) => state.poll.push(poll)


};
const getters={

};

export default {
    state,
    actions,
    mutations,
    getters
}