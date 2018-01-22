<template>
    <div class="weixin">
           <div class="introduce">
               <div  class="introduce-box">
                   <div class="introduce-img">
                     <img :src="user.header_link" alt="">
                    </div>
                    <div class="introduce-name">
                       <div class="introduce-name-title">
                            <div class="introduce-name-title-box">
                                <ul>
                                    <li><b>{{user.nickname}}</b></li>
                                     <li><span>副主任医生</span></li>
                                    <li>
                                        <ul class="score">
                                                <li>
                                                    <img src="../../images/xxx.jpg" alt="">
                                                </li>
                                                <li>
                                                   {{user.score}}
                                                </li>
                                            </ul> 
                                    </li>
                                </ul>
                                <ul>
                                    <li v-for="item in user.skill_tag">
                                        <p>{{item.name}}</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="Authentication">
                                <img src="../../images/1.jpg" alt="">
                            </div>
                       </div>
                       <div class="introduction">
                           <p>{{user.introduction}}</p>
                       </div>
                    </div>
               </div>
            
           </div>
           <div class="title-content">
               <h4>{{auction.title}}</h4>
               <p>{{auction.summary}}</p>
           </div>
            <div class="weixin-time">
              <div>
                  <ul class="weixin-time-time">
                      <li>{{PlayTime}}</li>
                      <li>时长 {{auction.duration}} 分钟</li>
                  </ul>
                  <ul class="weixin-time-browse">
                      <li>当前价 {{ parseInt(auction.amount)}}<span></span></li>
                  </ul>
                 
              </div>
          </div>
          <h3>咨询须知</h3>
          <div class="ConsultingInstructions">
              <div>
                  <h3> <span></span> 时光豆</h3>
                  <p>换地方不是的官方海报的孙高峰好搜我更快捷回复的时光  </p>
              </div>
               <div>
                  <h3> <span></span>竞价说明</h3>
                  <p>梵蒂冈看咯挺好滴感觉人挺好客人推荐哦和利润调节孔令辉天天好突然坡航空投入品 </p>
              </div>
              <div>
                  <h3> <span></span>充值说明</h3>
                  <p>梵蒂冈看咯挺好滴感觉人挺好客人推荐哦和利润调节孔令辉天天好突然坡航空投入品 </p>
              </div>
               <div>
                  <h3> <span></span>特别提示</h3>
                  <p>给我OK浪费的价格浮动回家佛海景房口号股份开盘后恐怕更符合评估反馈化工股票符合客观分配 </p>
              </div>
          </div>
          <h3>平台保障</h3>
          <div class="PlatformSupport">
              <ul>
                  <li>
                     <p><span><img src="https://static-test-old.shikee.tv/www/img/logo.png" alt=""></span>健康GV放荡不羁克劳福德功能富可敌国拟规范地结合你该开发的</p>
                  </li>
                  <li>
                       <p><span><img src="https://static-test-old.shikee.tv/www/img/logo.png" alt=""></span>健康更柔和否定后我绕口令辅导机构我开发的机构浮雕减肥的公开了反对 </p>
                  </li>
                  <li>
                       <p><span><img src="https://static-test-old.shikee.tv/www/img/logo.png" alt=""></span>决定是否关闭少丢分hi多好的搜以后</p>
                  </li>
              </ul>
          </div>
          <h3  v-if="auction_log_first!=undefined" v-show="auction_log.length>0"><p>出价记录 <span @click="BiddingDetails()">(共{{auction_log.length}}条)</span></p></h3>
          <div class="BidRecord" v-if="auction_log_first!=undefined" v-show="auction_log.length>0">
               <div >
                   <ul class="BidRecord-newOffer-title">
                       <li>
                           <span v-if="auction_log_first.header_link!=''"><img :src="auction_log_first.header_link" alt=""></span>
                           <span v-else> <img src="https://static-test-old.shikee.tv/www/img/logo.png" alt=""></span>
                           <p></p>
                       </li>
                       <li>
                           <p>{{auction_log_first.nickname}}</p>
                       </li>
                       <li>
                          <p class="Lead">领先</p>
                       </li>
                   </ul>
                   <ul class="BidRecord-newOffer-time">
                       <li>
                          <p  class="Lead">{{parseInt(auction_log_first.amount)}} <span></span></p>
                       </li>
                   </ul>
               </div>
          </div>
          <h3><p>用户留言 <span @click="EvaluationDetails()">(共{{comment.length}}条)</span></p> <b @click="Popup()">评论</b></h3>
          <div class="AdvisoryMessage"  v-if="comment_first!=undefined" v-show="comment.length>0" >
                <div class="LeavingMessage">
                    <ul>
                        <li>
                             <span v-if="comment_first.header_link!=''"><img :src="comment_first.header_link" width="24" height="24"></span> 
                             <span v-else> <img src="https://static-test-old.shikee.tv/www/img/logo.png"  width="24" height="24"></span>
                        </li>
                        <li>
                            <h6>{{comment_first.nickname}}</h6>
                            <p>{{comment_first.create_time}} </p>
                        </li>
                        <li>
                            <b class="shou"></b><span>{{comment_first.like_num}}</span><b></b><span>>{{comment_first.by_module}}</span>
                        </li>
                    </ul>
                    <p class="LeavingMessage-p">{{comment_first.content}}</p>
                </div>
          </div>
          <h3>热门咨询</h3>
          <div class="HotConsultation">
              <div class="HotConsultation-box">
                  <div>
                      <img src="https://static-test-old.shikee.tv/www/img/logo.png" alt="">
                  </div>
                  <div>
                      <ul>
                          <li>
                              <ul>
                                    <li>李医生</li>
                                    <li>
                                       <p> 已认证</p>
                                    </li>
                                     <li>
                                        <span class="times">11月12日 9:00</span>
                                    </li>
                                </ul>
                          </li>
                         
                           <li>
                              <p class="payment">200<span></span></p>
                          </li>
                      </ul>
                      <ul>
                          <li>
                              <p class="comment">飞股份金额肉体国家可瑞康工人</p>
                          </li>
                         
                      </ul>
                  </div>
              </div>
          </div>
          <div class="footer" @click="download()">
              <p>下载应用 免费观看健康直播</p>
          </div>
          <div class="mask" v-show="modulemask">
                  <textarea rows="4" @focus="focus()" ng-value="value"></textarea>
          </div>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import $ from 'jquery';

export default {
                data () {
                return {
                  modulemask:false,
                }
            },
            computed:mapGetters([
                'auction',//竞价内容
                'auction_log',//最新出价信息
                'auction_log_first',//一条最新出价信息
                'comment',//留言信息
                'comment_first',//一条留言信息
                'history',//历史竞价记录
                'user', //用户信息
                'PlayTime',   //播放时间
                'CountDownTime',//倒计时小时
                'CountDownMinute',//倒计时分钟
                'CountDownSecond',//倒计时秒钟
                ]),
                methods:{
                     download(){
                        window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.shike.android";
                    },
                    BiddingDetails(){
                         this.$router.push('/bidDetails')
                    },
                    EvaluationDetails(){
                        this.$router.push('/commentDetails')
                    },
                    Popup(){
                       this.modulemask=true;
                    },
                    focus(){
                       this.scrollIntoView(true)
                    }
                }
        }
</script>
<style type="text/scss" lang="scss"  scoped>
    @import '../../style/weixin.scss';
    @import '../../style/comment.scss';
</style>