<template>
  <div class="sliders">
    <h3 class="mt-7" style="color: #f46f30">
      <v-icon left :color="iconColor">{{ icon }}</v-icon> {{ title }}
    </h3>
    <v-slide-group
      class="pa-4"
      active-class="success"
      :show-arrows="$vuetify.breakpoint.smAndUp"
    >
      <v-slide-item
        v-for="(slider, index) in sliders"
        :key="index"
        class="sliders__slider"
      >
        <v-card
          nuxt
          link
          :to="slider.link"
          :class="
            $vuetify.breakpoint.mdAndUp
              ? 'sliders__card ma-4'
              : 'sliders__card ma-1'
          "
          :height="$vuetify.breakpoint.mdAndUp ? 190 : 120"
          :width="$vuetify.breakpoint.mdAndUp ? 220 : 110"
        >
          <BaseImage
            :image="slider.image"
            :height="250"
            :pixels-h="500"
            :pixels-w="'auto'"
          ></BaseImage>
          <div class="sliders__card__overlay">
            <h4 class="sliders__card__overlay__text white--text">
              {{ slider.title }}
            </h4>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </div>
</template>
<script>
export default {
  props: ['sliders', 'title', 'icon', 'iconColor'],
}
</script>
<style lang="scss">
.sliders {
  &__card {
    position: relative;
    overflow: hidden;

    &__overlay {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.78) 0%,
        rgba(0, 0, 0, 0.17) 100%
      );
      z-index: 5;

      &__text {
        font-size: 1.6rem;
        font-weight: 300;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .sliders {
    &__card {
      position: relative;
      overflow: hidden;
      &__overlay {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.78) 0%,
          rgba(0, 0, 0, 0.17) 100%
        );
        z-index: 5;
        &__text {
          font-size: 1.1rem !important;
          font-weight: 300;
          text-align: center;
        }
      }
    }
  }
}
</style>
