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

