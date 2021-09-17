<template>
  <v-container class="full-width">
    <main>
      <v-btn class="search__go-back" text @click="$router.go(-1)">
        <v-icon left dark> mdi-arrow-left-bold </v-icon>Go Back</v-btn
      >
      <h2 class="search__results">Search results for "{{ searchName }}"</h2>
      <div class="search__grid">
        <v-hover v-for="(post, index) in posts" :key="index" v-slot="{ hover }">
          <v-card
            :to="'/' + post.slug"
            :loading="loading"
            :class="{ 'card--hover': hover }"
          >
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <BaseImage
              :image="post.feature_image"
              :height="'250px'"
              :pixels-h="500"
              :pixels-w="'auto'"
            ></BaseImage>
            <!-- <v-img height="250" :src="post.feature_image"></v-img> -->

            <v-card-title>{{ post.title }}</v-card-title>

            <v-card-text class="mt-4">
              <div class="card__tags my-4 text-subtitle-1">
                <div v-for="(tag, index) in post.tags.slice(2)" :key="index">
                  {{ tag.name }}, &nbsp;
                </div>
                <div>...</div>
              </div>

              <div>{{ post.excerpt }}...</div>
            </v-card-text>
            <div class="card__actions">
              <v-divider class="mx-4"></v-divider>
              <v-card-actions>
                <v-row dense>
                  <v-col align="right">
                    <v-btn color="deep-purple lighten-2" text>
                      Read More
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-actions>
            </div>
          </v-card>
        </v-hover>
      </div>
      <div v-if="posts.length <= 0">
        <h3>No results found for "{{ searchName }}"</h3>
      </div>
    </main>
  </v-container>
</template>
<script>
import { getPosts } from '~/api/posts'
export default {
  async asyncData({ params }) {
    const posts = await getPosts(params.search)
    const searchName = params.search
    return { posts, searchName }
  },
  head() {
    return {
      title: this.searchName,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Read about all the ${this.searchName} dishes we have experienced. Find your next meal or read about our crazy adventures in Cambodia `,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.searchName,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: `Read about all the ${this.searchName} dishes we have experienced. Find your next meal or read about our crazy adventures in Cambodia `,
        },
      ],
    }
  },
  data() {
    return {
      loading: false,
    }
  },
}
</script>
<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
.search {
  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 374px);
    row-gap: 2rem;
    column-gap: 1.2rem;
    width: 90%;
    margin: 2rem auto 0 auto;
    justify-content: center;
  }
  &__go-back {
    margin-left: 5rem;
  }
  &__results {
    margin-left: 5rem;
  }
}
main {
  h2 {
    margin-top: 3em;
    text-transform: uppercase;
    font-size: 0.8em;
  }
  .v-card {
    transition: all 0.3s;
    padding-bottom: 50px;
    &__title {
      font-weight: 900;
      text-transform: capitalize;
    }
  }
  .card {
    &__tags {
      display: flex;
      flex-wrap: wrap;
      text-transform: capitalize;
    }
    &--hover {
      transform: scale(1.02) translateY(-2px);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
    }
    &__actions {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
}
@media #{map-get(
    $display-breakpoints,
    'xs-only'
  )} {
  .search {
    &__grid {
      row-gap: 2rem;
      grid-template-columns: repeat(auto-fill, 100%);
      column-gap: 0.5rem;
      width: 100%;
      margin: 2rem auto 0 auto;
      justify-content: center;
    }
    &__results {
      margin-left: 0;
    }
    &__go-back {
      margin-left: 0;
    }
  }
}
</style>
