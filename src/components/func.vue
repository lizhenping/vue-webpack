<template>
    <div class="mainpage">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  data() {
    return {
      titleName: "config配置文件"
    };
  }
};
</script>
<style>
.mainpage .el-header {
  height: 60px;
  background: aquamarine;
  line-height: 60px;
  text-align: left;
  font-size: 23px;
}
</style>

