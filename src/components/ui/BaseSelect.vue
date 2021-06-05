<template>
      <select name="" id=""  class="mx-4">
    <slot></slot>
  </select>


</template>

<script>
export default {
   props:['value']
};
</script>

<style scoped>
select {
  padding-right: 100px;
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid;
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
</style>
