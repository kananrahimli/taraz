<template>
   <div id="taxi" class="d-flex flex-column " ref="taxi">
    <div class="d-flex justify-content-around flex-wrap">
      <base-input type="text" placeholder="Hardan" large class="mr-4" ></base-input>
       <base-input type="text" placeholder="Haraya" large class="mx-4" plus @addLocation="addNewLocation"></base-input>
        <base-select class="base mx-4">
         <option selected >Ekonom</option>
        <option v-for="taxiType in taxiTypes" :key="taxiType">{{ taxiType }}</option>
        </base-select>
      <base-button class="base" name="Hesabla" @click="hesabla"> </base-button>
    </div>

    <div class="base d-flex flex-wrap justify-contet-start w-100 px-4">
      <base-input type="text" v-for="a in time" :key="a" placeholder="Ünvan əlavə et" large  defaultPlus class="addLocation  my-2"></base-input>
    </div>
    
    <div  v-if="clicked">
      <table class="table table-borderless mt-4">
        <thead>
          <tr class="bg-secondary font-weight- text-center">
            <th >Taksi şirkəti</th>
            <th >Əlaqə</th>
            <th >Qiymət</th>
            <th >Keyfiyyət</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(taxi,index) in taxies" :key="taxi" class="text-center ">
            <td  v-if="index<a"  class="w-25"><img :src="require('../assets/'+taxi.logo+'.png')" alt="" ></td>
            <td  v-if="index<a">{{taxi.phone}}</td>
            <td  v-if="index<a">{{taxi.moneyValue}}</td>
            <td  v-if="index<a"><strong><i class="fas fa-star"></i> {{taxi.star}}</strong>/5</td>
          </tr>
        </tbody>
        
      </table>
      <button  @click="a=2?a=taxies.length:a=2" v-if="a!==taxies.length" >Ardina bax</button>
     
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      taxiTypes:[
        'Konfort',
        'Minivan',
        'Transfer'
      ],
      a:2,
      time:0,
      clicked:null
    }
  },
  computed:{
    taxies(){
      return this.$store.getters.taxies
    }
  },
  methods:{
    addNewLocation(){
      this.time++
      if(this.time>3){
        this.time=3
      }
    },
    hesabla(){
      this.clicked=true
       this.$store.state.isShown=true
       this.$refs.taxi.style.marginBottom='120px'
    }
  }
}
</script>

<style scoped>
.fa-star{
    color: #ffe758;
  }
  .base{
    align-self: baseline;
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

  .addLocation:nth-child(even){
    margin-right: 8% !important;
    margin-left: 8% !important;
  }
 
 #taxi{
   margin-bottom: 240px;
 }
  
</style>