<template>
    <form @submit.prevent="handleSubmit">
        <error v-if="error" error="error" />
        <h3>登入</h3>
        <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="請輸入帳號"/>
        </div>
        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="login" placeholder="請輸入密碼">
        </div>

        <button class="btn btn-primary btn-block">Login</button>

        <!-- <p class="forgot-password text-right">
            <router-link to="forgot">Forgot password?</router-link>
        </p> -->
    </form>
</template>

<script>
// import axios from 'axios'
import Error from './Error.vue'

export default {
    name: 'Login',
    components: {
        Error
    },
    data() {
        return {
            email: '',
            password:'',
            error:''
        }
    },
    methods:{
        async handleSubmit() {
            if( this.email == 'abc83327@gmail.com' && this.login == '12345'){
            // try{
            // const response = await axios.post('login',{
            //     email: this.email,
            //     password: this.password
            // });

            // localStorage.setItem('token', response.data.token);
            // this.$store.dispatch('user',response.data.user);
            this.$router.push('/');}
            else{
                alert('帳號或密碼錯誤')
            }
            // }catch (e){
            //     this.error = 'Invalid username/password'
            // }
        }
    }
}
</script>