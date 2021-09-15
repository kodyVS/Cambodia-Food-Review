<template>
  <v-app dark>
    <ContactUs :model="dialog"></ContactUs>
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
          <v-toolbar-title
            @click="$router.push('/')"
            v-text="
              $vuetify.breakpoint.mdAndUp ? 'Cambodia Food Review' : 'CFR'
            "
          />
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
            @click="dialog = !dialog"
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
  </v-app>
</template>

<script>
import ContactUs from '../components/utility/contact-us.vue'
export default {
  components: {
    ContactUs,
  },
  data() {
    return {
      dialog: false,
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
