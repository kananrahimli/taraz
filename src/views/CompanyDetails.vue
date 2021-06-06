<template>
  <div id="details" class="container d-flex flex-column  py-5">
    <div class="d-flex justify-content-between mb-2">
      <div>
        <img
          :src="require('../assets/' + cargoCompany.logo + '.png')"
          alt=""
          class="img-fluid"
          width="50"
        />
      </div>
      <div>
        <h5>{{ cargoCompany.name }}</h5>
      </div>
      <div>
        <a href="">http://{{ cargoCompany.site }}</a>
      </div>
      <div class="">
        <fieldset class="raiting">
          <input type="radio" name="raiting" value="5" id="star5" />
          <label for="star5" class="full" title="Awsome"></label>

          <input type="radio" name="raiting" value="4.5" id="star4.5" />
          <label for="star4.5" class="half " title="perfect"></label>

          <input type="radio" name="raiting" value="4" id="star4" />
          <label for="star4" class="full " title="very good"></label >

          <input type="radio" name="raiting" value="3.5" id="star3.5" />
          <label for="star3.5" class="half " title="good"></label>

          <input type="radio" name="raiting" value="3" id="star3" />
          <label for="star3" class="full " title="normal"></label>

          <input type="radio" name="raiting" value="2.5" id="star2.5" />
          <label for="star2.5" class="half " title="not bad"></label>

          <input type="radio" name="raiting" value="2" id="star2" />
          <label for="star2" class="full " title="bad"></label>

          <input type="radio" name="raiting" value="1.5" id="star1.5" />
          <label for="star1.5" class="half " title="very bad"></label>
          <input type="radio" name="raiting" value="1" id="star1" />
          <label for="star1" class="full "></label>

          <input type="radio" name="raiting" value="0.5" id="star0.5" />
          <label for="star0.5" class="half "></label>
        </fieldset>
      </div>
    </div>
    <ul class="list-unstyled d-flex mt-5 justify-content-between">
      <li>
        <router-link :to="'/' + id + '/turkey'">Türkiyə</router-link>
      </li>
      <li>
        <router-link :to="'/' + id + '/america'">ABŞ</router-link>
      </li>
      <li>
        <router-link :to="'/' + id + '/china'">Çin</router-link>
      </li>
      <li>
        <router-link :to="'/' + id + '/germany'">Almaniya</router-link>
      </li>
    </ul>
    <ul class="d-flex flex-wrap list-unstyled justify-content-start">
      <li v-if="maye" class="mr-3">
        <base-check-box
          text="Tərkibində maye var"
          appearanceNone
          isSlim
        ></base-check-box>
      </li>
      <li v-if="paket" class="mr-3">
        <base-check-box
          text="Paket birləşdirmə mövcuddur"
          appearanceNone
          isSlim
        ></base-check-box>
      </li>
      <li v-if="xususi" class="mr-3">
        <base-check-box
          text="Xüsusi daşımadır"
          appearanceNone
          isSlim
        ></base-check-box>
      </li>
      <li v-if="sekil" class="mr-3">
        <base-check-box
          text="Məhsulun şəklini çəkmək"
          appearanceNone
          isSlim
        ></base-check-box>
      </li>
      <li v-if="tecili">
        <base-check-box text="Təcili" appearanceNone isSlim></base-check-box>
      </li>
    </ul>
    <div class="pb-5 pt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],

  computed: {
    cargoCompanies() {
      return this.$store.getters.cargoCompanies;
    },
    cargoCompany() {
      return this.cargoCompanies.find((company) => company.id == this.id);
    },
    maye() {
      return this.$store.state.maye;
    },
    paket() {
      return this.$store.state.paket;
    },
    xususi() {
      return this.$store.state.xususi;
    },
    sekil() {
      return this.$store.state.sekil;
    },
    tecili() {
      return this.$store.state.tecili;
    },
  },

  created() {
    console.log(this.$store.state.maye);
  },
};
</script>

<style scoped>
/* @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7/css/all.min.css'); */
#details {
  padding: 0px 140px;
}
h5 {
  color: #969799;
}

a {
  text-decoration: none;
  position: relative;
}
a::after {
  content: "";
  position: absolute;
  left: 0;
  top: 25px;
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
  top: 25px;
  width: 100%;
  height: 3px;
  background-color: #ffe758;
  z-index: 100;
  transition: 0.3s;
}
a.active::after {
  width: 100%;
}
ul li a {
  color: #6c6d6d;
  font-size: 20px;
  font-weight: bold;
}

.raiting > input {
  display: none;
}

.raiting{
  float: left;
}

.raiting > label::before {
  content: "\";
  font-family: "Font Awesome\ 5 Free";
  font-size: 1rem;
  margin: 0px 4px;
  display: inline-block ;
  cursor: pointer;
}

.raiting > .half::before {
  content: "\";
  font-family: "Font Awesome\ 5 Free";
  position: absolute;
}

.raiting > label {
  float: right;
  color: #969799;
  cursor: pointer;
  display: inline-block;
}

.raiting > input:checked ~ label,
.raiting:not(:checked) > label:hover,
.raiting:not(:checked) > label:hover ~ label {
  color: #ffe758;
  
}

.raiting > input:checked + label:hover,
.raiting > input:checked ~ label:hover,
.raiting > label:hover ~ input:checked ~ label,
.raiting > input:checked ~ label:hover ~ label {
  color: #ffe758;
  
}
</style>
