<template>
<div>
  <router-link
    v-if="link"
    :class="{ normalLink: isDisabled, disabledLink: !isDisabled, second: second }"
    :disabled="!isDisabled"
    :to="to"
  >
    {{ name }}</router-link
  >
  <button
    v-if="!link && !enter"
    :class="{ normal: isDisabled, disabled: !isDisabled, second: second }"
    :disabled="!isDisabled"
  >
    {{ name }}
  </button>

  <button
    v-if="enter"
    :class="{ normalLink: isDisabled, disabledLink: !isDisabled }"
    :disabled="!isDisabled"
  >
    {{ name }}
  </button>
</div>
  
  
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
    },
    isDisabled: { type: Boolean, required: false, default: true },
    second: {
      type: Boolean,
      required: false,
      default: false,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    enter:{
      type: Boolean,
      required: false,
      default: false,
    }
  },
};
</script>

<style scoped>
/* .disabled {
  background: #959597;
  color: #ffff;
  border: 1px solid;
  padding: 12px 80px;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
} */
.disabledLink {
  background: #959597;
  color: #ffff;
  border: 1px solid;
  padding: 0px 180px;
  font-size: 12px;
  font-weight: 600;
  height: 41px;
  text-align: center;
  text-decoration: none;
}
.normal {
  background: #2f2f30;
  color: #ffff;
  border: 1px solid;
  padding: 12px 80px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
}
.normalLink {
  background: #2f2f30;
  color: #ffff;
  border: 1px solid;
  height: 41px;
  padding: 0px 180px;
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
}
.second {
  padding: 2px 12px;
  background: none;
  border: 1px solid #ffe758;
  font-size: 12px;
  border-radius: 20px;
  color: black;
  text-decoration: none;
}
</style>
