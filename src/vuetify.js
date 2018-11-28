import Vue from 'vue'
import vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// TODO: add theme (https://vuetifyjs.com/en/style/theme)
// TODO: change font

const theme = {
  primary: '#00aeef',
  secondary: '#050f34',
  accent: '#ed0f69',
  error: '#e30613',
  info: '#00aeef',
  success: '#b8c419',
  warning: '#f5c500',

  light: '#ffffff',
  dark: '#58595b',
}

Vue.use(vuetify, { theme })
