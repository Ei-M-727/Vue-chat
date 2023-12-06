<template>
  <div class="search-friend content">
    <!-- 搜索 -->
    <div class="demo-input-size">
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="用户名/手机号"
        prefix-icon="Search"
      />
      <el-button type="warning" @click="onCancle">取消</el-button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "search",
  setup(props) {
    const router = useRouter();

    const onCancle = () => {
      router.go(-1);
    };

    return {
      onCancle,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.demo-input-size {
  width: 630px;
  margin: 20px 30px;
  display: flex;
}
</style>