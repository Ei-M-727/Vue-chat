<template>
  <div class="message content" @click="show = false">
    <!-- 头部  -->
    <el-row :gutter="0">
      <el-col :span="22"> Message </el-col>
      <el-col :span="2">
        <el-icon @click.stop="onClickRight"><CirclePlus /></el-icon
      ></el-col>
    </el-row>

    <div class="add-wrapper" :show="show">
      <div v-show="show" class="right-box" @click.stop="onClickRight">
        <ul>
          <li @click.stop="addFriend">
            <el-icon><UserFilled /></el-icon>&nbsp;添加好友
          </li>
          <li @click.stop="addGroup">
            <el-icon><Avatar /></el-icon>&nbsp;添加群组
          </li>
          <li @click.stop="createGroup">
            <el-icon><HomeFilled /></el-icon>&nbsp;创建群组
          </li>
        </ul>
      </div>
    </div>
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

    <!-- 消息区域 -->
    <div class="message-wrapper"></div>

    <FootNav></FootNav>
  </div>
</template>

<script >
import FootNav from "@/components/FooterNav.vue";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Message",
  components: { FootNav },

  setup(props) {
    const router = useRouter();
    const state = reactive({
      show: false,
    });

    const onClickRight = () => {
      state.show = !state.show;
    };
    const goSearch = () => {
      router.push({ name: "Search" });
    };
    const addFriend = () => {
      state.show = false;
      router.push({ name: "SearchFriend" });
    };
    const addGroup = () => {
      state.show = false;
      router.push({ name: "SearchGroup" });
    };
    const createGroup = () => {
      state.show = false;
      router.push({ name: "CreateGroup" });
    };

    return {
      ...toRefs(state),
      onClickRight,
      goSearch,
      addFriend,
      addGroup,
      createGroup,
    };
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/common.scss";
.message {
}
header {
  /* margin-top: 10px; */
  font-size: 18px;
}

.el-row {
  margin-bottom: 20px;
}

.el-col {
  border-radius: 4px;
  margin-top: 10px;
}

.add-wrapper {
  z-index: 999;

  .right-box {
    z-index: 99;

    position: absolute;
    right: 40px;
    top: 20px;
    border-radius: 8px;
    width: 110px;
    background-color: #aca9a9;

    &.right-box::after {
      content: "";
      display: block;
      position: absolute;
      border-style: solid;
      border-color: #aca9a9 transparent;
      width: 0;
      top: 10px;
      right: -10px;
      border-width: 0 15px 15px 0;
      transform: skewX(30deg);
      transform: rotate(0.2turn);
    }

    ul {
      padding: 4px 0 4px 5px;

      li {
        padding: 4px;
        vertical-align: bottom;
        color: #fff;
        list-style: none;
      }
    }
  }
}
.demo-input-size {
  width: 650px;
  margin: 0 auto;
}
</style>
