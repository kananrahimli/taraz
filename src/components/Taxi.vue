<template>
   <div id="taxi" class="d-flex flex-column ">
    <div class="d-flex justify-content-around flex-wrap">
      <base-input type="text" placeholder="Hardan" large ></base-input>
       <base-input type="text" placeholder="Haraya" large class="mx-4" plus @addLocation="addNewLocation"></base-input>
        <base-select class="base mx-4">
         <option selected >Ekonom</option>
        <option v-for="taxiType in taxiTypes" :key="taxiType">{{ taxiType }}</option>
        </base-select>
      <base-button class="base" name="Hesabla"></base-button>
    </div>

    <div class="base d-flex flex-wrap justify-contet-start w-100 px-4">
      <base-input type="text" v-for="a in time" :key="a" placeholder="Ünvan əlavə et" large  defaultPlus class="addLocation  my-2"></base-input>
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
      time:0
    }
  },
  methods:{
    addNewLocation(){
      this.time++
      if(this.time>3){
        this.time=3
      }
      console.log('jdididjdij');
    }
  }
}
</script>

<style scoped>
  .base{
    align-self: baseline;
  }

  .addLocation:nth-child(even){
    margin-right: 8% !important;
    margin-left: 8% !important;
  }
 
 #taxi{
   margin-bottom: 180px;
 }
  
</style>