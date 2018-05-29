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
  /**页面报错: Cannot read property 'cart' of undefined： 原因是参数传递有误，第一个参数应该是state，而不是cartList;
   * 同时发现还有地方又有问题: mutations,容易写成单数[mutation];
   * 同时排除了上述所有问题之后,仍还是不行，突然临门一脚哦，貌似没有挂在到app实例钩子上去
   */
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
