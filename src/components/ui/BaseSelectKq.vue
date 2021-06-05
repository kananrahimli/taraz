<template>
  <div class="mx-4">
    <input
      type="text"
      :placeholder="text"
      v-model="inputVal"
      @input="writeWeight"
    />
    <select @change="select" ref="select">
      <option  selected disabled hidden> kq</option>
      <option v-for="measure in measures" :key="measure">{{result}} {{ measure }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: [ "text"],
  emits: ["hesabla"],
  methods: {
    writeWeight() {
      this.deyer=this.inputVal
      this.result=''
    },
    select(){
      this.result= this.deyer
      this.inputVal=''
      this.$refs.select.style.width='80px'
      this.$refs.select.style.paddingLeft='20px'
      console.log(this.$refs.select.style);
    }
  },
  data() {
    return {
      inputVal: null,
      measures: ['kq','ton','qr'],
      selectedMesaure:null,
      deyer:null,
      result:null
    };
  },
};
</script>

<style scoped>
div {
  border: none;
  border-bottom: 1px solid #969799;
  padding: 4px 0px;
  position: relative;
}
select {
  width: 48px;
  border: none;
  padding: 4px 0px;
  padding-left: 12px;
  outline: none;
  appearance: none;
  background: url("../../assets/svg/down.svg");
  background-repeat: no-repeat;
  background-position: right 2px bottom 12px;
  background-size: 12px;
  color: #969799;
  position: relative;
  cursor: pointer;
}

input {
  color: #969799;
  border: none;
  width: 100px;
  position: relative;
  outline: none;
}

div::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 30px;
  background: #969799;
  right: 40%;
  top: 10px;
  z-index: 100;
}
</style>
