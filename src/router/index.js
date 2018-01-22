import Vue from 'vue';
import Router from 'vue-router';
import Weixin from '../views/weixin/Weixin.vue';
import BidDetails from '../views/weixin/BidDetails.vue'
import CommentDetails from '../views/weixin/CommentDetails.vue'
import player from '../views/weixin/player.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Weixin',
      component: Weixin,
    },
     {
      path: '/bidDetails',
      name: 'BidDetails',
      component: BidDetails,
    },
     {
      path: '/commentDetails',
      name: 'CommentDetails',
      component: CommentDetails
    },
     {
      path: '/player',
      name: 'player',
      component: player
    }
  ]
})
