<template>
  <div id="cargo">
    <base-card class="d-flex flex-column mb-5 ">
      <div class="d-flex  flex-wrap justify-content-around">
        <base-select>
          <option selected disabled hidden>Sifariş ediləcək ölkə</option>
          <option v-for="country in fromCountries" :key="country">{{
            country
          }}</option>
        </base-select>
        <base-select>
          <option selected disabled hidden>Çatdırılacaq ölkə</option>
          <option v-for="country in toCountries" :key="country">{{
            country
          }}</option>
        </base-select>

        <!-- Selecet for Kq or ton or qram -->
        <div class="selectKq ">
          <input
            type="text"
            placeholder="Çəki"
            v-model="inputVal"
            @input="writeWeight"
          />
          <select
            @change="select"
            ref="select"
            @click="change"
            class="selectForKq"
          >
            <option selected disabled hidden>{{ result }} kq</option>
            <option v-for="measure in measures" :key="measure"
              >{{ result }} {{ measure }}</option
            >
          </select>
          <i class="fas fa-caret-down" ref="direction"></i>
        </div>
        <!-- Selecet for Kq or ton or qram -->

        <base-button name="Hesabla" @click="hesabla"></base-button>
      </div>

      <!-- Filter for type example maye or paket or xususi or tecili -->
      <div class="d-flex container pt-4 ">
        <div class="mr-5">
          <input type="checkbox" id="maye" v-model="maye" @change="setMaye" />
          <label for="maye" class="isSlim">Maye tərkibli</label>
        </div>

        <div class="mr-5 ml-4">
          <input
            type="checkbox"
            id="paket"
            v-model="paket"
            @change="setPaket"
          />
          <label for="paket" class="isSlim">Paket birləşdirmə</label>
        </div>
        <div class="mr-5 ml-4">
          <input
            type="checkbox"
            id="xususi"
            v-model="xususi"
            @change="setXususi"
          />
          <label for="xususi" class="isSlim">Xüsusi daşıma</label>
        </div>
        <div class="mr-5 ml-4">
          <input
            type="checkbox"
            id="sekil"
            v-model="sekil"
            @change="setSekil"
          />
          <label for="sekil" class="isSlim">Məhsulun şəklini çəkmək</label>
        </div>
        <div class="mr-5 ml-4">
          <input
            type="checkbox"
            id="tecili"
            v-model="tecili"
            @change="setTecili"
          />
          <label for="tecili" class="isSlim">Təcili sifariş</label>
        </div>
      </div>
      <!-- Filter for type example maye or paket or xususi or tecili -->
    </base-card>

    <!-- Filter result in table -->
    <div v-if="clicked" class="d-flex  flex-column align-items-center  position-relative">
      <div class="bg-secondary d-flex w-100 justify-content-center pt-3 px-2 pr-4">
        <ul class=" list-unstyled d-flex  second-table justify-content-between ">
          <li >Daşıma şirkəti</li>
          <li >Qiymət</li>
          <li >Keyfiyyət</li>
          <li>Tariflər</li>
        </ul>
      </div>

      <div class="d-flex flex-column align-items-center w-100"  v-for="(cargocompany, index) in filteredCompanies"
        :key="cargocompany">
        <ul
        class="list-unstyled d-flex justify-content-between  second-table data px-2 "
       
        v-if="index < a"
      >
        <li  class="w-25">
          <img
            :src="require('../assets/' + cargocompany.logo + '.png')"
            alt=""
          />
          <a href="" class="ml-2"> {{ cargocompany.site }}</a>
        </li>
        <li  class="w-25 pl-5" >
          {{ cargocompany.moneyValue }}
        </li>
        <li class="w-25 pl-3" >
          <i class="fas fa-star"></i> <strong>{{ cargocompany.star }}</strong
          >/5
        </li>
        <li  >
          <base-button
            second
            name="Tariflər"
            link
            :to="'/' + cargocompany.id"
          ></base-button>
        </li>
      </ul>
      <button
        @click="a = 2 ? (a = filteredCompanies.length) : (a = 2)"
        v-if="a !== filteredCompanies.length"
      >
        Ardina bax
      </button>
      </div>
      
    </div>
    <!-- Filter result in table -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      fromCountries: ["Türkiyə", "ABŞ", "Çin", "Almaniya"],
      toCountries: ["Türkiyə", "ABŞ", "Çin", "Almaniya"],
      filteredCompanies: null,
      maye: false,
      paket: false,
      xususi: false,
      sekil: false,
      tecili: false,
      clicked: false,
      a: 2,

      inputVal: null,
      measures: ["kq", "ton", "qr"],
      up: false,
      deyer: null,
      result: null,
    };
  },
  computed: {
    cargoCompanies() {
      return this.$store.getters.cargoCompanies;
    },
  },
  methods: {
    setMaye() {
      this.$store.dispatch("setMaye", this.maye);
      this.clicked = false;
      this.$store.state.isShown = false;
    },
    setPaket() {
      this.$store.dispatch("setPaket", this.paket);
      this.clicked = false;
      this.$store.state.isShown = false;
    },
    setXususi() {
      this.$store.dispatch("setXususi", this.xususi);
      this.clicked = false;
      this.$store.state.isShown = false;
    },
    setSekil() {
      this.$store.dispatch("setSekil", this.sekil);
      this.clicked = false;
      this.$store.state.isShown = false;
    },
    setTecili() {
      this.$store.dispatch("setTecili", this.tecili);
      this.clicked = false;
      this.$store.state.isShown = false;
    },

    hesabla() {
      this.filteredCompanies = this.cargoCompanies.filter((company) => {
        if (this.maye && company.type.includes("maye")) {
          this.clicked = true;
          this.$store.state.isShown = true;
          return true;
        }
        if (this.paket && company.type.includes("paket")) {
          this.clicked = true;
          this.$store.state.isShown = true;
          return true;
        }
        if (this.xususi && company.type.includes("xüsusi")) {
          this.clicked = true;
          this.$store.state.isShown = true;
          return true;
        }
        if (this.sekil && company.type.includes("şəkil")) {
          this.clicked = true;
          this.$store.state.isShown = true;
          return true;
        }
        if (this.tecili && company.type.includes("təcili")) {
          this.clicked = true;
          this.$store.state.isShown = true;
          return true;
        }

        this.result = this.deyer;
        if (this.deyer && this.deyer.length >= 2) {
          this.$refs.select.style.width = "80px";
          this.$refs.select.style.paddingLeft = "20px";
          this.inputVal = "";
        } else if (this.deyer && this.deyer.length < 2) {
          this.$refs.select.style.paddingLeft = "5px";
          this.inputVal = "";
        } else {
          alert("Cekini daxil edin");
        }
      });
    },

    writeWeight() {
      this.$refs.select.style.width = "48px";
      // this.$refs.select.style.paddingLeft = "18px";
      this.deyer = this.inputVal;
      this.result = "";
    },
    change() {
      this.up = !this.up;
      if (this.up) {
        this.$refs.direction.style.transform = "rotate(180deg)";
      } else {
        this.$refs.direction.style.transform = "rotate(-360deg)";
      }
    },
    select() {
      this.up = true;
    },
  },
};
</script>

