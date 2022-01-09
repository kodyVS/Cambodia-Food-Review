<template>
  <v-app dark>
    <ContactUs :model="dialog" :dialogType="dialogType"></ContactUs>
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      clipped
      fixed
      app
    >
      <v-icon
        x-large
        color="primary"
        class="drawer__close"
        @click="drawer = !drawer"
        >mdi-close</v-icon
      >
      <v-list class="mt-12">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="mt-2 nav__link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="true" fixed flat app>
      <v-row class="app-bar__content" no-gutters>
        <v-col v-if="size.small" cols="auto"
          ><v-app-bar-nav-icon @click.stop="drawer = !drawer"
        /></v-col>
        <v-col md="auto">
          <!-- <v-toolbar-title
            @click="$router.push('/')"
            v-text="
              $vuetify.breakpoint.mdAndUp ? 'Cambodia Food Review' : 'CFR'
            "
          /> -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="3.4rem"
            v-if="$vuetify.breakpoint.mdAndUp"
            viewBox="0 0 1221.69 209.98"
          >
            <defs>
              <style>
                .cls-1 {
                  fill: #ff4f2a;
                }
                .cls-2 {
                  fill: #ff1a26;
                }
                .cls-3 {
                  fill: #ffb833;
                }
                .cls-4,
                .cls-5 {
                  fill: #f46f30;
                }
                .cls-5 {
                  font-size: 91.21px;
                  font-family: Poppins-SemiBold, Poppins;
                  font-weight: 600;
                }
              </style>
            </defs>
            <title>Logo6</title>
            <g id="Layer_1" data-name="Layer 1">
              <path
                class="cls-1"
                d="M139.88,256.84c16.06-15.13,32,68.22,45.72,95.17C179,388,146,266.16,139.88,256.84Z"
                transform="translate(-108.16 -255.02)"
              />
              <rect
                class="cls-2"
                x="72.18"
                y="164.25"
                width="61.98"
                height="7.19"
              />
              <path
                class="cls-3"
                d="M140.05,390c-1.16-.74,16.33-65.49,36.18-63,17.78,2.22,25.5,56.95,24.72,57.29s-8.13-43.83-24.12-45.83C158.51,336.14,141.14,390.68,140.05,390Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-3"
                d="M184.83,394.51c-48,2.51,40.66-72.94,44.75-39.48C208.27,352.44,174.62,372.73,184.83,394.51Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-3"
                d="M197.74,391.45c-36,3.32,18.28-42.3,19.6-19.67-.09,4.11-1.05-1-14.79,4.85C198.16,380.27,197.36,383,197.74,391.45Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-3"
                d="M216,391.45c-.3,0,68.52,0,69.27,0C283.87,327.29,213.51,341.89,216,391.45Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-3"
                d="M205.65,337.11C138,350.18,133.45,413,157.07,401.67,138.12,329.53,308.87,339,205.65,337.11Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-1"
                d="M108.16,276.36c4.09-29.36,50.33,53.45,70,71,5.58,3.3-3.18,9.16-4.64,11Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-4"
                d="M127.48,370.17c0,30.46,37.54,55.14,83.85,55.14l7.29-27.57-7.29-27.57Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-1"
                d="M211.33,370.17v55.14c46.31,0,83.85-24.68,83.85-55.14Z"
                transform="translate(-108.16 -255.02)"
              />
              <text x="-108.16" y="-255.02" />
              <path
                class="cls-3"
                d="M257,218"
                transform="translate(-108.16 -255.02)"
              />
            </g>
            <g id="Layer_2" data-name="Layer 2">
              <text
                class="cls-5"
                transform="translate(216.52 155.89) scale(0.92 1)"
              >
                Cambodia Food Review
              </text>
              <text x="-108.16" y="-255.02" />
            </g>
          </svg>
          <svg
            v-else
            height="2.8rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 630.89 220.11"
          >
            <defs>
              <style>
                .cls-1 {
                  fill: #ff4f2a;
                }
                .cls-2 {
                  fill: #ff1a26;
                }
                .cls-3 {
                  fill: #ffb833;
                }
                .cls-4,
                .cls-5 {
                  fill: #f46f30;
                }
                .cls-5 {
                  font-size: 110px;
                  font-family: Poppins-SemiBold, Poppins;
                  font-weight: 600;
                }
              </style>
            </defs>
            <title>Logo Small2</title>
            <g id="Layer_1" data-name="Layer 1">
              <path
                class="cls-1"
                d="M139.88,256.84c16.06-15.13,32,68.22,45.72,95.17C179,388,146,266.16,139.88,256.84Z"
                transform="translate(-108.16 -255.02)"
              />
              <rect
                class="cls-2"
                x="72.18"
                y="164.25"
                width="61.98"
                height="7.19"
              />
              <path
                class="cls-3"
                d="M140.05,390c-1.16-.74,16.33-65.49,36.18-63,17.78,2.22,25.5,56.95,24.72,57.29s-8.13-43.83-24.12-45.83C158.51,336.14,141.14,390.68,140.05,390Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-3"
                d="M184.83,394.51c-48,2.51,40.66-72.94,44.75-39.48C208.27,352.44,174.62,372.73,184.83,394.51Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-3"
                d="M197.74,391.45c-36,3.32,18.28-42.3,19.6-19.67-.09,4.11-1.05-1-14.79,4.85C198.16,380.27,197.36,383,197.74,391.45Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-3"
                d="M216,391.45c-.3,0,68.52,0,69.27,0C283.87,327.29,213.51,341.89,216,391.45Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-3"
                d="M205.65,337.11C138,350.18,133.45,413,157.07,401.67,138.12,329.53,308.87,339,205.65,337.11Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-1"
                d="M108.16,276.36c4.09-29.36,50.33,53.45,70,71,5.58,3.3-3.18,9.16-4.64,11Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-4"
                d="M127.48,370.17c0,30.46,37.54,55.14,83.85,55.14l7.29-27.57-7.29-27.57Z"
                transform="translate(-108.16 -255.02)"
              />
              <path
                class="cls-1"
                d="M211.33,370.17v55.14c46.31,0,83.85-24.68,83.85-55.14Z"
                transform="translate(-108.16 -255.02)"
              />
              <text x="-108.16" y="-255.02" />
              <path
                class="cls-3"
                d="M257,218"
                transform="translate(-108.16 -255.02)"
              />
            </g>
            <g id="Layer_2" data-name="Layer 2">
              <text
                class="cls-5"
                transform="translate(222.52 154.88) scale(0.92 1)"
              >
                C F R
              </text>
              <text x="-108.16" y="-255.02" />
            </g>
          </svg>
        </v-col>
        <v-spacer></v-spacer>
        <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="auto" md="auto">
          <ul class="nav__links">
            <li class="nav__list-item">
              <NuxtLink to="/" class="nav__link"> Home </NuxtLink>
            </li>
            <li class="nav__list-item">
              <NuxtLink to="/about" class="nav__link">About Us</NuxtLink>
            </li>
            <li class="nav__list-item">
              <NuxtLink to="/categories/cuisines" class="nav__link"
                >Cuisines</NuxtLink
              >
            </li>
            <li class="nav__list-item">
              <NuxtLink to="/categories/dishes" class="nav__link"
                >Dishes</NuxtLink
              >
            </li>
          </ul></v-col
        >

        <!-- <v-col cols="3" md="2"> -->
        <!-- <v-autocomplete
            v-model="search"
            class="nav__search mr-4"
            chips
            clearable
            dense
            hide-details
            hide-selected
            item-text="name"
            item-value="symbol"
            label="Search..."
            solo
          /> -->
        <!-- </v-col> -->
        <v-col cols="auto">
          <v-btn
            color="primary"
            rounded
            v-bind="size"
            class="white1--text nav__contact-us"
            @click="subscribe('contact')"
            >Contact us!</v-btn
          >
        </v-col>
        <!-- <v-col cols="auto">
          <v-icon size="40" color="blue" class="nav__icon--facebook"
            >mdi-facebook</v-icon
          >
          <v-icon size="40" color="transparent" class="nav__icon--instagram"
            >mdi-instagram</v-icon
          ></v-col
        > -->
      </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <div class="subscribe-button">
      <button
        small
        class="subscribe-button__button"
        @click="subscribe('subscribe')"
      >
        Subscribe
      </button>
    </div>
  </v-app>
