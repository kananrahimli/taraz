<template>
  <div id="login" class="d-flex  justify-content-center align-items-center flex-column mb-4 ">
    <div class="d-flex flex-column">
      <h1 class="font-weight-bold mb-0" >Hesaba daxil ol</h1>
      <span class="mx-auto font-weight-bolder enter">VƏ YA<router-link to="/signup" class="text-decoration-none ml-1">QEYDİYYATDAN KEÇ</router-link></span>
    </div>

    <div class="inputs d-flex flex-column mt-4">
        <base-input placeholder="Email" type="email"></base-input>
        <base-input placeholder="Şifrə" type="password" class="mb-2"></base-input>
        <base-button class="mt-4 mb-1 login" name="Daxil ol" @click="login" enter   ></base-button>
    </div>
    <div class="d-flex ">
        <base-check-box  class="mr-5 pr-4" name="save" text="Yadda saxla" ></base-check-box>
        <div class="ml-5 pl-4" ><a href="#">Şifrəni unutmusunuz?</a> </div>
    </div>
    <p class="mt-4">Bu hesablarınızla davam edin</p>
    <div class="d-flex " >
        <a href="" class="mx-3"><i class="fab fa-facebook  "></i></a>
        <a href="" class="mx-3"><i class="fab fa-google   text-white p-2 " ></i></a>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    login(){
      this.$router.push('/main/cargo')
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
    font-size: 60px;
}
span {
  font-size: 12px;
}

span a{
    color: #FFE758;
     font-size: 12px;
}

a{
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;
    color: #2F2F30;
}


#login{
    padding: 22px 0px;
    
}

i.fa-google{
  border-radius: 50%;
  background: #2F2F30;
  font-size: 30px;
}
i.fa-facebook{
  font-size: 48px;
    cursor: pointer;
    text-decoration: none;
    color: #2F2F30;
}




</style>
