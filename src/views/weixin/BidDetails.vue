<template>
    <div> 
        <mt-header fixed title="竞价列表">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <h1>
            竞价
        </h1>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';

export default {
            computed:mapGetters([
                'auction_log',//最新出价信息
                ]),
                methods:{
                   
                }
        }
</script>
<style type="text/scss" lang="scss"  scoped>
    @import '../../style/weixin.scss';
    @import '../../style/comment.scss';
</style>