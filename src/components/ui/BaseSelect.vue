<template>
<div class="position-relative">
   <select name="" id=""  class="mx-4" @click="change" @input="select" >
    <slot></slot>
  </select>
  <i class="fas fa-caret-down" ref="direction"></i>
</div>
 


</template>

<script>
export default {
   props:['value'],
   data(){
     return{
       up:false
     }
   },
   methods:{
     change(){
       this.up=!this.up
       if(this.up){
         this.$refs.direction.style.transform='rotate(180deg)'
       }else{
         this.$refs.direction.style.transform='rotate(-360deg)'
       }
     },
     select(){
      this.up=true
     }
   }
};
</script>

<style scoped>
select {
  padding-right: 100px;
  border: none;
  padding-top: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid;
  outline: none;
  appearance: none;
  color: #969799;
  position: relative;
  cursor: pointer;
}
div{
  position: relative;
}
i{
  position: absolute;
  right: 25px;
  top: 10px;
  color: #969799;
  transition: 0.1s;
}
</style>
