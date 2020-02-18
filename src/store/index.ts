import Vue from "vue";
import Vuex from "vuex";
import { Post } from '@/interfaces/Post'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [] as Post[]
  },
  mutations: {
    getPosts(state, posts: Post[]) {
      state.posts = posts;
      console.log(state.posts)
    }
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await result.json();
        commit('getPosts', posts)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
});
