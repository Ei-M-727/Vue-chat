<template>
  <div class="contact content">
    <el-row :gutter="0">
      <el-col :span="24"> Message </el-col>
    </el-row>

    <!-- 搜索 -->
    <div class="demo-input-size">
      <el-input
        v-model="input2"
        class="w-50 m-2"
        placeholder="搜索"
        prefix-icon="Search"
        @focus="goSearch"
      />
    </div>
    <Footer-Nav></Footer-Nav>
  </div>
</template>

<script>
import FooterNav from "../../components/FooterNav.vue";
import { useRouter } from "vue-router";
export default {
  name: "Contact",
  components: { FooterNav },
  setup(props) {
    const router = useRouter();
    const goSearch = () => {
      router.push({ name: "Search" });
    };

    return {
      goSearch,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/common.scss";
.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
  margin-top: 10px;
}

.demo-input-size {
  width: 650px;
  margin: 0 auto;
}
</style>