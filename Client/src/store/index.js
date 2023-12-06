import { createStore } from "vuex";
import * as types from './types';
import {
  tokenCache,
  userInfoCache,
  sysInfoCache,
  conversationsListCache,
  allChatListCache,
  sysNewsListCache,
  friendsListCache,
  groupsListCache
} from '../utils/cache';

import { getUserInfo, getOfficialInfo } from "../api/user";

export default createStore({
  state: {
    token: tokenCache.getCache(), // 用户 token
    userInfo: userInfoCache.getCache(), // 用户 信息
    loginStatus: !!tokenCache.getCache(),
    unRead: [],
    sysInfo: sysInfoCache.getCache(),
    friendsInfo: {},
    groupInfo: {},
    conversationsList: conversationsListCache.getCache(), // 会话列表,
    curConversations: conversationsListCache.getCache()[0] || {}, // 当前会话
    OnlineUser: {}, // 在线人数
    sysNewsList: sysNewsListCache.getCache() || [], // 官方通知列表
    friendsList: friendsListCache.getCache() || [],
    groupsList: groupsListCache.getCache() || [],
    allChatList: allChatListCache.getCache() || []
  },
  getters: {},
  mutations: {
    [types.USER_INFO](state, info) {
      state.userInfo = info;
      userInfoCache.setCache(info);
    }
  },
  actions: {

    async getUserInfo({ commit, dispatch }) {
      try {
        const { code, data } = await getUserInfo();
        if (code !== 200) return;
        commit(types.USER_INFO, data);
        commit(types.CONVERSATIONS_LIST, data.conversationsListCache);
        dispatch('getSysInfo');
      } catch (error) {
        console.log("🚀 ~ file: index.js:41 ~ getUserInfo ~ error:", error);

      }
    }
  },
  modules: {},
});
