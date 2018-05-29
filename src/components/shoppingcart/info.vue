<template>
    <div class="vue-info">
        <div class="item">总数: <strong>{{ totalNum}}</strong> (件)</div>
        <div class="item">总价: <strong>{{ totalPrice}}</strong>(元)</div>
        <div class="item resetBtn" @click="resetShopping()">清空购物车</div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["totalNum", "totalPrice"]),
  methods: {
    resetShopping() {
      if (this.$store.cart.getters.cartList.length == 0) {
        this.$message({
          showClose: true,
          message: "您的购物车空空如也~",
          type: "info"
        });
        return;
      }
      this.$confirm("您确定要清空购物车？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$store.cart.dispatch("resetShopping");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style>
.vue-info {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
  width: 870px;
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
}
.resetBtn {
  color: red;
  cursor: pointer;
}
.item {
  flex: 1;
}
</style>


