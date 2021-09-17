<template>
  <div class="full-width">
    <div class="home">
      <Location></Location>
      <Feature :post="posts[0]"></Feature>
      <Cuisine></Cuisine>
      <Dish></Dish>
    </div>
  </div>
</template>
<script>
import Location from '../components/home/Location.vue'
import Dish from '../components/home/Dish.vue'
import Feature from '../components/home/Feature.vue'
import Cuisine from '../components/home/Cuisine.vue'

import { getNewPosts } from '~/api/posts'

export default {
  components: {
    Location,
    Dish,
    Feature,
    Cuisine,
  },
  async asyncData() {
    const posts = await getNewPosts(1)
    return { posts }
  },
  head() {
    return {
      title: 'Home Page',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Welcome to Cambodia Food Review! Here we write articles for finding the best places to chow down in Cambodia with our easy to navigate platform. `,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Home Page',
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `Welcome to Cambodia Food Review! Here we write articles for finding the best places to chow down in Cambodia with our easy to navigate platform.`,
        },
      ],
    }
  },
  data() {
    return {
      posts: {},
    }
  },
}
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
.home {
  margin: 0 13rem;
}
@media #{map-get(
    $display-breakpoints,
    'md-and-down'
  )} {
  .home {
    margin: 0 3px;
  }
}
</style>
