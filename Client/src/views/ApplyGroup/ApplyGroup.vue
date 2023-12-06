<template>
  <div class="apply-group content">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回</span>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
    <!--  -->
    <div class="pic">
      <img
        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        alt=""
      />
    </div>
    <!--  -->
    <div class="cell">
      <p class="title">群名称</p>
      <span>qqq</span>
    </div>
    <div class="cell">
      <p class="title">创建时间</p>
      <span>2023-3-24</span>
    </div>
    <div class="cell">
      <div class="left">
        <p class="title">管理员</p>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="10"
          shape="circle"
        />
      </div>
      <div>
        <span>共1人</span>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
    </div>
    <el-button class="btn" type="primary" @click="goGroupValidate"
      >申请加群</el-button
    >
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
    const goGroupValidate = () => {
      router.push({ name: "ApplyGroupValidate" });
    };

    return {
      goBack,
      goGroupValidate,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.apply-group {
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
  .pic {
    img {
      width: 100%;
      height: 300px;
    }
  }

  .cell {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;

    padding: 5px 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #c8c5c5;
    .title {
      margin: 0 0 0 10px;
      height: 30px;
    }
    span {
      width: 100px;
      height: 30px;
      margin-right: 10px;
      text-align: right;
    }
    .left {
      display: flex;
      .el-avatar {
        width: 30px;
        height: 30px;
        margin-left: 5px;
      }
    }
  }
  .btn {
    width: 500px;
    height: 40px;
    margin-top: 20px;
  }
}
</style>