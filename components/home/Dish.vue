<template>
  <Slider :sliders="dishes" :title="'Dishes'"></Slider>
</template>
<script>
import Slider from '../utility/Slider'
export default {
  components: {
    Slider,
  },
  data() {
    return {
      dishes: [
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630562985/Cambodia%20food%20review/Dishes/PXL_20210823_055434589_sm2o2a.jpg',
          title: 'Soup',
          link: '/search/Soup',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630563000/Cambodia%20food%20review/Dishes/PXL_20210814_091040616_x2hj7d.jpg',
          title: 'Seafood',
          link: '/search/Seafood',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630560727/Cambodia%20food%20review/Dishes/Rice_tfmjjh.webp',
          title: 'Rice',
          link: '/search/Rice',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630563004/Cambodia%20food%20review/Dishes/Fried_Chicken_xtkffn.jpg',
          title: 'Fried Chicken',
          link: '/search/Fried-chicken',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1630563058/Cambodia%20food%20review/Dishes/Streetfood-2_rvlykl.jpg',
          title: 'Street Food',
          link: '/search/Street-food',
          position: '',
        },
        {
          image:
            'https://res.cloudinary.com/www-cambodiafoodreviews-com/image/upload/v1631689184/Cambodia%20food%20review/Cuisines/shayda-torabi-3iexvMShGfQ-unsplash_o9rli3.jpg',
          title: 'See more',
          link: '/categories/dishes',
          position: '',
        },
      ],
    }
  },
}
</script>
<style lang="scss"></style>
