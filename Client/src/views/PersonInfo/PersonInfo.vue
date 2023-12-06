<template>
  <div class="person-info content">
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
            :size="90"
          />
        </div>
      </div>
      <div>
        <p class="name">qqq</p>
        <p class="date">
          <span>广东省</span><span>广州市</span><span>男</span><span>18</span>
        </p>
        <p class="phone">143573725372</p>
      </div>
    </div>
    <div class="cell" @click="goRemark">
      <p class="title">设置备注</p>
      <span>aaa</span>
      <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
    </div>
    <el-button class="del" type="danger">删除好友</el-button>
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
    const goRemark = () => {
      router.push({ name: "EditRemark" });
    };

    return {
      goBack,
      goRemark,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.person-info {
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
    .demo-type {
      margin-top: 20px;
    }
    .name {
      margin-top: 5px;
      font-size: 20px;
      font-weight: 600;
    }
    .date {
      font-size: 14px;
      margin-top: 4px;
      span {
        padding-left: 5px;
      }
    }
    .phone {
      font-size: 14px;
    }
  }
  .cell {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;

    background-color: #ffffff;
    border-bottom: 1px solid #c8c5c5;

    .title {
      margin: 0 0 0 20px;
      display: inline-block;
      height: 40px;
    }
    span {
      line-height: 40px;
      margin-left: 450px;
    }
    .my-icon {
      width: 30px;
      height: 40px;
      line-height: 40px;
      margin-right: 20px;
    }
  }
  .del {
    margin-top: 20px;
    width: 500px;
    height: 40px;
  }
}
</style>