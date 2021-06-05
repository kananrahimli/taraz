<template>
  <div id="login" class="d-flex  justify-content-center align-items-center flex-column mb-4 py-5">
    <div class="d-flex flex-column">
      <h1 class="font-weight-bold mb-0" >Hesaba daxil ol</h1>
      <span class="mx-auto font-weight-bolder">Və Ya<router-link to="/signup" class="text-decoration-none ml-1">Qeydiyyatdan keç</router-link></span>
    </div>

    <div class="inputs d-flex flex-column mt-4">
        <base-input placeholder="Email" type="email"></base-input>
        <base-input placeholder="Şifrə" type="password"></base-input>
        <base-button class="mt-3 mb-2 login" name="Daxil ol" @click="login" link to="/main/cargo" ></base-button>
    </div>
    <div class="d-flex justify-content-between mt-1 ">
        <base-check-box  class="mr-3" name="save" text="Yadda saxla"></base-check-box>
        <div class="ml-4" ><a href="#">Şifrəni unutmusunuz?</a> </div>
    </div>
    <p class="mt-4">Bu hesablarinizla davam edin</p>
    <div class="d-flex " >
        
        <a href="" class="mx-2"><i class="fab fa-facebook fa-2x"></i></a>
        <a href="" class="mx-2"><i class="fab fa-google-plus fa-2x"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    login(){

    }
  },
   created() {
    if (
      this.$router.currentRoute._value.path == "/login" ||
      this.$router.currentRoute._value.path == "/signup" ||
      this.$router.currentRoute._value.path == "/"
    ) {
      this.$store.state.isShown = true;
    }
  },
};
</script>

<style scoped>

h1{
    font-size: 50px;
}
span {
  font-size: 15px;
}

span a{
    color: #FFE758;
}

a{
    font-size: 15px;
    cursor: pointer;
    text-decoration: none;
    color: #2F2F30;
}


#login{
    padding: 20px 0px;
    
}




</style>
