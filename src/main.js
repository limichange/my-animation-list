// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'normalize.css'

import './styles/index.less'
import './styles/point.less'
import './styles/rotate.less'
import './styles/move.less'
import './styles/scale.less'
import './styles/bubble.less'
import './styles/shake.less'
import './styles/swing.less'
import './styles/fade.less'
import './styles/spin.less'
import './styles/fold.less'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
