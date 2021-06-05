<template>
  <div id="details" class="container ">
    <h2>{{cargoCompany.name}}</h2>
  </div>
</template>

<script>
export default {
    props:['id'],
   
    computed:{
        cargoCompanies(){
            return this.$store.getters.cargoCompanies
        },
        cargoCompany(){
            return this.cargoCompanies.find(company => company.id==this.id);
        }
    },

    created(){
        console.log(this.cargoCompanies,this.cargoCompany);
    }
};
</script>

<style></style>