</template>

<script>
import ContactUs from '../components/utility/contact-us.vue'
// import { getPostsFiltered } from '../api/posts.js'
export default {
  components: {
    ContactUs,
  },
  // For testing
  // async created() {
  //   const posts = await getPostsFiltered(['curry', 'rice'])
  //   console.log(posts)
  // },
  data() {
    return {
      dialog: false,
      dialogType: 'contact',
      search: '',
      select: '',
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-account',
          title: 'About Us',
          to: '/about',
        },
        {
          icon: 'mdi-flag',
          title: 'Cuisines',
          to: '/categories/cuisines',
        },
        {
          icon: 'mdi-silverware-fork-knife',
          title: 'Dishes',
          to: '/categories/dishes',
        },
      ],
      title: 'Cambodia Food Review',
      smallTitle: 'CFR',
    }
  },
  computed: {
    size() {
      const size = { xs: 'small', sm: 'small', lg: 'large', xl: 'x-large' }[
        this.$vuetify.breakpoint.name
      ]
      return size ? { [size]: true } : {}
    },
  },
  methods: {
    subscribe(dialogType) {
      this.dialogType = dialogType
      this.dialog = !this.dialog
    },
  },
}
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';
// VUETIFY STYLES
.v-toolbar__title {
  font-weight: 600;
  font-size: 1.5rem !important;
  color: rgb(68, 28, 1) !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-image: linear-gradient(
    180deg,
    #ebebeb -14%,
    rgb(255, 255, 255) 95.15%
  );
}
//LOCAL STYLES
.app-bar {
  &__content {
    align-items: center;
    flex-wrap: nowrap;
  }
}
.subscribe-button {
  position: fixed;
  bottom: 10px;
  right: 20px;
  &__button {
    background-color: #f46f30;
    color: white;
    border-radius: 5px;
    padding: 5px;
  }
}
.drawer {
  position: relative;
  &__close {
    position: absolute !important;
    top: 5px;
    right: 10px;
  }
}
.nav {
  &__links {
    display: flex;
    font-size: 1.1rem;
    text-transform: uppercase;
    margin-right: 3rem;
  }
  &__list-item {
    list-style: none;
    margin: 3px;
    margin-left: 8px;
  }
  &__link {
    text-decoration: none;
    font-weight: 500;
    margin-left: 1rem;
    color: #111 !important;
    color: rgb(68, 28, 1) !important;
  }
  &__contact-us {
    margin: 0 15px 0 15px;
  }
  &__search {
    opacity: 0.6;
    transition: all 0.2s;
    &:hover,
    &:active {
      opacity: 1;
    }
  }
  &__icon {
    &--facebook {
      //color: blue !important;
    }
    &--instagram {
      //color: transparent !important;
      background: linear-gradient(
        180deg,
        #332aa3 0%,
        rgba(244, 111, 48, 0.77) 100%
      );
      background-clip: text;
    }
  }
}
@media #{map-get(
    $display-breakpoints,
    'md-and-down'
  )} {
  .nav {
    &__contact-us {
      margin-left: 2px;
    }
  }
}
.nuxt-link-exact-active {
  color: rgba(244, 111, 48) !important;
  border-bottom: 1px solid rgba(244, 111, 48, 0.77);
}
</style>
