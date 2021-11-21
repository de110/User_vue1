<template>
  <div>
    <h1>offco</h1>
    <h2>로그인 유지<input type="checkbox" /></h2>
    <input
      class="form"
      type="text"
      id="username"
      placeholder="아이디"
      v-model="credentials.username"
    /><br />
    <input
      class="form"
      type="password"
      id="password"
      placeholder="비밀번호"
      v-model="credentials.password"
    /><br />
    <button class="bt_login_form" @click="login">로그인</button><br />
    <button class="bt_signup_form" @click="signup">회원가입</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: function() {
    return {
      credentials: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    login: function() {
      axios({
        method: "post",
        url: "http://localhost:8080/authenticate",
        data: this.credentials
      })
        .then(res => {
          // 로컬스토리지에 토큰 저장
          localStorage.setItem("jwt", res.data.token);
          // 로그인 성공 시 Home으로 이동
          this.$router.push({ name: "Home" });
        })
        .catch(err => {
          console.log(err);
        });
    },
    signup: function() {
      axios({
        method: "post",
        url: "http://localhost:8080/signup",
        data: this.credentials
      })
        .then(res => {
          // 로컬스토리지에 토큰 저장
          localStorage.setItem("jwt", res.data.token);
          // 회원가입 창으로 이동
          this.$router.push({ name: "SignUp" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kite+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap");
body {
  font-size: 10px;
  background-color: rgb(254, 249, 239);
  text-align: center;
}
h1 {
  display: inline-block;
  font-family: "Kite One", sans-serif;
  font-weight: lighter;
  color: rgb(255, 134, 94);
  font-size: 9em;
  width: 62.5vw;
  height: 22.8vh;
  margin-top: 0.45em;
  margin-bottom: 0;
}
h2 {
  margin-left: auto;
  margin-right: 2em;
  font-weight: lighter;
  font-family: "Gothic A1", sans-serif;
  font-size: 1.3em;
  width: 28.1vw;
  height: 2.63vh;
  margin-top: 2.31em;
}
.form {
  display: inline-block;
  width: 82vw;
  height: 6.1vh;
  margin-left: 0;
  margin-bottom: 1.15em;
  border: 1px solid rgba(162, 210, 255, 100);
  border-radius: 15px;
}
.bt_login_form {
  font-family: "Gothic A1", sans-serif;
  font-size: 2.6em;
  width: 82vw;
  height: 9vh;
  border: rgb(28, 31, 34);
  border-radius: 15px;
  background-color: rgb(162, 210, 255);
}
.bt_signup_form {
  font-family: "Gothic A1", sans-serif;
  font-size: 2.6em;
  width: 82vw;
  height: 9vh;
  border: 1px solid rgb(255, 134, 94);
  border-radius: 15px;
  background-color: white;
}
</style>
