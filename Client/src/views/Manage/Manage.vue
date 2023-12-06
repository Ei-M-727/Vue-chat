<template>
  <div class="setting content">
    <el-row :gutter="0">
      <el-col :span="24"> 我的 </el-col>
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
    <div class="manage-info" @click="goEdit">
      <div class="info-detail">
        <p class="name">
          账号: <span>{{ userInfo.userName }}</span>
        </p>
        <p class="phone">手机号:<span>111111</span></p>
        <p class="email">邮箱:<span>11111</span></p>
      </div>
      <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
    </div>
    <!-- 功能 -->
    <div class="item-cell">
      <div class="cell">
        <div class="pic">
          <el-icon><Collection /></el-icon>
        </div>
        <p class="title">备忘录&nbsp;&nbsp;&nbsp;</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
      <div class="cell" @click="goSafe">
        <div class="pic">
          <el-icon><Key /></el-icon>
        </div>
        <p class="title">账户安全</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
      <div class="cell" @click="goSystemMessage">
        <div class="pic">
          <el-icon><Bell /></el-icon>
        </div>
        <p class="title">系统信息</p>
        <el-icon class="my-icon" :size="18"><ArrowRight /></el-icon>
      </div>
    </div>
    <Footer-Nav></Footer-Nav>
  </div>
</template>

<script>
import FooterNav from "../../components/FooterNav.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { reactive, toRefs, computed } from "vue";
export default {
  name: "Manage",
  components: { FooterNav },
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const state = reactive({});

    const userInfo = computed(() => {
      return store.state.userInfo;
    });

    const goEdit = () => {
      router.push({ name: "Edit" });
    };
    const goSafe = () => {
      router.push({ name: "AccountSafe" });
    };
    const goSystemMessage = () => {
      router.push({ name: "SystemMessage" });
    };

    return {
      goEdit,
      goSafe,
      goSystemMessage,
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
.manage-info {
  // margin-top: 50px;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  box-sizing: border-box;
  height: 100px;
  //   padding-left: 200px;
  background-color: #ffffff;

  .info-detail {
    // flex: 1;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;
    font-size: 14px;
    .phone,
    .email {
      margin-top: 6px;
    }
    p {
      margin-bottom: 0;
      text-align: left;
      font-size: 15px;
      span {
        padding-left: 10px;
      }
    }
    .name {
      margin-top: 0;
    }
  }
  .my-icon {
    width: 30px;
    height: 30px;
    // top: -5px;
    left: 535px;
  }
}
.item-cell {
  margin-top: 20px;
  .cell {
    display: flex;
    height: 50px;
    box-sizing: border-box;
    align-items: center;
    padding: 5px 10px;
    background-color: #ffffff;

    border-bottom: 1px solid #c8c5c5;
    .pic {
      .el-icon {
        color: #496226;
      }
    }
    .title {
      margin-left: 10px;
    }
    .my-icon {
      width: 30px;
      height: 30px;
      top: -5px;
      left: 550px;
    }
  }
}
</style>