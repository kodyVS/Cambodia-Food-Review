<template>
  <div class="article full-width">
    <h1 class="mt-10 article__title">
      {{ post.title }}
    </h1>
    <div class="article__date">Posted {{ formattedDate }}</div>
    <div class="article__date">
      Name:
      <a :href="post.codeinjection_head" target="blank">{{
        post.codeinjection_foot
      }}</a>
    </div>
    <div class="article__date">
      Location:
      <a :href="post.codeinjection_head" target="blank">{{
        post.codeinjection_head
      }}</a>
    </div>
    <div class="article__social">
      <p>Share:</p>
      <a
        class="article__link"
        :href="
          'https://www.facebook.com/sharer/sharer.php?u=https://www.cambodiafoodreview.com/' +
          post.slug
        "
        target="_blank"
      >
        <v-icon size="35" color="blue">mdi-facebook</v-icon>
      </a>
    </div>
    <BaseImage
      :image="post.feature_image"
      :img-class="'article__feature-image'"
      :pixels-h="2000"
      :pixels-w="'auto'"
    ></BaseImage>
    <!-- <v-img class="article__feature-image" :src="post.feature_image"></v-img> -->
    <div class="article__author">
      <img
        :src="post.authors[0].profile_image"
        class="article__author__image"
      />
      <div class="article__author__name">{{ post.authors[0].name }}</div>
    </div>
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
  components: {
    SideBar,
  },
  async asyncData({ params }) {
    const post = await getSinglePost(params.slug)
    return { post }
  },
  head() {
    return {
      title: this.post.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.meta_description,
        },
        // "og_image": null,
        // "og_title": null,
        // "og_description": null,
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.feature_image,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.post.meta_title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.post.meta_description,
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article',
        },
      ],
    }
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
  &__author {
    margin-left: 20px;
    display: flex;
    align-items: center;
    &__image {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    &__name {
      margin-left: 10px;
      color: rgb(105, 39, 0);
      font-weight: 500;
    }
  }
  &__link {
    text-decoration: none;
    border: none;
  }
  &__social {
    display: flex;
    justify-content: right;
    color: rgb(80, 80, 80);
    margin-right: 2rem;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 3px;
    p {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 0;
      margin-right: 0.3rem;
    }
  }
  &__feature-image {
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
      height: 40rem;
      background-size: 100%;
      margin-bottom: 2rem;
      // background-attachment: fixed;
    }
    &__content {
      grid-column: 2 / 12;
      font-size: 1.2rem;
    }
    &__social {
      margin-right: 2rem;
      align-items: center;
      margin-top: 3rem;
      margin-bottom: 3px;
      p {
        text-align: center;
        font-size: 1rem;
        margin-bottom: 0;
        margin-right: 0.3rem;
      }
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
      font-size: 1rem;
    }
    &__sidebar {
      grid-column: 1 / 13;
      margin: 2rem 0;
      font-size: 1rem;
    }
  }
}
</style>
