<template>
<div class="position-relative">
   <select name="" id=""   @click="change" @change="select" :class="{short:short,large:!short}">
    <slot></slot>
  </select>
  <i class="fas fa-caret-down" ref="direction"></i>
</div>
 


</template>

<script>
export default {
   props:{
     value:{
       type:String,
       required:false
     },
      short:{
       type:Boolean,
       required:false,
       default:false
     }
   },
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
.short{
   width: 200px;
  border: none;
  padding-top: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  outline: none;
  appearance: none;
  color: #969799;
  background: transparent;
  position: relative;
  cursor: pointer;
} 
.large{
   width: 280px;
  border: none;
  padding-top: 8px;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  outline: none;
  appearance: none;
  color: #969799;
  background: transparent;
  position: relative;
  cursor: pointer;
}
div{
  position: relative;
}
i{
  position: absolute;
  right: 0px;
  top: 10px;
  color: #969799;
  transition: 0.1s;
}
</style>
