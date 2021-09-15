<template>
  <div class="post" @click="$router.push('/' + post.slug)">
    <BaseImage
      :image="post.feature_image"
      :img-class="'post__image'"
      :pixels-h="400"
      :pixels-w="'auto'"
    ></BaseImage>
    <div class="post__text">
      <div class="post__title">{{ post.title }}</div>
      <div class="post__description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post'],
  computed: {
    description() {
      let desc = this.post.excerpt
      if (desc.length > 120) {
        desc = desc.substr(0, 120) + ' ...'
      }
      return desc
    },
  },
}
</script>
<style lang="scss">
.post {
  display: flex;
  width: 100%;
  margin: 5px 0;
  background-color: rgb(255, 255, 255);
  &__image {
    flex: 0 0 7rem;
    border-radius: 10px;
    margin-right: 1rem;
  }
  &__title {
    font-weight: 600;
    margin-bottom: 5px;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
