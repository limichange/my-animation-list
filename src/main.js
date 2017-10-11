// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './styles/index.less'
import './styles/point.less'
import './styles/rotate.less'
import './styles/move.less'
import './styles/move2.less'
import './styles/scale.less'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
