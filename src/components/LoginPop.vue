<template>
    <div class="popup">
        <div class="innerPop">
            <LoginPage></LoginPage>
            <button class="close" v-on:click="ToggleLoginPopup()">X</button>
        </div>
    </div>
</template>

<script>
import LoginPage from './LoginPage.vue'
export default {
    name:`Pop`,
    components:{
        LoginPage
    },
    props:['ToggleLoginPopup']
}
</script>

<style scoped>

.popup{
        position: absolute;
        right: 0px;
        z-index: 99;
        display: flex;
        /* flex-direction: column; */
        height: 500px;
        width: 400px;
        width: 1605px;
        height: 1358px;
        left: 0px;
        top: 0px;

/* black/transparent/300 */

        background-color: rgba(54, 65, 64, 0.64);
    }
    
    .close{
    background-color:rgba(222, 80, 113, 0.04);
    height: 30px;
    border-radius: 50%;
    /* margin-top: 414px; */
    margin-left: 210px;
    padding-right: 6px;
    /* padding-left: 6px; */
    padding-left: 325%;
    }

</style>