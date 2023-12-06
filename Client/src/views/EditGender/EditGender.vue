<template>
  <div class="edit-gender content">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回</span>
      </el-col>
      <el-col :span="6">设置性别</el-col>
      <el-col :span="6">保存</el-col>
    </el-row>
    <!--  -->
    <el-radio-group v-model="radio">
      <el-radio :label="3">男</el-radio>
      <el-radio :label="6">女</el-radio>
      <el-radio :label="9">保密</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup(props) {
    const router = useRouter();
    const radio = ref(3);

    const goBack = () => {
      router.go(-1);
    };

    return {
      goBack,
      radio,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.edit-gender {
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
  }
}
</style>