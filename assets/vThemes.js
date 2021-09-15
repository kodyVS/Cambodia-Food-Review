import colors from 'vuetify/es5/util/colors'

export const themes = {
  dark: {
    primary: colors.blue.darken2,
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    black1: '#171717',
  },
  light: {
    primary: '#f46f30',
    accent: colors.grey.lighten3,
    secondary: colors.amber.lighten3,
    info: colors.teal.darken1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3,
    textPrimary: '#171717',
    white1: '#EDEDED',
    black1: '#171717',
    yellow: '#ef2',
  },
  myCustomTheme: {
    primary: colors.black,
  },
}
