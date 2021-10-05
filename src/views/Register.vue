<template>
    <div class="form-wrap">
        <form class="login">
            <p class="login-register">
                Don't have an account?
                <router-link class="router-link" :to = "{ name: 'Register' }">Register</router-link>
            </p>
            <h2>Login to FireBlog</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <email class="icon" />
                </div>
                <div class="input">
                    <input type="password" placeholder="Password" v-model="password">
                    <password class="icon" />
                </div>
            </div>
            <router-link class="forgot-password" :to = "{ name: 'ForgotPassword' }">Forgot your Password?</router-link>
            <button>Sign In</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg"
import password from "../assets/Icons/lock-alt-solid.svg"
import user from "../assets/Icons/user-alt-light.svg"

export default {
    name: 'Register',
    components: {
        email,
        password,
        user,
    }


}
</script>

<style>

</style>