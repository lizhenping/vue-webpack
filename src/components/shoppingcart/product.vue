<template>
    <div class="vue-product">
        <div class="common-header">商品信息</div>
        <el-table :data='tableData' border>
            <el-table-column prop='id' label='商品id' width='100'></el-table-column>
            <el-table-column prop='name' label='商品名称' width='270'></el-table-column>
            <el-table-column prop='price' label='商品价格(元)' width='140'></el-table-column>
            <el-table-column label='操作' width='100'>
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="add_shopping(scope.row)">加入购物车</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    add_shopping(row) {
      var list = {
        id: row.id,
        name: row.name,
        price: row.price,
        number: 1
      };
      this.$store.dispatch("add_shopping", list);
    }
  },
  computed: {
    tableData() {
      return [
        {
          id: "1",
          name: "java从入门到放弃",
          price: "72.00"
        },
        {
          id: "2",
          name: "nodeJS编程",
          price: "72.00"
        },
        {
          id: "3",
          name: "恶意",
          price: "7.00"
        },
        {
          id: "4",
          name: "javascript入门",
          price: "33.00"
        },
        {
          id: "5",
          name: "vue权威指南",
          price: "88.00"
        }
      ];
    }
  }
};
</script>
<style>
.common-header {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}
.vue-product {
  margin-bottom: 15px;
}
</style>


