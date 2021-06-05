<template>
   <div class="d-flex justify-content-around flex-wrap">
      <base-input type="text" placeholder="Hardan" large class="mx-4"></base-input>
       <base-input type="text" placeholder="Haraya" large class="mx-4" plus ></base-input>
        <base-select class="base mx-4">
         <option selected >Ekonom</option>
        <option v-for="taxiType in taxiTypes" :key="taxiType">{{ taxiType }}</option>
        </base-select>
      <base-button class="base" name="Hesabla"></base-button>
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
      ]
    }
  },
  
}
</script>

<style scoped>
    .base{
    align-self: baseline;
  }
</style>