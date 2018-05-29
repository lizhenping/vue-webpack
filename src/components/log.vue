<template>
    <div class="log">
        <el-table :data="tableData" border>
            <el-table-column prop='date' label='日期'></el-table-column>
            <el-table-column prop='func' label='功能点'></el-table-column>
            <el-table-column prop='sayings' label='备注'></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  }
};
</script>
<style>
</style>

