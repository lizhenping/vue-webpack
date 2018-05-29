<template>
  <div id="vue-shoppingCart">
    <product></product>
    <cart></cart>
    <info></info>
  </div>
</template>
<script>
import product from "@/components/shoppingcart/product.vue";
import cart from "@/components/shoppingcart/cart.vue";
import info from "@/components/shoppingcart/info.vue";
// //Unknown custom element: <product> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
// //报错原因: 组件引入进来之后,并未进行正确地注册操作;
export default {
  components: {
    product,
    cart,
    info
  }
};
</script>
<style>
#vue-shoppingCart td,
#vue-shoppingCart th {
  text-align: center;
}
</style>

