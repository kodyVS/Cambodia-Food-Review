<template>
  <div class="about-us">
    <h1 class="about-us__title">{{ page.title }}</h1>
    <div class="about-us__text" v-html="page.html"></div>
  </div>
</template>
<script>
import { getPage } from '~/api/posts'
export default {
  async asyncData() {
    const page = await getPage('about')
    return { page }
  },
  head() {
    return {
      title: this.page.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.meta_description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content:
            'https://res-5.cloudinary.com/www-cambodiafoodreviews-com/image/upload/q_auto/v1/blog-images/175758975_10159313124929820_2792132313351479549_n.jpg',
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.page.meta_title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.page.meta_description,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
.about-us {
  font-size: 1.2rem;
  position: relative;
  &__title {
    display: block;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 10rem;
  }
  p:nth-child(1),
  p:nth-child(2) {
    width: 60%;
    min-height: 11rem;
  }
  .kg-image {
    height: 18rem;
    width: auto;
    position: absolute;
    border-radius: 30%;
    top: 7rem;
    right: 0;
    border: 1px solid rgb(168, 168, 168);
  }
}

@media #{map-get(
    $display-breakpoints,
    'md-and-down'
  )} {
  .about-us {
    font-size: 1.2rem;
    position: relative;
    &__title {
      display: block;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 4rem;
      margin-top: 5rem;
    }
    p:nth-child(1),
    p:nth-child(2) {
      width: 100%;
      padding: 0 2rem;
      min-height: 11rem;
      font-size: 1rem;
    }
    .kg-image {
      height: 18rem;
      width: auto;
      margin: 0 auto 2.2rem auto;
      display: block;
      position: static;
      border-radius: 30%;
      top: 7rem;
      right: 0;
      border: 1px solid rgb(168, 168, 168);
    }
  }
}
</style>
