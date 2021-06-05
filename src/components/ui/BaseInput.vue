<template>
<div>
 <input :type="type" :placeholder="placeholder"  :ref="type" :class="{isLarge:!large,isNormal:large}" v-model="value" @input="selectTo">
  <i class="fas fa-eye" v-if="type=='password' && !isHide" @click="togglePassword" ></i>
  <i class="fas fa-eye-slash"  v-if="type=='password' && isHide"  @click="togglePassword"></i>
  <i class="fas fa-map-marker-alt" v-if="!isHide && !defaultPlus && large"></i>
  <i class="fas fa-plus" v-if="isHide && plus" @click="addLocation"></i>
  <i class="fas fa-plus" v-if="defaultPlus" ></i>
</div>
  
</template>

<script>
export default {
    props:{
        placeholder:{
            type:String,
            required:true
        },
        type:{
            type:String,
            required:true
        },
        large:{
            type:Boolean,
            required:false,
            default:false
        },
        plus:{
            type:Boolean,
            required:false,
            default:false
        },
         defaultPlus:{
            type:Boolean,
            required:false,
            default:false
        }
    },
    emits:['addLocation'],
    data(){
        return{
            isHide:null,
            value:''
        }
    },
    methods:{
        togglePassword(){
            this.isHide=!this.isHide
            if(this.$refs.password.type=='password'){
                this.$refs.password.type='text'
            }else{
                this.$refs.password.type="password"
            }
        },
        selectTo(){
            if(this.value==''&& this.large){
                this.isHide=false
            }else{
                this.isHide=true

            }
        },
        addLocation(){
            this.$emit('addLocation')
        }
    }
}

</script>

<style scoped>

.isLarge{
    width: 300px;
    border: transparent;
    border-bottom: 1.5px solid  #2F2F30;
    margin: 12px 0px;
}
.isNormal{
    border: transparent;
    border-bottom: 1.5px solid  #969799;
    margin: 8px 0px!important;
}
input:focus{
    border: transparent;
    border-bottom: 1.5px solid  #2F2F30 !important;
    outline: none;
}

input::placeholder{
    color: #969799;
}

div{
    position: relative;
}

i{
    position: absolute;
    right: 0px;
    bottom: 20px;
    cursor: pointer;
      color: #969799;
      font-size: 12px;
}
</style>