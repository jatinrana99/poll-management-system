import axios from "axios"
// import router from "../../router";
const state={
    users:[],
    listUsers:[],
};
const getters={
    getAllUsers: state => state.listUsers,
    

};
const actions={

    async getUsers({commit}){
        const res = await axios.get("http://65.108.77.50:3031/list_users");
        commit ("setUsers" , res.data);
        console.log("Hello from users" , res.data);
    },

    async addUser({commit},signObj){
        console.log(`http://65.108.77.50:3031/add_user?username=${signObj.signObj.username}&password=${signObj.signObj.password}&role=${signObj.signObj.role}`,signObj.users)
        const res = await axios.post(`http://65.108.77.50:3031/add_user?username=${signObj.signObj.username}&password=${signObj.signObj.password}&role=${signObj.signObj.role}`,signObj.users);
        commit ("newUser" ,res.data);
        console.warn("Hello from added user" , res.data);
    },

    async loginUser({commit},loginObj){
        // console.log("Hello from login user" ,`http://65.108.77.50:3031/login?username=${loginObj.loginObj.username}&password=${loginObj.loginObj.password}` );
        const res = await axios.post(`http://65.108.77.50:3031/login?username=${loginObj.loginObj.username}&password=${loginObj.loginObj.password}`);
        // const rest = res.data
        commit("userLogin" , res.data);
        console.log("Hello from login", res.data);
        localStorage.setItem("status",res.data.token);
        console.log("Hello from loginUser", loginObj.data);

        // router.push('/poll');

        // if(loginObj.loginObj.role == "admin"){
        //     router.push('/poll');
        // }
        // else if (loginObj.loginObj.role == "user"){
        //     router.push('/pollUser');
        // }
    },


};
const mutations={
    setUsers:(state,listUsers) => (state.listUsers = listUsers),
    newUser:(state,users) => state.users.push(users)
};

export default {
    state,
    getters,
    actions,
    mutations
}