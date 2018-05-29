<template>
    <div class="qrcode">
        <input type="text" class="form-control" placeholder="请输入网址" id="code" v-model="code2">
        <a href="#" @click="addRow()" class="btn btn-primary">生成二维码</a>
        <div id="initQrcode"></div>
    </div>
</template>
<script>
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      code2: "http://www.baidu.com"
    };
  },
  methods: {
    addRow: function() {
      var _this = this;
      if (_this.code2) {
        let qrcode = new QRCode("initQrcode", {
          width: 200,
          height: 200,
          text: _this.code2
        });
      }
    }
  },
  mounted() {
    this.addRow();
  }
};
</script>
<style>
#initQrcode {
  margin-top: 10px;
}
</style>

