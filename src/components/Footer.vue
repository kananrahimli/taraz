<template>
  <div id="footer" >
      <div class="container d-flex justify-content-between">
          <ul class="list-unstyled d-flex ">
              <li class="mr-4"><router-link to="/login">Taraz c2021</router-link></li>
              <li><router-link to="/contact">Contact us</router-link></li>
              <li class="mx-4"><router-link to="/about">Aboust us</router-link></li>
              <li><router-link to="/privacy">Privacy policy</router-link></li>
          </ul>

          <div class="icons">
              <a href=""><i class="fab fa-facebook-f"></i></a>
              <a href="" class="mx-5"><i class="fab fa-instagram"></i></a>
              <a href=""><i class="fab fa-twitter"></i></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 2F2F30 */

li a{
    color:rgba(47, 47, 48, 0.6) ;
    text-decoration: none;
}

i{
    color: #2F2F30;
}

/* #footer{
    position: fixed;
    width: 100%;
    bottom: 0px;
} */
</style>