import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login'
import Signup from '../views/Signup.vue'
import Main from '../views/Main.vue'
import CompanyDetails from '../views/CompanyDetails.vue'
import Cargo from '../components/Cargo.vue'
import Taxi from '../components/Taxi.vue'
import Plane from '../components/Plane.vue'
import Hotel from '../components/Hotel.vue'
const routes = [
  {
    path:'',redirect:'/login'
  },
  {
    path:'/login',component:Login
  },
  {
    path:'/signup',component:Signup
  },
  {
    path:'/:id',component:CompanyDetails,props:true
  },
  {
    path:'/main',component:Main,
    children:[
      {path:'',redirect:Cargo},
      {path:'cargo',component:Cargo},
      {path:'taxi',component:Taxi},
      {path:'plane',component:Plane},
      {path:'hotel',component:Hotel}
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass:'active'
})


export default router
