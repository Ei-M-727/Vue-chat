<template>
  <div class="apply-group-validate content">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>取消</span>
      </el-col>
      <el-col :span="6">添加群组</el-col>
      <el-col :span="6">发送</el-col>
    </el-row>
    <!--  -->
    <div class="person-wrapper">
      <div class="demo-type">
        <div>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            :size="60"
          />
        </div>
      </div>

      <div>
        <p class="name">qqq</p>
        <p class="date">
          <span>www</span>
        </p>
      </div>
    </div>
    <div class="addition">
      <p class="add-info">请填写验证信息</p>
      <div class="info"></div>
    </div>
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
.apply-group-validate {
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
  .person-wrapper {
    display: flex;
    border-bottom: 1px solid #929090;
    height: 100px;
    .demo-type {
      margin: 20px;
      height: 90px;
      width: 90px;
    }
    .name {
      margin-top: 5px;
      font-size: 20px;
      font-weight: 600;
      text-align: left;
    }
    .date {
      font-size: 14px;
      margin-top: 4px;
      span {
        padding-left: 5px;
      }
    }
  }
  .addition {
    border-bottom: 1px solid #9f9d9d;

    .add-info {
      height: 30px;
      width: 100%;
      text-align: left;
      margin: 20px 0 0 0;
      border-bottom: 1px solid #9f9d9d;
    }
    .info {
      width: 100%;
      height: 70px;
      background-color: #fff;
    }
  }
  .el-button {
    width: 500px;
    height: 40px;
    margin: 10px;
  }
}
</style>