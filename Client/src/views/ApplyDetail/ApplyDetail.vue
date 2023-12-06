<template>
  <div class="apply-detail content">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回</span>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
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
        <p class="addfriend">
          <span>添加您为好友</span>
        </p>
      </div>
    </div>
    <div class="addition">
      <div class="add-info">附加信息</div>
    </div>
    <el-button type="primary" size="medium">同意</el-button>
    <el-button type="danger" size="medium">拒绝</el-button>
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
.apply-detail {
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
      text-align-last: left;
    }
    .addfriend {
      font-size: 14px;
      margin-top: 4px;
      text-align-last: left;
      span {
        padding-left: 5px;
      }
    }
  }
  .addition {
    border-bottom: 1px solid #9f9d9d;
    padding: 20px;

    .add-info {
      height: 80px;
      width: 100%;
      text-align: left;
    }
  }
  .el-button {
    width: 500px;
    height: 40px;
    margin: 10px;
  }
}
</style>