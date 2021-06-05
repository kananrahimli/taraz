<template>
  <div class="d-flex flex-column  " id="cargo">
    <div class="d-flex container flex-wrap">
      <base-select>
        <option selected>Sifariş ediləcək ölkə</option>
        <option v-for="country in fromCountries" :key="country">{{
          country
        }}</option>
      </base-select>
      <base-select>
        <option selected disabled hidden>Çatdırılacaq ölkə</option>
        <option v-for="country in toCountries" :key="country">{{
          country
        }}</option>
      </base-select>
      <base-select-kq text="Çəki"  >
      </base-select-kq>
      <base-button name="Hesabla" @click="hesabla"></base-button>
    </div>

    <div class="d-flex container py-5 px-5">
      <div class="mr-5">
    <input type="checkbox"  id="maye" v-model="maye" @change="setMaye" />
    <label for="maye" class="isSlim">Maye tərkibli</label>
  </div>
  
    <div>
    <input type="checkbox"  id="paket" v-model="paket"  @change="setPaket" />
    <label for="paket" class="isSlim">Paket birləşdirmə</label>
  </div>
    <div class="mx-5">
    <input type="checkbox"  id="xususi" v-model="xususi"  @change="setXususi" />
    <label for="xususi" class="isSlim">Xüsusi daşıma</label>
  </div>
    <div>
    <input type="checkbox"  id="sekil" v-model="sekil"  @change="setSekil" />
    <label for="sekil" class="isSlim">Məhsulun şəklini çəkmək</label>
  </div>
    <div class="ml-5">
    <input type="checkbox"  id="tecili" v-model="tecili"  @change="setTecili" />
    <label for="tecili" class="isSlim">Təcili sifariş</label>
  </div>

      
    </div>

    <div class="base" v-if="clicked">
      <table class="table table-borderless">
        <thead>
          <tr class="bg-secondary font-weight- text-center">
            <th >Daşıma şirkəti</th>
            <th >Qiymət</th>
            <th >Keyfiyyət</th>
            <th >Tariflər</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cargocompany,index) in filteredCompanies" :key="cargocompany" class="text-center ">
            <td  v-if="index<a"  class="w-25"><img :src="require('../assets/'+cargocompany.logo+'.png')" alt="" > <a href="" class="ml-2">    {{cargocompany.site}}</a> </td>
            <td  v-if="index<a">{{cargocompany.moneyValue}}</td>
            <td  v-if="index<a">{{cargocompany.star}}</td>
            <td  v-if="index<a"><base-button second name="Tariflər" link :to="'/'+cargocompany.id"></base-button></td>
          </tr>
        </tbody>
        
      </table>
      <button @click="a=2?a=filteredCompanies.length:a=2" v-if="a!==filteredCompanies.length">Ardina bax</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromCountries: ["Aze", "Turk", "georgo"],
      toCountries: ["Aze", "Turk", "georgo"],
      clicked:false,
      filteredCompanies:null,
      maye:false,
      paket:false,
      xususi:false,
      sekil:false,
      tecili:false,
      a:2,

     

    };
  },
  computed:{
    cargoCompanies(){
      return this.$store.getters.cargoCompanies
    },
    
  },
  methods:{
    setMaye(){
      this.$store.dispatch('setMaye',this.maye)
      this.clicked=false
      this.$store.state.isShown=false
    },
    setPaket(){
      this.$store.dispatch('setPaket',this.paket)
      this.clicked=false
       this.$store.state.isShown=false
    },
    setXususi(){
      this.$store.dispatch('setXususi',this.xususi)
      this.clicked=false
       this.$store.state.isShown=false
    },
    setSekil(){
      this.$store.dispatch('setSekil',this.sekil)
      this.clicked=false
       this.$store.state.isShown=false
    },
    setTecili(){
      this.$store.dispatch('setTecili',this.tecili)
      this.clicked=false
       this.$store.state.isShown=false
    },

    hesabla(){
       this.filteredCompanies=this.cargoCompanies.filter((company)=>{
        if(this.maye && company.type.includes('maye')){
          this.clicked=true
          this.$store.state.isShown=true
          return true;
        }
        if(this.paket && company.type.includes('paket')){
          this.clicked=true
          this.$store.state.isShown=true
          return true;
        }
        if(this.xususi && company.type.includes('xüsusi')){
          this.clicked=true
          this.$store.state.isShown=true
          return true;
        }
        if(this.sekil && company.type.includes('şəkil')){
          this.clicked=true
          this.$store.state.isShown=true
          return true;
        }
        if(this.tecili && company.type.includes('təcili')){
          this.clicked=true
          this.$store.state.isShown=true
          return true;
        }
      })
      console.log(this.filteredCompanies);
    },
   
   
  }
};
</script>

<style scoped>
  #cargo{
    margin-bottom: 120px;
  }
  .bg-secondary{
    background: #f8f8f8 !important;
  }
  button{
    color: #2f2f30;
    font-size: 12px;
    border: none;
    background: none;
    float: right;
    margin-right: 60px;
    font-weight: 800;
  }

    img{
      width: 10%;
    }

 .isSlim {
  color: #2f2f30;
  font-size: 12px;
  text-indent: 8px;
  cursor: pointer;
}
input[type="checkbox"] {
  appearance: none;
  height: 12px;
  width: 12px;
  background: none;
  border: 1px solid;
  vertical-align:middle;
  position: relative;
  cursor: pointer;
}

input[type="checkbox"]::after {
  content: "";
  position: absolute;
  height: 8px;
  width: 8px;
  background: #ffe758;
  left: 1px;
  top: 1px;
  display: none;
}
input[type="checkbox"]:checked::after {
  display: block;
}
  
</style>
