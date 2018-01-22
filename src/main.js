import Vue from 'vue';
import router from './router'
import App from './App.vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from './store';
import 'video.js/dist/video-js.css'


import VueVideoPlayer from 'vue-video-player';
import 'vue-video-player/src/custom-theme.css'

Vue.use(Mint);Vue.use(VueVideoPlayer);
new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
