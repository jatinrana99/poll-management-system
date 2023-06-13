<template>
     <section id="main">
        <div>Login Form</div>
        <div>
        <span>User Name</span>
        <input type="text" placeholder="User Name">
        </div>

        <!-- email -->

        <div>
        <span>User Id</span>
        <input type="email" placeholder="user Id">
        </div>
        <!-- password -->
        <div>
        <span>Password</span>
        <input type="password" placeholder="Password">
        </div>

        <div>
        <span>Conform Password</span>
        <input type="password" placeholder="Password">
        </div>
        <div>
            <button>Sign In</button>
        </div>
       
    </section>
</template>

<script>
export default {
    name:`SignInPage`
}
</script>

<style scoped>
#main{
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}

</style>