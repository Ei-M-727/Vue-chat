import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "Message",
  },
  {
    path: "/message",
    name: "Message",
    component: () => import("@/views/Message/message.vue"),
    meta: {
      tag: 'message'
    }
  },
  {
    path: "/message/applyGroup",
    name: "ApplyGroup",
    component: () => import("@/views/ApplyGroup/ApplyGroup.vue"),
    meta: {
      tag: ''
    }
  },
  {
    path: "/message/applyGroup/applyGroupValidate",
    name: "ApplyGroupValidate",
    component: () => import("@/views/ApplyGroupValidate/ApplyGroupValidate.vue"),
    meta: {
      tag: ''
    }
  },
  {
    path: "/message/chatInterface",
    name: "ChatInterFace",
    component: () => import("@/views/ChatInterface/ChatInterface.vue"),
    meta: {
      tag: ''
    }
  },
  {
    path: "/message/chatInterface/groupInfo",
    name: "GroupInfo",
    component: () => import("@/views/GroupInfo/GroupInfo.vue"),
    meta: {
      tag: ''
    }
  },
  {
    path: "/message/chatInterface/personInfo",
    name: "PersonInfo",
    component: () => import("@/views/PersonInfo/PersonInfo.vue"),
    meta: {
      tag: ''
    }
  },
  {
    path: "/message/chatInterface/personInfo/editRemark",
    name: "EditRemark",
    component: () => import("@/views/EditRemark/EditRemark.vue"),
    meta: {
      tag: ''
    }
  },
  {
    path: "/message/searchFriend",
    name: "SearchFriend",
    component: () => import("@/views/SearchFriend/SearchFriend.vue"),
    meta: {

    }

  },
  {
    path: "/message/searchGroup",
    name: "SearchGroup",
    component: () => import("@/views/SearchGroup/SearchGroup.vue"),
    meta: {}

  },
  {
    path: "/message/createGroup",
    name: "CreateGroup",
    component: () => import("@/views/CreateGroup/CreateGroup.vue"),
    meta: {}

  },
  {
    path: '/message/addFriend',
    name: 'AddFriend',
    component: () => import("@/views/AddFriend/AddFriend.vue"),
    meta: {
      tage: ''
    }
  },
  {
    path: '/message/addFriend/applyFriendValidate',
    name: 'ApplyFriendValidate',
    component: () => import("@/views/ApplyFriendValidate/ApplyFriendValidate.vue"),
    meta: {
      tage: ''
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/views/Contact/Contact.vue"),
    meta: {
      tag: 'contact'
    }
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import("@/views/Manage/Manage.vue"),
    meta: {
      tage: 'manage'
    }
  },

  {
    path: '/manage/accountSafe',
    name: 'AccountSafe',
    component: () => import("@/views/AccountSafe/AccountSafe.vue"),
    meta: {
      tage: ''
    }
  },
  {
    path: '/manage/accountSafe/editPhone',
    name: 'EditPhone',
    component: () => import("@/views/EditPhone/EditPhone.vue"),
    meta: {
      tage: ''
    }
  },
  {
    path: '/manage/accountSafe/editPassword',
    name: 'EditPassword',
    component: () => import("@/views/EditPassword/EditPassword.vue"),
    meta: {
      tage: ''
    }
  },
  {
    path: '/manage/systemMessage',
    name: 'SystemMessage',
    component: () => import("@/views/SystemMessage/SystemMessage.vue"),
    meta: {
      tage: ''
    }
  },
  {
    path: '/manage/systemMessage/applyDetail',
    name: 'ApplyDetail',
    component: () => import("@/views/ApplyDetail/ApplyDetail.vue"),
    meta: {
      tage: ''
    }
  },
  {
    path: '/message/search',
    name: 'Search',
    component: () => import("@/views/Search/Search.vue"),
    meta: {
      tag: "search"
    }
  },
  {
    path: "/manage/edit",
    name: "Edit",
    component: () => import("@/views/Edit/Edit.vue"),
    meta: {}
  },
  {
    path: "/manage/edit/editEmail",
    name: "EditEmail",
    component: () => import("@/views/EditEmail/EditEmail.vue"),
    meta: {}
  },
  {
    path: "/manage/edit/editName",
    name: "EditName",
    component: () => import("@/views/EditName/EditName.vue"),
    meta: {}
  },
  {
    path: "/manage/edit/editGender",
    name: "EditGender",
    component: () => import("@/views/EditGender/EditGender.vue"),
    meta: {}
  },
  {
    path: "/manage/edit/editAge",
    name: "EditAge",
    component: () => import("@/views/EditAge/EditAge.vue"),
    meta: {}
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login//Login.vue"),
    meta: {
      tag: ''
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }), //滚动行为：当切换到新路由的时候，将页面滚到顶部
});

export default router;
