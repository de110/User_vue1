
import Vue from "vue"
import Router from "vue-router"
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import SignUp from "../components/SignUp.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
      // beforeEnter: requireAuth,
    },
    
  ],
})