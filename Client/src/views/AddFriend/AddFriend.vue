<template>
  <div class="edit-age content">
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
      </div>
      <el-button type="primary" @click="goFriendValidate">加为好友</el-button>
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
    const goFriendValidate = () => {
      router.push({ name: "ApplyFriendValidate" });
    };
    return {
      goBack,
      goFriendValidate,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.edit-age {
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
  }
}
</style>