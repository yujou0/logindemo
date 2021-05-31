<template>
  <form @submit.prevent="handleSubmit">
        <error v-if="error" error="error" />
    <h3>Sign up</h3>
    <div class="form-group">
      <label>First Name</label>
      <input type="text" class="form-control" v-model="first_name" placeholder="First Name" />
    </div>
    <div class="form-group">
      <label>Last Name</label>
      <input type="text" class="form-control" v-model="last_name" placeholder="Last Name" />
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="email" placeholder="Email" />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="password" placeholder="Password" />
    </div>
    <div class="form-group">
      <label>Confirm Password</label>
      <input
        type="password"
        class="form-control"
        placeholder="Confirm Password"
        v-model="password_confirm"
      />
    </div>

    <button class="btn btn-primary btn-block">Sign up</button>
  </form>
</template>

<script>
import axios from 'axios'
import Error from './Error.vue'

export default {
  name: "Register",
    components: {
        Error
    },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      error:""
    }
  },
  methods: {
    async handleSubmit() {
        try {
        await axios.post('register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm
        });

        this.$router.push('/login');
        }catch (e) {
            this.error = 'Error occurred';
        }
    },
  },
};
</script>