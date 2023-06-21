import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { mapActions } from 'vuex'
// import actions from '../store/modules/user'
// import axios from "axios"

// console.log(localStorage.getItem());

// function loginAlert(to,from){

// }

// console.log(loginUser())


function loginAlert(to, from, next)
{
 var isAuthenticated= false;
//this is just an example. You will have to find a better or 
// centralised way to handle you localstorage data handling 
if(localStorage.getItem('status'))
  isAuthenticated == true;
 else
  isAuthenticated== false; if(isAuthenticated) 
 {
  next(); // allow to enter route
 } 
 else
 {
  next('/about'); // go to '/login';
 }
}


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path:'/poll',
    name: 'poll',
    beforeEnter: loginAlert,
    component: () => import('../components/Poll.vue'),
    // beforeEnter: (to, from , next) => {
    //   // mapActions(['loginUser'])
    //   console.log(to)
    //   console.log(from);
    //   console.log(localStorage.getItem("status"),"Hello from local");

    //   // localStorage.getItem("status");
    //   // if(localStorage.getItem("status")=== true){


    //   // }
    //   // console.log(loginUser);
    //   // console.log(actions);
    //   // console.log(res.data);
    //   // console.log(localStorage.setItem('loginUser',res.data),"Hello")
    //   next();

    // //   async (context,loginDetails) =>{
    // //     const res = await axios.post(`http://65.108.77.50:3031/login?username=${loginDetails.username}&password=${loginDetails.password}`);
    // //     context.commit("userLogin" , res.data);
    // //     console.warn("Hello from login", res.data);
    // //     // return res
    // // }
    // }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
