import axios from "axios"

const state={
    users:[],

};
const getters={
    getAllUsers: state => state.users,
    

};
const actions={

    async getUsers({commit}){
        const res = await axios.get("http://65.108.77.50:3031/list_users");
        commit ("setUsers" , res.data);
        console.log("Hello from users" , res.data);
    },

    async addUser({commit},payload){
        const res = await axios.post(`http://65.108.77.50:3031/add_user?username=${payload.username}&password=${payload.password}&role=${payload.role}`,payload.users);
        commit ("newUser" ,res.data);
        console.warn("Hello from added user" , res.data);
    },

    async loginUser(context,loginDetails){
        const res = await axios.post(`http://65.108.77.50:3031/login?username=${loginDetails.username}&password=${loginDetails.password}`);
        context.commit("userLogin" , res.data);
        console.warn("Hello from login", res.data);
    }
};
const mutations={
    setUsers:(state,users) => (state.users = users),
    newUser:(state,users) => state.users.push(users)
};

export default {
    state,
    getters,
    actions,
    mutations
}