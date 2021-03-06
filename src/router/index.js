import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login'
import Signup from '../views/Signup.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Privacy from '../views/Privacy.vue'
import Main from '../views/Main.vue'
import CompanyDetails from '../views/CompanyDetails.vue'
import Cargo from '../components/Cargo.vue'
import Taxi from '../components/Taxi.vue'
import Plane from '../components/Plane.vue'
import Hotel from '../components/Hotel.vue'
import CargoTurkey from '../components/CargoTurkey.vue'
import CargoAmerica from '../components/CargoAmerica.vue'
import CargoChina from '../components/CargoChina.vue'
import CargoGermany from '../components/CargoGermany.vue'
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
    path:'/about',component:About
  },
  {
    path:'/contact',component:Contact
  },
  {
    path:'/privacy',component:Privacy
  },
  {
    path:'/:id',component:CompanyDetails,props:true,children:[
      {path:'',redirect:{name:'turkey'}},
      {path:'turkey',component:CargoTurkey,name:'turkey'},
      {path:'china',component:CargoChina},
      {path:'america',component:CargoAmerica},
      {path:'germany',component:CargoGermany},

    ]
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
