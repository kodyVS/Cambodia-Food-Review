<template>
  <v-card @click="$router.push('/' + post.slug)" class="feature">
    <div class="feature__image--wrap">
      <BaseImage
        :image="post.feature_image"
        :img-class="'feature__image'"
        :pixels-h="1000"
        :pixels-w="'auto'"
        :img-alt="'Title Image'"
      ></BaseImage>
      <!-- <img class="feature__image" :src="post.feature_image" alt="Title Image" /> -->
      <div class="feature__image__overlay">
        <v-row no-gutters
          ><v-col
            ><p class="feature__image__section ml-3 mt-3">Latest post</p></v-col
          >
        </v-row>
        <v-row no-gutters justify="end">
          <v-col cols="auto">
            <h2 class="feature__image__title mr-12">{{ post.title }}</h2>
          </v-col></v-row
        >
        <v-row no-gutters class="mt-3" justify="end">
          <v-col cols="11" sm="7" md="5">
            <p class="feature__image__description white1--text">
              {{ descriptionDisplayed }}
            </p></v-col
          >
        </v-row>
        <v-row justify="end" no-gutters>
          <v-col cols="auto mr-12">
            <v-btn
              :to="{ path: `/${post.slug}` }"
              small
              rounded
              class="white1--text feature__image__readmore"
              >Read More<v-icon right>mdi-arrow-right</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <v-row
          v-if="
            $vuetify.breakpoint.name === 'xl' ||
            $vuetify.breakpoint.name === 'lg' ||
            $vuetify.breakpoint.name === 'md'
          "
          align="end"
          justify="end"
          class="mb-1 mr-1"
          no-gutters
        >
          <v-col cols="auto">
            <v-chip
              v-for="(tag, index) in tagsDisplayed"
              :key="index"
              :to="tag.slug ? '/search/' + tag.slug : '/'"
              label
              small
              color="black1"
              class="feature__image__tag"
              dark
            >
              {{ tag.name }}
            </v-chip>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  props: { post: { type: Object, default: () => {} } },

  data() {
    return {}
  },
  computed: {
    tagsDisplayed: function () {
      let tags = [...this.post.tags]
      if (tags.length > 5) {
        tags = tags.slice(0, 5)
        tags.push({ name: '...' })
      }
      return tags
    },
    descriptionDisplayed: function () {
      let description = this.post.custom_excerpt
      if (description.length > 120) {
        description = description.substr(0, 170) + '...'
      }
      return description
    },
  },
  methods: {
    iconColor(num) {
      return 'blue'
    },
  },
}
</script>
<style lang="scss">
.feature {
  //IMAGE
  &__image {
    height: 20rem;
    object-fit: cover;
    object-position: 50% 75%;
    //WRAP FOR THE IMAGE. OVERLAYS INFRONT OF IMAGE
    &--wrap {
      height: 20rem;
      margin: 0 auto;
      position: relative;
      width: 100%;
    }
    &--wrap:after {
      content: '';
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      background-image: linear-gradient(
          240deg,
          rgba(0, 0, 0, 0.8) 0%,
          rgba(0, 0, 0, 0.288) 36.04%
        ),
        linear-gradient(
          241.28deg,
          rgba(0, 0, 0, 0.46) 37.95%,
          rgba(0, 0, 0, 0.3) 101.63%
        );
    }
    //IMAGE INFORMATION
    //IMAGE TITLE
    &__overlay {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      & > *:not(:last-child) {
        flex: 0 !important;
      }
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: white;
      z-index: 1;
    }
    &__title {
      font-size: 1.7rem;
      font-weight: 400;
      text-align: center;
      margin-top: -2px;
    }
    &__description {
      font-size: 1rem;
      margin-right: 0.5rem;
    }
    &__tag {
      margin-left: 5px;
      text-transform: uppercase;
      &:hover {
        cursor: pointer;
      }
    }
    &__readmore {
      background-image: linear-gradient(to bottom, #3d3d39, rgb(20, 20, 20));
    }
  }
  .v-btn__content {
    margin: 0 8px;
  }
}
</style>
