<template>
  <div class="nav py-4">
    <div class="container d-flex flex-wrap justify-content-between">
      <div class=""><a href="" v-if=" isShown"><img src="../assets/tarazlogo.png" alt="" width="100"></a></div>
      <div class="d-flex flex-wrap ">
        <div class="">
          <div><p>Bakı: 0{{day}}/0{{month}}/{{year}}</p></div>
        </div>
        <div class="mx-md-5">
          <span><i class="fas fa-lira-sign"></i>  0.282</span>
          <span class="mx-3"><i class="fas fa-dollar-sign"></i>  1.700</span>
          <span><i class="fas fa-euro-sign"></i>  1.9979</span>
        </div>
        <div class="">
          <span class="position-relative"><i class="far fa-bell"></i>
             <div class="font-weight-bold notification-count" >4</div>
          </span>
          <span class="ml-3"><i class="far fa-user"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      day:'',
      month:'',
      year:''
    }
  },
  computed: {
    isShown() {
      return this.$store.getters.isShown;
    },
  },

  created(){
    this.day=new Date().getDate()
    this.month=new Date().getMonth()+1
    this.year=new Date().getFullYear()
  }
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

.notification-count{
  background-color: #ffe758;
  border-radius: 50%;
  display: inline-block;
  padding: 0px 2px;
  border: 1px solid #ffe758;
  font-size: 10px;
  position: absolute;
  left: 12px;
  top: -10px;
}
</style>
