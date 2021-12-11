<template>
  <v-dialog v-model="dialog">
    <div class="contact-us">
      <v-alert v-model="alert" type="success" dense class="contact-us__alert">
        success!
      </v-alert>
      <v-icon
        large
        class="contact-us__icon"
        color="black"
        @click="dialog = !dialog"
        >mdi-close</v-icon
      >
      <v-row>
        <v-col cols="12" md="6" order="2">
          <v-form
            ref="form"
            v-model="valid"
            class="contact-us__form"
            lazy-validation
          >
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              type="text"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              type="email"
              required
            ></v-text-field>

            <v-textarea v-model="message" label="How can we connect?" no-resize>
            </v-textarea>
            <v-btn color="orange white--text" class="mr-4" @click="validate">
              Send
            </v-btn>
            <v-progress-circular
              v-if="loading"
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-form>
        </v-col>
        <v-col cols="12" md="6" order="1" order-md="3">
          <v-row align="center" justify="center">
            <v-col cols="12"></v-col>
            <h2 class="contact-us__text">
              <span class="start">Looking to connect? </span><br />Planning a
              trip and want some advice?
              <br />

              Want us to come review your restaurant? <br />Send us and email or
              reach us on our social media
            </h2>
            <a
              href="https://www.facebook.com/CambodiaFoodReview"
              class="contact-us__facebook"
              target="_blank"
              text
            >
              <v-icon size="50" color="blue">mdi-facebook</v-icon>
            </a>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-dialog>
</template>
<script>
export default {
  props: ['model'],
  data() {
    return {
      dialog: false,
      name: '',
      valid: '',
      message: '',
      nameRules: [(v) => !!v || 'Name is required'],
      email: '',
      loading: false,
      alert: false,
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  watch: {
    model: function () {
      this.dialog = !this.dialog
    },
  },
  methods: {
    validate() {
      try {
        if (this.$refs.form.validate()) {
          // this.loading = true
          // await this.$mail.send({
          //   from: 'kodyvansloten@hotmail.com',
          //   subject: 'Contact form message',
          //   text: this.name + ' ' + this.email + ' ' + this.message,
          // })
          this.loading = false
          // this.dialog = !this.dialog
          this.alert = true
          setTimeout(() => {
            this.alert = false
          }, 3000)
        } else {
          alert('nope')
        }
      } catch (err) {
        this.loading = false
      }
    },
  },
}
</script>
<style lang="scss">
@import '~vuetify/src/styles/styles.sass';

.contact-us {
  background-color: white;
  background-image: url('../../assets/img/dialog-background.png');
  background-size: cover;
  background-position: center;
  height: 90vh;
  overflow: hidden;
  padding: 5rem;
  display: flex;
  align-items: center;
  position: relative;
  &__alert {
    position: absolute !important;
    display: block;
    bottom: 0px;
    right: 5px;
  }
  &__form {
  }
  &__facebook {
    text-decoration: none;
    border: none;
  }
  &__icon {
    position: absolute !important;
    top: 15px;
    right: 15px;
  }
  &__text {
    width: 100%;
    margin: 0 6rem;
    .start {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
    text-align: center;
  }
}
@media #{map-get(
    $display-breakpoints,
    'md-and-down'
  )} {
  .contact-us {
    background-color: white;
    height: 90vh;
    overflow: hidden;
    padding: 1rem;
    display: flex;
    align-items: center;
    position: relative;
    &__form {
      padding: 1rem 3rem 0 3rem;
    }
    &__text {
      .start {
        font-size: 2rem;
      }
      font-size: 1rem;
      text-align: center;
    }
  }
}
@media #{map-get(
    $display-breakpoints,
    'sm-and-down'
  )} {
  .contact-us {
    height: auto;
    padding-top: 4rem;
    &__form {
      padding: 1rem 1rem 0 1rem;
    }
    &__text {
      margin: 0 1rem;
      .start {
        font-size: 2rem;
      }
      font-size: 1rem;
      text-align: center;
    }
  }
}
</style>
