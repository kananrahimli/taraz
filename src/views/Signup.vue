<template>
  <div
    id="signup"
    class="d-flex  justify-content-center align-items-center flex-column py-5 mb-4"
  >
    <div class="d-flex flex-column">
      <h1 class=" mb-2">Hesab yarat</h1>
    </div>

    <div class="inputs d-flex flex-column mt-4">
      <base-input placeholder="Ad Soyad" type="text"></base-input>
      <base-input placeholder="Email" type="email"></base-input>
      <base-input placeholder="Şifrə" type="password"></base-input>
      <base-input placeholder="Şifrə təkrarı" type="password"></base-input>
      <base-check-box
        class="mr-3"
        name="save"
        text="Şərtləri oxudum və qəbul edirəm"
        @accept="agree"
        
      ></base-check-box>
      <base-button  
        @click="signUp"
        class="mt-3 mb-2"
        name="Daxil ol"
        :isDisabled="disable"
        enter
      ></base-button>
    </div>
    <p class="mt-5">Bu hesablarinizla davam edin</p>
    <div class="d-flex ">
      <a href="" class="mx-3"><i class="fab fa-facebook fa-3x"></i></a>
      <a href="" class="mx-3"><i class="fab fa-google   text-white p-2 " ></i></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disable: null,
    };
  },

  methods: {
    agree(val) {
      this.disable = val;
    },
    signUp(){
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
h1 {
  font-size: 60px;
  font-weight: 600;
}
span {
  font-size: 15px;
}

span a {
  color: #ffe758;
}

a {
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
  color: #2f2f30;
}

i.fa-google{
  border-radius: 50%;
  background: #2F2F30;
  font-size: 28px;
}
</style>
