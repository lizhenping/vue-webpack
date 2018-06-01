<template>
    <div class="element_comp">
        <h5>中英文选词完成后,触发input事件.</h5>
        <input type="text" value="" placeholder="请输入用户名" id="username">
        <hr/>
        <!--
          注意:nextTick()的使用:等全部数据渲染完之后,再执行回调.->优雅降序的方法.
          在实际的开发过程中,需要根据你的需求再写代码,而勿先胡乱写代码,遇到问题再来分析整体需求是否有误;
         -->
        <el-tag v-for='item in tags' :key="item.name" closable :type="item.type"  @close='handleClose(item)'>{{item.name}}</el-tag>
        <el-button @click="addTag()">addTags</el-button>

        <el-progress status='success' :percentage='100'></el-progress>
        <el-progress color='#cccccc' :percentage='60'></el-progress>
        <el-progress color='#dddddd' :percentage='60' type='circle'></el-progress>
    </div>
</template>
<script>
export default {
  data() {
    return {
      tags: [
        { name: "success", type: "success" },
        { name: "info", type: "info" },
        { name: "warning", type: "warning" },
        { name: "danger", type: "danger" }
      ]
    };
  },
  methods: {
    handleClose(item) {
      this.tags.splice(this.tags.indexOf(item), 1);
    },
    addTag() {
      //实现标签的追加
    }
  },
  created: function() {},
  mounted: function() {
    /**
     * 问题发现: 监听文本输入框的input事件,在拼写汉字输入法但汉字并未实际填充到文本框中(选词)时会触发input事件.
     * 需求: 选词完成之后触发input事件,只触发一次.
     * 解决方案:设置flag标志位,选词完毕后再打印,settimeout的目的在于,选词完毕后,input的执行会先于compositionend,而此时flag还未为真,无法console.
     * 注意: flag标志位初始时,必须为真,否则刚开始输入非中文时,无法console.log;
     */
    var flag = true;
    $("#username").on("compositionstart", function() {
      flag = false;
    });
    $("#username").on("compositionend", function() {
      flag = true;
    });
    $("#username").on("input", function() {
      var _this = this;
      setTimeout(function() {
        if (flag == true) {
          console.log($(_this).val());
        }
      }, 0);
    });
  }
};
</script>
<style>
</style>


