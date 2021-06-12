<template>
  <div>
    <input type="checkbox" :name="name" :id="name" v-model="value" @change="accept" :class="{appearance:!appearanceNone}"/>
    <label :for="name" :class="{isWeight:!isWeight,isSlim:isWeight}">{{text}}</label>
  </div>
</template>

<script>
export default {
    emits:['accept'],
    props:{
      name:{
        type:String,
        requried:true
      },
      text:{
        type:String,
        requried:true
      },
      isWeight:{
        type:Boolean,
        requried:false,
        default:false
      },
      appearanceNone:{
        type:Boolean,
        requried:false,
        default:false
      }
    },
    data(){
        return{
            value:null
        }
    },
    methods:{
        accept(){
            this.$emit('accept',this.value)
            console.log(this.value);
        }
    }
};
</script>

<style scoped>
.isWeight {
  color: #969799;
  font-size: 16px;
  text-indent: 8px;
  cursor: pointer;
}
/* .isSlim {
  color: #2f2f30;
  font-size: 16px;
  text-indent: 8px;
  cursor: pointer;
} */
input[type="checkbox"] {
  appearance: none;
  height: 12px;
  width: 12px;
  background: none;
  border: 1px solid;
  margin-bottom: 2px;
  vertical-align:middle;
  position: relative;
  cursor: pointer;
}

.appearance::after {
  content: "";
  position: absolute;
  height: 8px;
  width: 8px;
  background: #ffe758;
  left: 1px;
  top: 1px;
  display: none;
}
.appearance:checked::after {
  display: block;
}
</style>
