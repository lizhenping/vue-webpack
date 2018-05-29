const cart = {
  state: {
    productList: [],
    cartList: [],
    totalNum: 0,
    totalPrice: 0
  },
  mutations: {
    ADD_CART(state, list) {
      //判断是否已在购物车存在,是->数量+1,否->+商品
      var index = findIndexbyID(list.id);
      if (index == -1) {
        state.cartList.push(list)
      } else {
        state.cartList[i].number++;
      }
    }
  },
  actions: {
    addCart({
      commit
    }, list) {
      commit("ADD_CART", list)
    }
  },
  getters: {
    cartList: state => state.cartList,
    productList: state => state.productList
  }
}

function findIndexbyID(arr, id) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    if (arr[i] == id) {
      return i;
    }
  }
  return -1;
}
