<template>
  <div class="account-safe content">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回</span>
      </el-col>
      <el-col :span="6">账户安全</el-col>
      <el-col :span="6"></el-col>
    </el-row>

    <!--  -->
    <div class="item-cell">
      <div class="cell" @click="goPhone">
        <p class="title">修改手机号</p>
        <span>13113356783</span>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
      <div class="cell" @click="goPassword">
        <p class="title">修改密码</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
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
    const goPhone = () => {
      router.push({ name: "EditPhone" });
    };
    const goPassword = () => {
      router.push({ name: "EditPassword" });
    };

    return {
      goBack,
      goPhone,
      goPassword,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.account-safe {
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
  .item-cell {
    margin-top: 20px;
    .cell {
      display: flex;
      justify-content: space-between;
      height: 50px;
      // box-sizing: border-box;
      // align-items: center;
      // padding: 5px 10px;
      background-color: #ffffff;
      border-bottom: 1px solid #c8c5c5;

      .title {
        margin-left: 20px;
      }
      span {
        line-height: 50px;
        margin-left: 450px;
      }
      .my-icon {
        width: 30px;
        height: 50px;
        line-height: 50px;
        margin-right: 20px;
      }
    }
  }
}
</style>