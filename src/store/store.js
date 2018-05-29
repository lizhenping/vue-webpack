// import Vue from "vue";
// import Vuex from "vuex";
// Vue.use(Vuex);

// import cart from "./shoppingCart"

// /**
//  *报错信息: __WEBPACK_IMPORTED_MODULE_1_vuex__.a.store is not a function
//  忘记加new 这个关键字了,同时哈,store必须是首字母大写===
//  经常死在这些细节问题上,撞头去吧~~~
//  */
// export default new Vuex.Store({
//   namespace: true,
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {
//     cart
//   }
// });

function findIndexbyID(arr, id) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    if (arr[i].id == id) {
      return i;
    }
  }
  return -1;
}

import Vue from "vue";
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  //note模块
  notes: [],
  activeNote: {
    favorite: false,
    text: ''
  },
  currentActive: 'all',

  //购物车模块
  productList: [],
  cartList: [],
  totalNum: 0,
  totalPrice: 0
}

const mutations = {
  SET_PRODUCT_LIST(state, list) {
    state.productList = list;
  },
  CHANGE_CARTINFO(state, obj) {
    if (obj.type > 0) {
      state.totalNum++;
      state.totalPrice += Number(obj.list.price);
    } else {
      state.totalNum--;
      state.totalPrice -= Number(obj.list.price);
    }

  },
  ADD_SHOPPING(state, list) {
    var index = findIndexbyID(state.cartList, list.id);
    if (index == -1) {
      state.cartList.push(list);
    } else {
      state.cartList[index].number++;
    }
    state.totalNum++;
    state.totalPrice += Number(list.price);
  },
  DELETE_SHOPPING(state, list) {
    var index = findIndexbyID(state.cartList, list.id);
    state.cartList.splice(index, 1);
    state.totalNum -= Number(list.number);
    state.totalPrice = state.totalPrice - (Number(list.number) * Number(list.price));
  },
  RESETSHOPPING(state) {
    state.totalNum = 0;
    state.totalPrice = 0;
    state.cartList = [];
  },


  ADD_NOTE(state) {
    const newNote = {
      text: 'this is new note',
      favorite: false
    }
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  EDIT_NOTE(state, text) {
    state.activeNote.text = text;
  },
  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  },
  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  DELETE_NOTE(state) {
    for (var i = 0; i < state.notes.length; i++) {
      if (state.notes[i] == state.activeNote) {
        state.notes.splice(i, 1);
      }
    }
    state.activeNote = state.notes[0];
  },
  CHANGE_ACTIVE(state, type) {
    state.currentActive = type;
  }
}
const actions = {
  change_cartInfo({
    commit
  }, obj) {
    commit("CHANGE_CARTINFO", obj);
  },
  set_product_list({
    commit
  }) {
    commit("SET_PRODUCT_LIST");
  },
  add_shopping({
    commit
  }, list) {
    commit("ADD_SHOPPING", list);
  },
  delete_shopping({
    commit
  }, list) {
    commit("DELETE_SHOPPING", list)
  },
  resetShopping({
    commit
  }) {
    commit("RESETSHOPPING");
  },

  addNote({
    commit
  }) {
    commit("ADD_NOTE");
  },
  editNote({
    commit
  }, text) {
    commit("EDIT_NOTE", text)
  },
  deleteNote({
    commit
  }) {
    commit("DELETE_NOTE");
  },
  toggleFavorite({
    commit
  }) {
    commit("TOGGLE_FAVORITE");
  },
  updateActiveNote({
    commit
  }, note) {
    commit("SET_ACTIVE_NOTE", note);
  },
  changeActive({
    commit
  }, note) {
    commit("CHANGE_ACTIVE", note)
  }
}
const getters = {
  productList: state => state.productList,
  cartList: state => state.cartList,
  totalNum: state => state.totalNum,
  totalPrice: state => state.totalPrice,


  notes: state => state.notes,
  activeNote: state => state.activeNote,
  currentActive: state => state.currentActive

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
