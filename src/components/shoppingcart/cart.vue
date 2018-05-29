<template>
    <div class="vue-cart">
        <!-- 
           表格组件内自定义操作,进行数据的传递, slot-scope的方式
         -->
        <div class="common-header">已选商品</div>
          <el-table :data='tableData' border height='250'>
            <el-table-column prop='id' label='商品id' width='100'></el-table-column>
            <el-table-column prop='name' label='商品名称' width='200'></el-table-column>
            <el-table-column prop='price' label='商品价格(元)' width='140'></el-table-column>
            <el-table-column prop='number' label='商品数量(件)' width='160'></el-table-column>
            <el-table-column prop='number' label='商品数量(件)' width='160'>
                <template slot-scope="scope">
                    <el-button slot="prepend" @click="changeQuantity(scope.row,-1)"><i class="el-icon-minus"></i></el-button>
                    <el-input v-model="scope.row.number" :value='scope.row.number' @change="numChange(scope.row)"  :min="1" :max="10" size='mini' ></el-input>
                    <el-button slot="append" @click="changeQuantity(scope.row,1)"><i class="el-icon-plus"></i></el-button>
                </template>
            </el-table-column>
            <el-table-column label='操作' width='100'>
                <template slot-scope="scope">
                    <el-button  type="text" size="small" @click="deleteShopping(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeQuantity(row, type) {
      if (type > 0) {
        row.number++;
      } else {
        row.number > 1 ? row.number-- : (row.number = 1);
      }
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].id == row.id) {
          var index = i;
          break;
        }
      }
      this.tableData.splice(index, 1, row);
      this.$store.dispatch("change_cartInfo", { list: row, type: type });
    },
    numChange(row) {},
    /**
     * 正确地做法:
     * 通过直接修改每条记录的number即可实现监听,至于总数跟总价,则通过type来判断+/-;
     * 没必要监听点击的是+/-，只需要监听值变化即可，拿原值跟现有值作比较;
     */
    deleteShopping(row) {
      var list = {
        id: row.id,
        name: row.name,
        price: row.price,
        number: row.number,
        inputNum: row.inputNum
      };
      this.$store.dispatch("delete_shopping", list);
    }
  },
  computed: {
    tableData: function() {
      var cartList = this.$store.getters.cartList;
      for (var i = 0; i < cartList.length; i++) {
        cartList[i].inputNum = cartList[i].number;
      }
      return cartList;
    }
  }
};
</script>
<style>
.vue-cart .el-input input {
  height: 28px;
  line-height: 28px;
  width: 100%;
  text-align: center;
}
.vue-cart .el-input {
  width: 65px;
  display: inline-block;
  top: -2px;
}
.vue-cart .cell button {
  padding: 0px;
  height: 28px;
  line-height: 28px;
  width: 28px;
}
.vue-cart .cell {
  position: relative;
}
</style>


