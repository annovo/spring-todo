<template>
<div>
  <loading :visible="isVisible"/>
  <form @submit.prevent="performLogin" action="post">
      <p>
        <input
          id="username"
          v-model="username"
          type="text"
          name="username"
          placeholder="Username"
          required
          autofocus
        >
      </p>
      <p>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          placeholder="Password"
          required
        >
      </p>
      <button type="submit">
        Sign in
      </button>
    </form>
</div>
</template>

<script>
import Loading from './Loading.vue'

export default {
  components: {
    Loading
  },
  data () {
    return {
      isVisible: false,
      username: '',
      password: ''
    }
  },
  methods: {
    async performLogin () {
      console.log(this.isVisible)
      this.isVisible = true
      //setTimeout(() => this.isVisible = false, 5000);
      if (await this.$services.login.performLogin(this.username, this.password)) {
        this.$router.push('todo')
      } else {
        this.username = ''
        this.password = ''
      }
      this.isVisible = false
    }
  }
}
</script>
<style>
form {
  width: 200px;
  margin: auto;
  text-align: center;
}

form input {
  width: 100%;
  border: none;
  border-bottom: 1px black solid;
  background: none;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 20px;
  outline: none;
}

form button {
  width: 100%;
  height: 50px;
  border: none;
  background-color: #f0c808;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  border-radius: 10px;
}
</style>
