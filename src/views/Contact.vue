<template>
  <div
    id="contact"
    class="d-flex flex-column align-items-center py-3 px-3 container mb-4 "
  >
    <div class="my-3">
      <base-title text1="Contact" text2="us"></base-title>
    </div>
    <div class="form w-75 my-5 row px-5">
      <div class="col-md-4 d-flex flex-column justify-content-around ">
        <div>
          <p>
            <strong
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              libero alias .</strong
            >
          </p>
        </div>
        <div class="d-flex justify-content-around ">
          <a href=""> <i class="fab fa-facebook"></i></a>
          <a href=""> <i class="fab fa-instagram"></i></a>
          <a href=""> <i class="fab fa-twitter"></i></a>
        </div>
      </div>
      <div class="col-md-8 d-flex flex-column p-5 align-items-center justify-content-around ">
          <input type="text" class="w-100 mt-4" name="" placeholder="Ad" id="" >
          <input type="text" class="w-100 my-3" placeholder="Email" name="" id="">
          <textarea name="" id="" placeholder="Mesajınz" rows="6" class="w-100"></textarea>
          <base-button name='Göndər' class="mt-5"></base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  border: 1px solid #f8f8f8;
  background: #f5f4f4;
  height: vh;
}

a{
    text-decoration: none;
    color: #2F2F30;
    font-size: 1.5rem;
}

input,textarea{
    border: none;
    border-bottom: 1px solid #2F2F30;
    background: transparent;
    outline: none;
    padding: 10px 0px;
}
</style>
