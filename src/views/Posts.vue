<template>
  <div>
    <h1>PaRTY</h1>
    <ul>
      <li v-for="post of posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";
import { Post } from "@/interfaces/Post";

@Component({
  components: {}
})
export default class Posts extends Vue {
  private posts: Post[];
  constructor() {
    super();
    this.posts = [];
  }

  async created() {
    try {
      this.posts = await this.$store.dispatch("getPosts");
      console.log(this.posts)
    } catch (error) {
      console.error(error);
    }
  }
}
</script>

<style>
</style>




