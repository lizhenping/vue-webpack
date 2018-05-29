<template>
    <div class="mainpage">
       <el-container>
           <el-header>
               <div class="header">
                   {{titleName}}
                   <div class="userIcon" :style="{background: backgroundUrl}" @mouseover="showSetting()" @mouseout="hideSetting()">
                        <div class="operateBox" v-if='status'>
                            <a @click="modifyPwd()">修改密码</a>
                            <a @click="logout()">退出登录</a>
                        </div>
                   </div>
               </div>
           </el-header>
           <el-container>
               <el-aside>
                   <el-menu :default-active='$route.path'  @select="handleSelect"  :unique-opened='true'>
                        <el-menu-item index="/home"><i class="el-icon-menu"></i>主页</el-menu-item>
                        <el-menu-item index="/log"><i class="el-icon-edit"></i>日志</el-menu-item>
                        <el-submenu index='/func'>
                            <template slot="title">
                                <i class="el-icon-zoom-in"></i>
                                <span>功能模块</span>
                            </template>
                            <el-menu-item index="/func/element">element基础</el-menu-item>
                            <el-menu-item index="/func/element_comp">element用法</el-menu-item>
                            <el-menu-item index="/func/shoppingCart">购物车</el-menu-item>
                            <el-menu-item index="/func/note">记事本</el-menu-item>
                            <el-menu-item index="/func/qrcode">二维码</el-menu-item>
                            <el-menu-item index='/func/echarts'>echarts图表</el-menu-item>
                            <el-menu-item index='/func/ueditor'>ueditor</el-menu-item>
                        </el-submenu>
                   </el-menu>
                </el-aside>
               <el-main>
                   <router-view></router-view>
               </el-main>
           </el-container>
       </el-container>
        <el-dialog title="退出登录" :visible.sync='logoutVisible' custom-class='logoutClass' :close-on-click-modal= "true">
            <span>您确定要退出登录嘛？</span>
            <span slot="footer" class="dialog-footer">
            <el-button @click='dialogVisible = false'>取消</el-button>
            <el-button @click='markSureEvt()'>确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
  /**
   * 在进行读取静态图片时,需要注意引入图片路径的方法哟~
   */
  data() {
    return {
      titleName: "config配置文件",
      backgroundUrl:
        "url(" +
        require("../../static/img/user.png") +
        ")right center no-repeat",
      status: false,
      logoutVisible: false
    };
  },
  methods: {
    markSureEvt() {
      this.logoutVisible = false;
      this.$storage.clearAll();
      /**
       * 若在这里还加了一层setTimeout,则会报错:Cannot read property 'push' of undefined
       */
      this.$router.push({ path: "/login" });
    },
    showSetting() {
      this.status = true;
    },
    hideSetting() {
      this.status = false;
    },
    modifyPwd() {
      this.$notify.info({
        title: "修改密码",
        message: "具体功能开发中!"
      });
    },
    logout() {
      this.logoutVisible = true;
    },
    handleSelect(key, keyPath) {
      this.$router.push(key);
    }
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
  position: relative;
}
.mainpage .header {
  height: 60px;
}
.mainpage .userIcon {
  width: 28px;
  height: 100%;
  display: inline-block;
  float: right;
  position: relative;
}
.mainpage .operateBox {
  border: 1px solid #ccc;
  display: block;
  position: absolute;
  top: 45px;
  width: 100px;
  right: 0px;
  line-height: 20px;
  text-align: center;
}
.mainpage .operateBox a {
  display: block;
  height: 25px;
  line-height: 25px;
  font-size: 17px;
  width: 100%;
  text-align: center;
  cursor: pointer;
}
.mainpage .operateBox a:hover {
  color: blue;
  background: #cccccc;
}
.mainpage .el-container {
  height: 100%;
  min-height: 770px;
}
.mainpage .el-aside {
  background: #ffffff;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.logoutClass {
  width: 450px;
}

.logoutClass .el-dialog__header {
  background-color: #0078d7;
  color: #fff;
  padding: 20px;
}

.logoutClass .el-dialog__header .el-dialog__title,
.logoutClass .el-dialog__header button i {
  color: #ffffff;
}

.logoutClass .el-dialog__footer button {
  width: 120px;
  height: 30px;
  line-height: 28px;
  color: #fff;
  background-color: #0078d7;
  margin-left: 20px;
  border: 1px solid #0078d7;
  border-radius: 2px;
  outline: 0;
  padding: 0px;
}
</style>

