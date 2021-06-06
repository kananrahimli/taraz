import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      isShown: true,

      cargoCompanies:[
        {id:1,logo:'logo',name:'Starex',site:'starex.az',moneyValue:'$6',star:'3.5',type:['maye','paket','xüsusi','şəkil','təcili']},
        {id:2,logo:'logo',name:'Starex',site:'starex.az',moneyValue:'$6',star:'3.5',type:['maye','xüsusi','şəkil']},
        {id:3,logo:'logo',name:'Starex',site:'starex.az',moneyValue:'$6',star:'3.5',type:['paket','xüsusi']},
        {id:4,logo:'logo',name:'Starex',site:'starex.az',moneyValue:'$6',star:'3.5', type:['xüsusi','maye','şəkil']},
        {id:5,logo:'logo',name:'Starex',site:'starex.az',moneyValue:'$6',star:'3.5', type:['təcili','maye','şəkil']},
        {id:6,logo:'logo',name:'Starex',site:'starex.az',moneyValue:'$6',star:'3.5', type:['şəkil']}
      ],

      maye:null,
      paket:null,
      xususi:null,
      sekil:null,
      tecili:null,

      taxies:[
        {id:1,logo:'logo',phone:'*189',moneyValue:'2 azn',star:'3.5'},
        {id:1,logo:'logo',phone:'*9000',moneyValue:'2 azn',star:'3.5'},
        {id:1,logo:'logo',phone:'*9111',moneyValue:'2 azn',star:'3.5'},
        {id:1,logo:'logo',phone:'*2020',moneyValue:'2 azn',star:'3.5'},
        {id:1,logo:'logo',phone:'189',moneyValue:'2 azn',star:'3.5'},
        {id:1,logo:'logo',phone:'189',moneyValue:'2 azn',star:'3.5'},
        {id:1,logo:'logo',phone:'189',moneyValue:'2 azn',star:'3.5'},
      ]
    };
  },
  mutations: {
    hideLogo(state) {
      state.isShown=false
    },
    setMaye(state,payload){
      state.maye=payload
    },
    setPaket(state,payload){
      state.paket=payload
    },
    setXususi(state,payload){
      state.xususi=payload
    },
    setSekil(state,payload){
      state.sekil=payload
    },
    setTecili(state,payload){
      state.tecili=payload
    }
  },
  actions: {
    hideLogo(context) {
      context.commit("hideLogo");
    },
    setMaye(context,payload){
      context.commit('setMaye',payload)
    },
    setPaket(context,payload){
      context.commit('setPaket',payload)
    },
    setXususi(context,payload){
      context.commit('setXususi',payload)
    },
    setSekil(context,payload){
      context.commit('setSekil',payload)
    },
    setTecili(context,payload){
      context.commit('setTecili',payload)
    }
  },
  getters: {
    isShown(state) {
      return state.isShown;
    },
  cargoCompanies(state){
      return state.cargoCompanies
    },
    taxies(state){
      return state.taxies
    }
  },
});
