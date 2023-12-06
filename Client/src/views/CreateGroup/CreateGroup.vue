<template>
  <div class="create-group content">
    <el-page-header :icon="ArrowLeft" @click.stop="back">
      <template #content>
        <span class="text-large font-600 mr-3"> 创建群聊 </span>
      </template>
    </el-page-header>

    <!--  -->
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="群聊名称" prop="name">
        <el-input />
      </el-form-item>

      <el-form-item label="群介绍" prop="desc">
        <el-input type="textarea" />
      </el-form-item>

      <el-form-item label="群分类" prop="resource">
        <el-radio-group>
          <el-radio label="普通群" />
          <el-radio label="广播群" />
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Create
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 打个记号，群聊id采用随机生成id
import { useRouter } from "vue-router";
export default {
  setup(props) {
    const router = useRouter();

    const back = () => {
      router.go(-1);
    };

    return {
      back,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.create-group {
  .el-page-header {
    height: 30px;
    width: 640px;
    margin: 20px 30px;
    padding-top: 10px;
    padding-left: 10px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    .title {
      text-align: center;
    }
  }
}
</style>