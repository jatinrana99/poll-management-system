<template>
    <section>
        <section class="forms">
            <form class="login" @submit.prevent="login">
        <h2>Login Form</h2>

        <div>
        <label for="uername">User Name</label>
        <input type="Text" placeholder="User Name" class="char" id="uername" v-model="username">
    
        <!-- password -->
        <label for="password">Password</label>
        <input type="password" placeholder="password" class="char" id="password" v-model="password">

        <!-- role
        <label for="role">Role</label>
        <input type="text" placeholder="Role" class="char" id="role" v-model="role"> -->
        <input type="submit" value="Log In" id="button"/>
        </div>

    </form>
      </section>
    </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:`LoginPage`,
    data(){
        return{
            username:"",
            password:"",
            // role:""
        }
    },
    methods:{
        ...mapActions(["loginUser"]),
        login(){
            this.loginUser({
                username:this.username,
                password:this.password,
                // role:this.role
            })
        }
    }
}
</script>


<style scoped>


section{
/* align-items: center; */
margin-left: 250%;
margin-top: 50%;
}

h2{

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

/* black/solid/600 */

color: #232A29;

}

.forms {
width: 196px;
height: 493px;
background-color: #FFFFFF;
border-radius: 24px;
margin-top: 200%;
}

.char{
width: 340px;
height: 64px;
background: rgba(54, 65, 64, 0.04);
border: 2px solid rgba(54, 65, 64, 0.16);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
border-radius: 12px;
margin-top: 6px;
margin-bottom: 8px;
}

#button{
width: 340px;
height: 64px;
background: linear-gradient(88.84deg, #00AC99 0%, #00E0B0 100%);
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
border-radius: 12px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 20px;
text-align: center;
color: #FFFFFF;
margin-top: 12px;
}

.login{
text-align: center;
width: 396px;
height: 493px;
border: 13px solid;
padding-top: 60px;
border-radius: 24px;
background-color: #FFFFFF;

}


label{


font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 15px;
color: rgba(54, 65, 64, 0.64);
}


</style>