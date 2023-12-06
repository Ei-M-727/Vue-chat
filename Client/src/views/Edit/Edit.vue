<template>
  <div class="edit content">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回</span>
      </el-col>
      <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
      <el-col :span="6">保存</el-col>
    </el-row>
    <!-- 头像 -->
    <div class="demo-type">
      <div>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="90"
        />
      </div>
    </div>

    <!-- 信息 -->
    <div class="item-cell">
      <div class="cell" @click="goEmail">
        <p class="title">邮箱</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
      <div class="cell" @click="goName">
        <p class="title">名字</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
      <div class="cell" @click="goGender">
        <p class="title">性别</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
      <div class="cell" @click="goAge">
        <p class="title">年龄</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
      <div class="cell">
        <p class="title">城市</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
    </div>
    <!--  -->
    <el-button class="btn" type="warning" plain>退出登录</el-button>
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
    const goEmail = () => {
      router.push({ name: "EditEmail" });
    };
    const goName = () => {
      router.push({ name: "EditName" });
    };
    const goGender = () => {
      router.push({ name: "EditGender" });
    };
    const goAge = () => {
      router.push({ name: "EditAge" });
    };

    return {
      goBack,
      goEmail,
      goName,
      goGender,
      goAge,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.edit {
  .el-row {
    height: 50px;
    margin-bottom: 20px;
    // margin-top: 10px;
    background-color: #fdf6ec;
    border-bottom: 1px solid #929090;
    border-radius: 10px 10px 0 0;
    line-height: 50px;

    .el-col {
    }
    .el-icon {
      padding-right: 5px;
    }
  }

  .demo-type {
    display: flex;
    //   height: 50px;
  }
  .demo-type > div {
    flex: 1;
    //   text-align: center;
  }

  .demo-type > div:not(:last-child) {
    border-right: 1px solid var(--el-border-color);
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
      .my-icon {
        width: 30px;
        height: 50px;
        line-height: 50px;
        margin-right: 20px;
      }
    }
  }
  .btn {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }
}
</style>