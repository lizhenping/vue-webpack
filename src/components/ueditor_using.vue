<template>
  <div class="components-container">
    <div class="info">UE编辑器<br/>需要使用编辑器时,调用UE公共组件即可。可设置填充内容defaultMsg,配置信息config(宽高等),可调用组件获取内容的方法</div>
    <button @click="getUEContent()">获取内容</button>
    <button @click="getUEContentTxt()">获取无文本内容</button>
    <div class="editor-contanier">
      <UE  :defaultMsg=defaultMsg :config=config :id=ueditor ref='ue'></UE>
    </div>
  </div>
</template>

<script>
import UE from "./ueditor.vue";
export default {
  components: { UE },
  data() {
    return {
      defaultMsg: "Ueditor测试",
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      },
      ueditor: "ueditor" //若一个页面有多个编辑器,则必须具备不同的Id
    };
  },
  methods: {
    getUEContent() {
      let content = this.$refs.ue.getUEContent();
      this.$notify({
        title: "内容获取成功，可在控制台查看",
        message: content,
        type: "success"
      });
    },
    getUEContentTxt() {
      let content = this.$refs.ue.getUEContentTxt(); // 调用子组件方法
      this.$notify({
        title: "纯文本内容获取成功，可在控制台查看！",
        message: content,
        type: "success"
      });
    }
  }
};
</script>
<style>
.info {
  border-radius: 10px;
  line-height: 20px;
  padding: 10px;
  margin: 10px;
  background-color: #ffffff;
}
</style>
