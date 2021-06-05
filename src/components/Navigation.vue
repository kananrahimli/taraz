<template>
  <div class="nav py-4">
    <div class="container d-flex flex-wrap justify-content-between">
      <div class=""><a href="" v-if=" isShown"> Logo</a></div>
      <div class="d-flex flex-wrap ">
        <div class="">
          <div><p>Bakı:02/06/2021</p></div>
        </div>
        <div class="mx-md-5">
          <span><i class="fas fa-dollar-sign"></i> 0.282</span>
          <span class="mx-3"><i class="fas fa-dollar-sign"></i> 1.700</span>
          <span><i class="fas fa-dollar-sign"></i> 1.9979</span>
        </div>
        <div class="">
          <span class=""><i class="far fa-bell"></i></span>
          <span class="ml-3"><i class="far fa-user"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isShown() {
      return this.$store.getters.isShown;
    },
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
}
.fa-bell,
.fa-user {
  font-size: 25px;
}

a {
  color: #2f2f30;
  text-decoration: none;
  cursor: pointer;
}
</style>
