<template>
  <v-img
    :src="imageDisplayed"
    :height="height"
    :class="imgClass"
    :alt="imgAlt"
    :lazy-src="imagePlaceholder"
  ></v-img>
</template>
<script>
export default {
  props: [
    'image',
    'height',
    'imgClass',
    'imgAlt',
    'imgAlteration',
    'pixelsH',
    'pixelsW',
  ],
  computed: {
    imagePlaceholder() {
      if (this.image) {
        const placeHolder = this.image.split('/upload/')
        return placeHolder[0] + '/upload/w_30,h_30/' + placeHolder[1]
      }
      return this.image
    },
    imageDisplayed() {
      const sizedImage = this.image.split('/upload/')
      let pixelsWidth = ''
      let pixelsHeight = ''
      if (this.pixelsW) {
        pixelsWidth = 'w_' + this.pixelsW
      }
      if (this.pixelsH) {
        pixelsHeight = 'h_' + this.pixelsH
      }
      return (
        sizedImage[0] +
        '/upload/' +
        pixelsWidth +
        ',' +
        pixelsHeight +
        '/' +
        sizedImage[1]
      )
    },
    halfed() {
      // if (!this.srcset) {
      //   return undefined
      // }
      const sizedImage = this.image.split('/upload/')
      let pixelsWidth = ''
      let pixelsHeight = ''
      if (!isNaN(this.pixelsW)) {
        pixelsWidth = 'w_' + this.pixelsW / 2
      } else {
        pixelsWidth = 'w_' + this.pixelsW
      }
      if (!isNaN(this.pixelsH)) {
        pixelsHeight = 'h_' + this.pixelsH / 2
      } else {
        pixelsHeight = 'h_' + this.pixelsH
      }
      return (
        sizedImage[0] +
        '/upload/' +
        pixelsWidth +
        ',' +
        pixelsHeight +
        '/' +
        sizedImage[1]
      )
    },
  },
}
</script>