<style scoped>
.fa-star {
  color: #ffe758;
}
#cargo {
  margin-bottom: 100px;
}

/* Style for Check box and Label */
.isSlim {
  color: #2f2f30;
  font-size: 12px;
  text-indent: 8px;
  cursor: pointer;
}
input[type="checkbox"] {
  appearance: none;
  height: 12px;
  width: 12px;
  background: none;
  margin-top: 2px;
  border: 1px solid;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
}

input[type="checkbox"]::after {
  content: "";
  position: absolute;
  height: 8px;
  width: 8px;
  background: #ffe758;
  left: 1px;
  top: 1px;
  display: none;
}
input[type="checkbox"]:checked::after {
  display: block;
}

/* Style for selecet for kq or ton */
.selectKq {
  border: none;
  border-bottom: 1px solid #969799;
  padding-top: 8px;
  padding-bottom: 4px;
  align-self: baseline;
  position: relative;
}
.selectForKq {
  width: 48px;
  border: none;
  padding-left: 10px;
  outline: none;
  appearance: none;
  color: #969799;
  position: relative;
  cursor: pointer;
  background: transparent;
}

input[type="text"] {
  color: #969799;
  border: none;
  width: 120px;
  position: relative;
  outline: none;
}

.selectKq::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 24px;
  background: #969799;
  right: 35%;
  top: 10px;
  z-index: 100;
}
.fa-caret-down {
  color: #969799;
  transition: 0.1s;
}

/* Style for filter result intable */
img {
  width: 25%;
}
.bg-secondary {
  background: #f8f8f8 !important;
}
button {
  position: absolute;
  top: 100%;
  right: 25px;
  color: #2f2f30;
  font-size: 12px;
  border: none;
  background: none;
  font-weight: 800;
  
}

.data {
 box-shadow: 1px 4px 8px 0px rgba(0, 0, 0, 0.1);
  margin: 8px 0px;
  padding: 20px 0px;
  align-items: center;
}

.second-table {
  width: 90%;
}
/* ul li:not(:first-child){
  padding-left: 180px;
} */
</style>
