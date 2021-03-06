import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      isShown: true,

      cargoCompanies:[
        {id:1,logo:'starex',name:'Starex',site:'starex.az',moneyValue:'$6',star:'3.5',type:['maye','paket','xüsusi','şəkil','təcili']},
        {id:2,logo:'mover',name:'Mover',site:'mover.az',moneyValue:'$3',star:'3.5',type:['maye','xüsusi','şəkil']},
        {id:3,logo:'camex',name:'Camex',site:'camex.az',moneyValue:'$4',star:'3.5',type:['paket','xüsusi']},
        {id:4,logo:'bringly',name:'Bringly',site:'bringly.az',moneyValue:'$2.5',star:'3.5', type:['xüsusi','maye','şəkil']},
        {id:5,logo:'starex',name:'Starex',site:'starex.az',moneyValue:'$7',star:'3.5', type:['təcili','maye','şəkil']},
        {id:6,logo:'mover',name:'Mover',site:'mover.az',moneyValue:'$8',star:'3.5', type:['şəkil']}
      ],

      maye:null,
      paket:null,
      xususi:null,
      sekil:null,
      tecili:null,

      taxies:[
        {id:1,logo:'189taxi',phone:'*189',moneyValue:'2 azn',star:'3.5'},
        {id:2,logo:'bakutaxi',phone:'*9000',moneyValue:'2 azn',star:'3.0'},
        {id:3,logo:'ekonom',phone:'*9111',moneyValue:'2 azn',star:'4.0'},
        {id:4,logo:'uber',phone:'?',moneyValue:'2 azn',star:'3.5'},
        {id:5,logo:'bakutaxi',phone:'*9000',moneyValue:'2 azn',star:'4.5'},
        {id:6,logo:'189taxi',phone:'*189',moneyValue:'2 azn',star:'3.5'},
        {id:7,logo:'ekonom',phone:'*9111',moneyValue:'2 azn',star:'3.0'},
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
