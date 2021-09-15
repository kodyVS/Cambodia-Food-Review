<template>
  <div class="article full-width">
    <div class="article__date">{{ post.feature_image_caption }}</div>
    <h1 class="mt-10 article__title">{{ post.title }}</h1>
    <div class="article__date">Posted {{ formattedDate }}</div>
    <BaseImage
      :image="post.feature_image"
      :img-class="'article__feature-image'"
      :pixels-h="2000"
      :pixels-w="'auto'"
    ></BaseImage>
    <!-- <v-img class="article__feature-image" :src="post.feature_image"></v-img> -->
    <main>
      <div class="article__body">
        <div class="article__content">
          <div v-html="post.html"></div>
        </div>
        <div class="article__sidebar">
          <SideBar></SideBar>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import SideBar from '../../components/article/sidebar.vue'
import { getSinglePost } from '~/api/posts'
export default {
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug)
    console.log(post)
    return { post }
  },
  components: {
    SideBar,
  },
  computed: {
    formattedDate() {
      return this.$moment(this.post.updated_at).format('dddd, MMMM Do YYYY')
    },
  },
}
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
.kg-image {
  width: 90%;
  height: auto;
}
.article {
  &__title {
    font-size: 3rem;
    display: block;
    text-align: center;

    &::after {
      content: '';
      border-bottom: rgb(255, 94, 0) 4px solid;
      margin: 1rem auto 0 auto;
      width: 8%;
      display: block;
    }
  }
  &__date {
    font-size: 0.9rem;
    margin-top: 1rem;
    display: block;
    text-align: center;
    font-weight: 600;
  }
  &__feature-image {
    margin-top: 5rem;
    height: 60rem;
    background-size: 100%;
    margin-bottom: 2rem;
    // background-attachment: fixed;
  }
  &__body {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 1rem;
  }
  &__content {
    grid-column: 2/9;
    font-size: 1.15rem;
    line-height: 1.6;
  }
  &__sidebar {
    grid-column: 9/ -1;
    margin: 2rem 0;
  }
}
@media #{map-get(
    $display-breakpoints,
    'md-and-down'
  )} {
  .article {
    &__feature-image {
      margin-top: 5rem;
      height: 40rem;
      background-size: 100%;
      margin-bottom: 2rem;
      // background-attachment: fixed;
    }
    &__content {
      grid-column: 2 / 12;
      font-size: 1.1rem;
    }
    &__sidebar {
      grid-column: 3 / 12;
      margin: 2rem 0;
    }
  }
}
@media #{map-get(
    $display-breakpoints,
    'sm-and-down'
  )} {
  .article {
    &__feature-image {
      margin-top: 5rem;
      height: 25rem;
      background-size: 100%;
      margin-bottom: 2rem;
      // background-attachment: fixed;
    }
    &__body {
      display: grid;
    }
    &__content {
      grid-column: 2 / 12;
      font-size: 0.8rem;
    }
    &__sidebar {
      grid-column: 1 / 13;
      margin: 2rem 0;
      font-size: 1rem;
    }
  }
}
</style>
