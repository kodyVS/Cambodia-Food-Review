<template>
  <Slider :sliders="cuisines" :title="'Cuisines'"></Slider>
</template>
<script>
import Slider from '../utility/Slider'
export default {
  components: {
    Slider,
  },
  data() {
    return {
      cuisines: [
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630559205/Cambodia%20food%20review/Cuisines/Cambodia_xlpd4k.jpg',
          title: 'Cambodian',
          link: '/search/Cambodian',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630559205/Cambodia%20food%20review/Cuisines/USA_hkgxmi.jpg',
          title: 'Western',
          link: '/search/Western',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630559205/Cambodia%20food%20review/Cuisines/Vietnam_sgryuw.jpg',
          title: 'Vietnamese',
          link: '/search/Vietnamese',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630559206/Cambodia%20food%20review/Cuisines/Korean_bsdu1s.jpg',
          title: 'Korean',
          link: '/search/Korean',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1631688962/Cambodia%20food%20review/Cuisines/Japan_jgu4d2.jpg',
          title: 'Japanese',
          link: '/search/Japanese',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1631688948/Cambodia%20food%20review/Cuisines/nick-fewings-BAZejJdZ57w-unsplash_m21cya.jpg',
          title: 'See more',
          link: '/categories/cuisines',
          position: '',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.cuisines {
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
        //font-size: 1.1rem;
        font-weight: 300;
      }
    }
  }
}
@media screen and (max-width: 1000px) {
  .cuisines {
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
        }
      }
    }
  }
}
</style>
