<template>
  <div  id="cargo" >
    <base-card class="d-flex flex-column  mb-5 "  >
       <div class="d-flex container flex-wrap justify-content-around">
      <base-select>
        <option selected disabled hidden>Sifariş ediləcək ölkə</option>
        <option v-for="country in fromCountries" :key="country">{{
          country
        }}</option>
      </base-select>
      <base-select >
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
        <select @change="select" ref="select" @click="change" class="selectForKq"  >
          <option  selected disabled hidden>{{result}} kq</option>
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
    <div class="d-flex container pt-5 pl-2  ">
      <div class="mx-4">
        <input type="checkbox" id="maye" v-model="maye" @change="setMaye" />
        <label for="maye" class="isSlim">Maye tərkibli</label>
      </div>

      <div class="mx-4">
        <input type="checkbox" id="paket" v-model="paket" @change="setPaket" />
        <label for="paket" class="isSlim">Paket birləşdirmə</label>
      </div>
      <div class="mx-4">
        <input
          type="checkbox"
          id="xususi"
          v-model="xususi"
          @change="setXususi"
        />
        <label for="xususi" class="isSlim">Xüsusi daşıma</label>
      </div>
      <div class="mx-4">
        <input type="checkbox" id="sekil" v-model="sekil" @change="setSekil" />
        <label for="sekil" class="isSlim">Məhsulun şəklini çəkmək</label>
      </div>
      <div class="mx-4">
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
    <div class="base" v-if="clicked">
      <table class="table table-borderless">
        <thead>
          <tr class="bg-secondary font-weight- text-center">
            <th>Daşıma şirkəti</th>
            <th>Qiymət</th>
            <th>Keyfiyyət</th>
            <th>Tariflər</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(cargocompany, index) in filteredCompanies"
            :key="cargocompany"
            class="text-center "
          >
            <td v-if="index < a" class="w-25">
              <img
                :src="require('../assets/' + cargocompany.logo + '.png')"
                alt=""
              />
              <a href="" class="ml-2"> {{ cargocompany.site }}</a>
            </td>
            <td v-if="index < a">{{ cargocompany.moneyValue }}</td>
            <td v-if="index < a">
              <i class="fas fa-star"></i>
              <strong>{{ cargocompany.star }}</strong
              >/5
            </td>
            <td v-if="index < a">
              <base-button
                second
                name="Tariflər"
                link
                :to="'/' + cargocompany.id"
              ></base-button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        @click="a = 2 ? (a = filteredCompanies.length) : (a = 2)"
        v-if="a !== filteredCompanies.length"
      >
        Ardina bax
      </button>
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
      up:false,
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
        this.$refs.select.style.width = "80px";
        this.$refs.select.style.paddingLeft = "20px";
        this.inputVal = "";
      });
    },

    writeWeight() {
      this.$refs.select.style.width = "48px";
      this.$refs.select.style.paddingLeft = "18px";
      this.deyer = this.inputVal;
      this.result = "";
    },
     change(){
       this.up=!this.up
       if(this.up){
         this.$refs.direction.style.transform='rotate(180deg)'
       }else{
         this.$refs.direction.style.transform='rotate(-360deg)'
       }
     },
     select(){
      this.up=true
     }
  },
};
</script>

<style scoped>
.fa-star {
  color: #ffe758;
}
#cargo {
  margin-bottom: 120px;
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
  padding: 4px 0px;
  position: relative;
}
.selectForKq {
  width: 48px;
  border: none;
  padding: 4px 0px;
  padding-left: 12px;
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
  width: 100px;
  position: relative;
  outline: none;
}

.selectKq::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 30px;
  background: #969799;
  right: 40%;
  top: 10px;
  z-index: 100;
}
.fa-caret-down{
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
  color: #2f2f30;
  font-size: 12px;
  border: none;
  background: none;
  float: right;
  margin-right: 60px;
  font-weight: 800;
}
</style>
