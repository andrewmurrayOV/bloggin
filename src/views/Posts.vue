<template>
  <div>
    <h1>PaRTY</h1>
    <ul>
      <li v-for="post of Posts" :key="post.id">{{ post.title }}</li>
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

  get  Posts(): Post[] {
    return this.$store.state.posts
  }


   created() {
     this.$store.dispatch('getPosts')
  }
}
</script>

<style>
</style>




