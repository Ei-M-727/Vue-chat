<template>
  <div class="chat-interface content">
    <el-row class="row-bg" justify="space-between">
      <el-col :span="6" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <span>返回</span>
      </el-col>
      <el-col :span="6">aaa</el-col>
      <el-col :span="6" @click="goPersonInfo">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="45"
      /></el-col>
    </el-row>
    <!--  -->
    <div></div>

    <!-- 底部 -->
    <el-row class="footer" :gutter="20">
      <el-col :span="4"
        ><el-icon><Files /></el-icon
      ></el-col>
      <el-col :span="16"
        ><div class="mt-4">
          <el-input
            v-model="input3"
            placeholder="Please input"
            class="input-with-select"
          >
            <template #append>
              <el-icon><Star /></el-icon>
            </template>
          </el-input></div
      ></el-col>
      <el-col :span="4"
        ><el-icon><Promotion /></el-icon
      ></el-col>
    </el-row>
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
    const goPersonInfo = () => {
      router.push({ name: "PersonInfo" });
    };
    return {
      goBack,
      goPersonInfo,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.chat-interface {
  .row-bg {
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
  .footer {
    position: absolute;
    bottom: 0;
    left: 10px;
    height: 50px;
    width: 100%;
    // margin-bottom: 20px;
    // margin-top: 10px;
    background-color: #fdf6ec;
    border-top: 1px solid #929090;
    border-radius: 0px 0px 10px 10px;
    line-height: 50px;

    .el-icon {
      padding-right: 5px;
    }
  }
}
</style>