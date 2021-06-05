<template>
  <div id="details" class="container d-flex flex-column  py-5">
    <div class="d-flex justify-content-between mb-2">
        <div ><img :src="require('../assets/'+cargoCompany.logo+'.png')" alt="" class="img-fluid" width="50"></div>
        <div><h5>{{cargoCompany.name}}</h5></div>
        <div><a href="">http://{{cargoCompany.site}}</a></div>
        <div>Stars</div>
    </div>
     <ul class="list-unstyled d-flex mt-5 justify-content-between">
        <li >
          <router-link :to="'/'+id+'/turkey'" >Türkiyə</router-link>
        </li>
        <li>
          <router-link :to="'/'+id+'/america'">ABŞ</router-link>
        </li>
        <li >
          <router-link :to="'/'+id+'/china'" >Çin</router-link>
        </li>
        <li>
          <router-link :to="'/'+id+'/germany'" >Almaniya</router-link>
        </li>
      </ul>
      <ul class="d-flex flex-wrap list-unstyled justify-content-start">
          <li v-if="maye" class="mr-3"><base-check-box text="Tərkibində maye var" appearance isSlim></base-check-box></li>
          <li  v-if="paket" class="mr-3"><base-check-box text="Paket birləşdirmə mövcuddur" appearance isSlim></base-check-box></li>
          <li  v-if="xususi" class="mr-3"><base-check-box text="Xüsusi daşımadır" appearance isSlim></base-check-box></li>
          <li  v-if="sekil" class="mr-3"><base-check-box text="Məhsulun şəklini çəkmək" appearance isSlim></base-check-box></li>
          <li v-if="tecili"><base-check-box text="Təcili" appearance isSlim></base-check-box></li>
      </ul>
      <div class="pb-5 pt-4">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    props:['id'],
   
    computed:{
        cargoCompanies(){
            return this.$store.getters.cargoCompanies
        },
        cargoCompany(){
            return this.cargoCompanies.find(company => company.id==this.id);
        },
        maye(){
            return this.$store.state.maye
        },
         paket(){
            return this.$store.state.paket
        },
         xususi(){
            return this.$store.state.xususi
        },
         sekil(){
            return this.$store.state.sekil
        },
         tecili(){
            return this.$store.state.tecili
        }
    },

    created(){
        console.log(this.$store.state.maye);
        
    }
};
</script>

<style scoped>
    #details{
        padding: 0px 140px;
    }
    h5{
        color: #969799;
    }

    a {
  text-decoration: none;
  position: relative;
}
a::after {
  content: "";
  position: absolute;
  left: 0;
  top: 25px;
  width: 0%;
  height: 3px;
  background-color: #ffe758;
  z-index: 100;
  transition: 0.3s;
}
a:hover:after {
  content: "";
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  height: 3px;
  background-color: #ffe758;
  z-index: 100;
  transition: 0.3s;
}
a.active::after {
  width: 100%;
}
ul li a {
  color: #6c6d6d;
  font-size: 20px;
  font-weight: bold;
}
</style>
