<template>
  <div class="mx-4">
    <span>{{ text }}</span>
    <select name="" id="" @change="select" ref="select">
      <slot></slot>
    </select>
  </div>
</template>

<script>
export default {
  props: ["value", "text"],
  methods:{
    select(){
      this.$refs.select.style.paddingLeft="2px";
    }
  }
};
</script>

<style scoped>
div{
  border: none;
  border-bottom: 1px solid #969799;
  padding: 4px 0px;
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
span {
  color: #969799;
  position: relative;
  margin-right: 96px;
}

/* span::after{
    content: '';
    position: absolute;
    width: 500%;
    height: 1px;
    background: #969799;
    left: 0;
    top: 29px;
    z-index: 100;
} */
span::before{
    content: '';
    position: absolute;
    width: 1px;
    height: 30px;
    background: #969799;
    right: -250%;
    top: 0px;
    z-index: 100;
}
</style>
