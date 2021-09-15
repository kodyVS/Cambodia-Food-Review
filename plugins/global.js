import Vue from 'vue'
import BaseImage from '../components/utility/baseImage'

const components = { BaseImage }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
