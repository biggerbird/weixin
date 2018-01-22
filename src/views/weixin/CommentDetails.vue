<template>
    <div>
        <mt-header fixed title="评论列表">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <h1>评论</h1>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';

export default {
            computed:mapGetters([
                'comment',//留言信息
                ]),
                methods:{
                   
                }
        }
</script>
<style type="text/scss" lang="scss"  scoped>
    @import '../../style/weixin.scss';
    @import '../../style/comment.scss';
</style>