<template>
  <div class="categories">
    <h2 class="capitalize mb-4">{{ $route.params.categories }}</h2>
    <v-row justify="center" class="mb-10">
      <v-col md="6">
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          hide-details
        ></v-text-field>
      </v-col>
    </v-row>
    <div class="categories__cards">
      <v-card
        v-for="(card, index) in filteredList"
        :key="index"
        class="categories__card"
        :to="'/search/' + card.slug"
      >
        <BaseImage
          :image="card.feature_image"
          :img-class="'categories__card__img'"
          :height="'100px'"
          :pixels-h="200"
          :pixels-w="'auto'"
        ></BaseImage>
        <!-- <v-img :src="card.feature_image" height="100px"></v-img> -->
        <v-card-title class="categories__card__title capitalize">{{
          card.name
        }}</v-card-title>
        <v-card-subtitle>articles: {{ card.count.posts }}</v-card-subtitle>
      </v-card>
    </div>
  </div>
</template>
<script>
import { getTagCount } from '~/api/posts'
export default {
  async asyncData({ params }) {
    const cards = await getTagCount(params.categories)
    const title = params.categories
    return { cards, title }
  },
  data() {
    return {
      search: '',
      search1: '',
      price: ['$', '$$', '$$$'],
      test: 'hello',
      description: `Search here for the different ${this.title} we have experienced. Find the location of your next food adventure.`,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.description,
        },
      ],
    }
  },

  computed: {
    filteredList() {
      return this.cards.filter((card) => {
        return card.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  created() {
    // this.search = this.$route.params.categories
  },
}
</script>
<style lang="scss" scoped>
.categories {
  &__cards {
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    grid-template-rows: 200px;
    gap: 2.5rem;
  }
  &__card {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    transition: all 0.5s;
    background-color: rgb(247, 247, 247);
    &__img {
      width: 100%;
    }
    &:hover {
      transform: translateY(-3px);
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }
  }
  @media screen and (max-width: 500px) {
    .categories {
      &__cards {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(2, 150px);
        gap: 0.8rem;
      }
      &__card {
        &__title {
          font-size: 1rem !important;
        }
      }
    }
  }
}
</style>
