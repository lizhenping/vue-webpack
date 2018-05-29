<template>
    <div class="vue-cart">
        <!-- 
            学会如何在表格组件中插入自定义元素，并进行组件数据的传递......
            这会数据的传递问题解决了,但是增删改仍无法实现哦,有Bug......
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
                     <!-- <el-input-number v-model="scope.number" @change="numChange(scope.row)" disabled></el-input-number> -->
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
     * 通过直接修改每条记录的number即可实现监听,至于总数跟总价,则通过type来判断+/-
     */
    // numChange(row) {
    /**
     * 愚蠢地人类: 试图通过监听+/-来判断到底是增加还是减少,然而并未提供此方法;
     * 换个角度讲哈：监听+-干嘛，，直接监听里面的值变化不就行了 ;
     *  如果是做的库存判断 ,直接拿值跟store的库存做比较，如果是根据值增加减少显示效果 拿原值跟新值作比较--
     * 最后的解决思路: 在这里增加个inputNum属性，已监听商品数量的增加减少;
     */
    //   var length = this.$store.getters.cartList.length;
    //   var number = 0;
    //   //   for (var i = 0; i < length; i++) {
    //   //     if (this.$store.getters.cartList[i].id == row.id) {
    //   //       number = this.$store.getters.cartList[i].number;
    //   //       break;
    //   //     }
    //   //   }
    //   if (number > row.inputNumber) {
    //     this.$store.dispatch("delete_shopping", row);
    //   } else {
    //     this.$store.dispatch("add_shopping", row);
    //   }
    // },
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


