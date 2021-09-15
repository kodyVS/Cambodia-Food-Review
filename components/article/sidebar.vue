<template>
  <div class="side-bar">
    <div class="side-bar__new-posts">
      <div class="side-bar__title side-bar__title--new-post">
        Check out our latest posts
      </div>
      <div
        v-for="(post, index) in newPosts"
        :key="index"
        class="side-bar__new-posts__post"
      >
        <ArticleCard :post="post"></ArticleCard>
      </div>
    </div>
    <div class="side-bar__social">
      <div class="side-bar__title">Follow us on Facebook</div>
    </div>
    <div class="side-bar__popular">
      <div class="side-bar__title">Popular articles</div>
    </div>
    <div class="side-bar__email">
      <div class="side-bar__title">subscribe to hear the latest</div>
    </div>
  </div>
</template>
<script>
import { getNewPosts } from '../../api/posts'
import ArticleCard from '../utility/article-card.vue'
export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      newPosts: [],
    }
  },
  async fetch() {
    this.newPosts = await getNewPosts(5)
  },
}
</script>

<style lang="scss">
.side-bar {
  &__title {
    font-size: 1.3rem;
    &--new-post {
    }
  }
  &__new-posts {
    &__post {
      margin: 1.3rem 0;
      padding: 0 1rem;
    }
  }
}
</style>
