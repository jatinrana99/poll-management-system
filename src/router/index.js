import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
// import { mapActions } from 'vuex'
// import actions from '../store/modules/user'
// import axios from "axios"

// console.log(localStorage.getItem());

// function loginAlert(to,from){

// }

// console.log(loginUser())

// let open = localStorage.getItem('status');


// function loginAlert(to, from, next)
// {
//  var isAuthenticated= false;
// //this is just an example. You will have to find a better or 
// // centralised way to handle you localstorage data handling 
// if(localStorage.getItem('status'))
//   isAuthenticated == true;
//  else
//   isAuthenticated== false; if(isAuthenticated) 
//  {
//   next(); // allow to enter route
//  } 
//  else
//  {
//   next('/about'); // go to '/login';
//  }
// }

// function loginAlert(to,next){
//   let open = 10;
//   open = localStorage.getItem('status');
//   console.log(typeof open)

//   console.log();
//   console.log(to.open);
//     // console.log(from);
//     console.log();


//   if(open === 10){
//     console.log("hello");
//     alert('Please login first')
//     next();
//   }else {
//    next('/poll');
//   }
// }

// let open = localStorage.getItem('status');

// function loginAlert()
// {
//  var isAuthenticated= false;
//  if(localStorage.getItem('status'))
//   isAuthenticated = true;
//  else
//   isAuthenticated= false;if(isAuthenticated) {
//   return '/poll' // allow to enter route
//  } else{
//   alert('Please login first');
//   return '/' // go to '/login';
//  }
// }




const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/about',
    name: 'about',
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    component:AboutView
    
  },
  {
    path:'/poll',
    name: 'poll',
    component: () => import('../components/Poll.vue'),
    meta: {auth:true}

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
  },
  {
  path:'/pollUser',
  name: 'Users',
  component: () => import('../components/Users'),
  meta: {auth:true}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {

  let open = localStorage.getItem('status');
  console.log(open);
    if(to.meta.auth && !open){
        // console.log(open,"Hello");
        // console.log(routes[2].meta)
        // routes[2].meta=true;

        return (
          {name:'home'}
        )
    }
})


export default router
