<template>
  <div>
    <h1>Login</h1>
    <div>
      <label for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="credentials.username" />
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input type="password" id="password" v-model="credentials.password" />
    </div>
    <div>
      <!--관리자 설정 창 임의 생성-->
      <label for="auth">관리자 설정: </label>
      <input type="auth" id="auth" v-model="credentials.auth" />
    </div>
    <button @click="signup">회원가입</button>
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
    signup: function() {
      axios({
        method: "post",
        url: "http://localhost:8080/signup",
        data: this.credentials
      })
        .then(res => {
          // 로컬스토리지에 토큰 저장
          localStorage.setItem("jwt", res.data.token);
          //가입 버튼 클릭 시 유저 정보 DB 저장 및 로그인 창으로 이동
          this.$router.push({ name: "Login" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
