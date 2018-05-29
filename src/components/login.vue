<template>
    <div class="loginVM">
        <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width='75px' class="loginForm">
            <el-form-item label="用户名" prop='username'>
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop='password'>
                <el-input v-model="ruleForm.password" type='password'></el-input>
            </el-form-item>
            <el-form-item>
               <el-button type='primary' @click="onLogin('ruleForm')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: { required: true, message: "请输入用户名", trigger: "blur" },
        password: { required: true, message: "请输入密码", trigger: "blur" }
      }
    };
  },
  methods: {
    onLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var username = this.ruleForm.username;
          var password = this.ruleForm.password;

          if (username == "admin" || password == "admin") {
            this.$notify({
              title: "温馨提示",
              message: "登录成功!",
              type: "success"
            });
            this.$storage.setItem("userLoginInfo", {
              username: username,
              password: password
            });
            this.$router.push({ path: "/home" });
          } else {
            this.$notify.error({
              title: "温馨提示",
              message: "用户名或者密码错误,请重新输入!"
            });
          }
          var pData = {
            username: username,
            password: password
          };
          /**
           * axios模拟数据
           * 采取post请求时,若传递的是obj对象,实际的参数在network中,是以requestPayload.
           */
          // this.$http.get("../../static/data/login.json").then(
          //   response => {
          //     console.log(response);
          //   },
          //   response => {}
          // );
          // this.$http.post("/api/post_login", pData).then(
          //   response => {
          //     /**
          //      * response是个对象,reponse.data才是后台返回的obj对象;
          //      * * 若访问本地json文件,则必须放在static静态资源文件夹下;
          //      */
          //     // console.log(response);
          //     if (response.data.ret == true) {
          //       this.$notify({
          //         title: "温馨提示",
          //         message: "登录成功!",
          //         type: "success"
          //       });
          //       this.$storage.setItem("userLoginInfo", {
          //         username: username,
          //         password: password
          //       });
          //       this.$router.push({ path: "/home" });
          //     }
          //   },
          //   respose => {
          //     this.$notify.error({
          //       title: "温馨提示",
          //       message: "服务器后端错误,请联系管理员!"
          //     });
          //   }
          // );
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style>
.loginForm {
  -moz-border-radius: 5px;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  -webkit-box-shadow: 0 0 25px #cac6c6;
  box-shadow: 0 0 25px #cac6c6;
}
.loginForm button {
  width: 120px;
}
</style>

