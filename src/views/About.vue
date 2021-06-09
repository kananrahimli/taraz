<template>
  <div id="about" class="d-flex flex-column align-items-center container py-5">
    <base-title text1="About" text2="us"></base-title>
    <div class="mt-5 px-5 w-75">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iure
        fugiat rem! Molestiae beatae id eius nesciunt tempora dolor, mollitia
        laborum accusamus sit distinctio sequi omnis atque aliquam corrupti!
        Reprehenderit?
      </p>
    </div>
    <div class="d-flex w-100 justify-content-around mt-5 px-5">
        <div class=""><strong><h2 class="font-weight-bold"><router-link to="/contact">Contact</router-link></h2></strong>
                <base-card><img src="../assets/about1.png" alt=""></base-card>
        </div>
        <div class="mr-5"><strong><h2 class="font-weight-bold"><router-link to="/privacy" >Privacy policy</router-link></h2></strong>
           <base-card><img src="../assets/about2.png" alt=""></base-card>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#about{
    margin-bottom: 140px;
}

a{
    text-decoration: none;
    color: #2F2F30;
}


</style>
