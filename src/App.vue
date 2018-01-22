<template>
  <div id="app">
       <router-view/>
  </div>
</template>

<script>
import Weixin from "./views/weixin/Weixin.vue";
import BidDetails from './views/weixin/BidDetails.vue'
import CommentDetails from './views/weixin/CommentDetails.vue'
import player from './views/weixin/player.vue'
import {mapGetters, mapActions} from 'vuex';
import $ from 'jquery';

export default {
  name: 'app',
  data () {
    return {
    }
  },
beforeMount:function(){
        this.increment()
},
  components:{
     Weixin
  },
  methods:mapActions([
        'increment',
  ]),
}
</script>

<style lang="scss">
   @import './style/comment.scss';
</style>
