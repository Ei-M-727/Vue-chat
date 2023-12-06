<template>
  <div class="login content">
    <div class="top-tip">
      <div class="login-entry">
        <span>登录</span>
        <span>或</span>
        <span>注册</span>
      </div>
    </div>
    <!-- 注册 -->
    <transition name="reg-slide">
      <div class="form-container">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 460px"
        >
          <el-form-item label="用户名">
            <el-input />
          </el-form-item>
          <el-form-item label="密码">
            <el-input />
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input />
          </el-form-item>
          <el-form-item label="短信验证码">
            <el-input v-model="input2" placeholder="">
              <template #append
                ><el-button type="primary">获取验证码</el-button></template
              >
            </el-input>
          </el-form-item>
        </el-form>
        <el-button class="btn" type="primary">注册</el-button>
      </div>
    </transition>
    <!-- 登录 -->
    <transition name="login-slide">
      <div class="form-container">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formLabelAlign"
          style="max-width: 460px"
        >
          <el-form-item label="用户名/手机号">
            <el-input />
          </el-form-item>
          <el-form-item label="密码">
            <el-input />
          </el-form-item>

          <el-form-item label="验证码">
            <el-input v-model="input2" placeholder="">
              <template #append
                ><el-button type="primary">wwww</el-button></template
              >
            </el-input>
          </el-form-item>
        </el-form>
        <el-button class="btn" type="primary">登录</el-button>
      </div>
    </transition>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "Login",
  setup(props) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.login {
  .top-tip {
    position: absolute;
    overflow: hidden;
    width: 100%;
    top: 10%;
    left: 0;
    text-align: center;
    .login-entry {
      display: inline-block;
      margin-left: 20px;
      margin-top: 16px;
      text-align: right;
      letter-spacing: 2px;
      font-size: 20px;
      .font-active {
        font-size: 24px;
      }
    }
  }
  .form-container {
    margin-top: 150px;
    height: 100px;

    .el-form {
      margin: 0 auto;
    }
    .btn {
      width: 250px;
      height: 30px;
      margin: 10px;
    }
  }
}
</style>