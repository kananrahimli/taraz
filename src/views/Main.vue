<template>
  <div id="main" class="d-flex flex-column align-items-center ">
    <div class="logo mt-4 mb-3" v-if="!isShown">
      <img src="../assets/tarazlogo.png" alt="" width="100">
    </div>
    <ul class="list-unstyled d-flex mt-3  w-100">
      <li class="mr-5">
        <router-link to="/main/cargo" @click="change">Karqo</router-link>
      </li>
      <li class="mx-5">
        <router-link to="/main/taxi" @click="change">Taksi</router-link>
      </li>
      <li class="mx-5">
        <router-link to="/main/plane" @click="change">Uçuş</router-link>
      </li>
      <li class="ml-5">
        <router-link to="/main/hotel" @click="change">Otel</router-link>
      </li>
    </ul>
    <div class="py-4 w-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isShown() {
      return this.$store.getters.isShown;
    },
  },
  methods: {
    change() {
      this.$store.state.isShown = false;
    },
  },
  created() {
    if (
      this.$router.currentRoute._value.path != "/login" ||
      this.$router.currentRoute._value.path != "/signup" ||
      this.$router.currentRoute._value.path != "/"
    ) {
      this.$store.state.isShown = false;
    }
    console.log(this.$router.currentRoute._value.path);
    if (this.$router.currentRoute._value.path == "/main/cargo") {
      this.$store.state.maye = false;
      this.$store.state.paket = false;
      this.$store.state.xususi = false;
      this.$store.state.sekil = false;
      this.$store.state.tecili = false;
    }
  },
};
</script>

<style scoped>
#main{
  padding-right: 80px;
   padding-left: 80px;
}
a {
  text-decoration: none;
  position: relative;
}
a::after {
  content: "";
  position: absolute;
  left: 0;
  top: 34px;
  width: 0%;
  height: 3px;
  background-color: #ffe758;
  z-index: 100;
  transition: 0.3s;
}
a:hover:after {
  content: "";
  position: absolute;
  left: 0;
  top: 34px;
  width: 200%;
  height: 3px;
  background-color: #ffe758;
  z-index: 100;
  transition: 0.3s;
}
a.active::after {
  width: 200%;
}
ul {
  align-self: flex-start;
  position: relative;
}
ul::after {
  content: "";
  position: absolute;
  left: 0;
  top: 35px;
  width: 100%;
  height: 1px;
  background-color: #969799;
}
ul li a {
  color: #6c6d6d;
  font-size: 18px;
  font-weight: 500;
}
</style>
