import axios from "axios"
import router from "../../router";
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

    async loginUser({commit},loginDetails){
        const res = await axios.post(`http://65.108.77.50:3031/login?username=${loginDetails.username}&password=${loginDetails.password}`);
        // const rest = res.data
        commit("userLogin" , res.data);
        console.log("Hello from login", res.data.token);
        localStorage.setItem("status",res.data.token);
        // router.push('/poll');
        if(loginDetails.username=="admin" && loginDetails.password=="admin"){
            router.push('/poll');
        }
        else{
            router.push('/pollUser');
        }
    },


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