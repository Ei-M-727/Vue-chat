<template>
  <div class="footer">
    <div class="nav">
      <router-link
        v-for="item in NavList"
        :key="item.name"
        :to="item.name"
        class="el-tab"
        :class="{ active: $route.name == item.name }"
      >
        <el-icon><ChatLineRound /></el-icon>
        <div class="el-name">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "FootNav",
  setup(props) {
    const router = useRouter();

    const state = reactive({
      NavList: [
        { title: "联系人", name: "Contact", icon: "friends", unread: null },
        { title: "聊天", name: "Message", icon: "chat", unread: null },
        { title: "我的", name: "Manage", icon: "manager", unread: null },
      ],
      active: 1,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 370px;
  bottom: 45px;
  height: 50px;
  width: 701px;
  background: rgb(241, 190, 108);
  border-radius: 0px 0px 10px 10px;

  .nav {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .active {
      color: rgb(255, 255, 255);
    }
    a {
      text-decoration: none;
      color: rgb(104, 72, 31);
    }
    .el-tab {
      width: 33%;
      height: 100%;
      // text-decoration: none;
      // color: #fbfdfe;
    }
    .el-icon {
      padding-top: 3px;
    }
  }
}
</style>
