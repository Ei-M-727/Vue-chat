<template>
  <div class="edit-phone content">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回</span>
      </el-col>
      <el-col :span="6">修改手机号</el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <!--  -->
    <el-form
      ref="ruleFormRef"
      status-icon
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="原手机号" prop="pass">
        <el-input type="text" autocomplete="off" placeholder="" />
      </el-form-item>
      <el-form-item>
        <el-checkbox-group class="sms">
          <el-input type="text" autocomplete="off" placeholder="短信验证码" />
          <el-checkbox-button label="获取验证码" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="新手机号" prop="pass">
        <el-input type="text" autocomplete="off" placeholder="" />
      </el-form-item>
      <el-button class="btn" type="primary">确认修改</el-button>
    </el-form>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup(props) {
    const router = useRouter();

    const goBack = () => {
      router.go(-1);
    };

    return {
      goBack,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.edit-phone {
  .el-row {
    height: 50px;
    // margin-bottom: 20px;
    // margin-top: 10px;
    background-color: #fdf6ec;
    border-bottom: 1px solid #929090;
    border-radius: 10px 10px 0 0;
    line-height: 50px;

    .el-icon {
      padding-right: 5px;
    }
  }
  .el-form-item {
    margin-top: 20px;
    margin-right: 60px;
    .sms {
      display: flex;
    }
    .el-button {
    }
  }
}
</style>