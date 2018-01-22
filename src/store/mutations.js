import {INCREMENT} from './types';
import getters from './getters';
import $ from 'jquery';
import moment from 'moment';

const state={
      auction: "",//竞价内容
      auction_log: "",//出价记录
      auction_log_first:"",//一条出价记录
      comment: "",//留言信息
      comment_first: "",//留言信息
      history: "",//历史竞价记录
      hotDirect:"",//最热直播
      user: "", //用户信息
      PlayTime:"",   //播放时间
      PlayTimes:"",   //播放时间
      CountDownTime:"00",//倒计时小时
      CountDownMinute:"00",//倒计时分钟
      CountDownSecond:"00",//倒计时秒钟
      videoLink:"",//观看直播
      streamUrl:'',
}
const mutations = {
	[INCREMENT](state) {
       
        let url= /*window.location.href;/*/"https://m-test-old.shikee.tv/direct_seeding/detail?aid=2293&uid=524402";
           let workfig=url.split('?')[1];
           let uid =parseInt(url.split('=')[2]); 
           let sum='';
           let aid='';
           let ds_id='';
           for(let i=0;i<workfig.length;i++){
                 if(workfig[i]=="="){
                     break
                 }else{
                   sum+=workfig[i]
                 }      
           }
           if(sum=="aid"){
               aid =parseInt(url.split('=')[1]);
           }else if(sum=="ds_id"){
               ds_id =parseInt(url.split('=')[1]);
           }
		  $.ajax({ 
                  url: "https://api.shikee.tv/auction/Detail/wx_index?",
                  type: 'post',
                  data:{
                      uid:uid,
                      aid:aid,
                      ds_id:ds_id
                  },
                   dataType: 'json',
            success: (data) => {
                console.log(data)
                    state.auction=data.data.auction;
                    state.comment=data.data.comment.data;
                    state.comment_first=data.data.comment.data[0];
                    state.user=data.data.user;
                    state.hotDirect=data.data.hot_direct;
                    console.log(state.comment_first)
                    if(data.data.video_link!=null){
                        state.videoLink=data.data.video_link;
                    }
                    if(data.data.stream_url!=null){
                          stata.streamUrl=data.data.stream_url;
                    }
                        for(let i=0;i<data.data.auction_log.data.length;i++){
                            data.data.auction_log.data[i].create_time=moment(data.data.auction_log.data[i].create_time).format("MM-DD HH:mm");
                            let  list=data.data.auction_log.data[i].nickname;
                            data.data.auction_log.data[i].nickname=list.slice(0,1)+"***"+list.slice(list.length-1,list.length)
                        }
                    state.auction_log=data.data.auction_log.data;
                    state.auction_log_first=data.data.auction_log.data[data.data.auction_log.data.length-1]
                    console.log( state.auction_log_first)
                        for(let i=0;i<data.data.history.data.length;i++){
                            data.data.history.data[i].play_time=moment(data.data.history.data[i].play_time).format("MM-DD HH:mm");
                        }   
                    state.history=data.data.history.data;       
                    state.PlayTime=moment(data.data.auction.play_time).format("MM月DD日 HH:mm");
                    state.PlayTimes=moment(data.data.auction.play_time).format("HH:mm");
                    setInterval(()=>{
                        let nowTime = new Date();
                        let endTime = new Date(data.data.auction.play_time);
                        let t = endTime.getTime() - nowTime.getTime();
                        if(t>0){
                                state.CountDownTime=Math.floor((t/3600000)%24);
                                state.CountDownMinute=Math.floor((t/60000)%60);
                                state.CountDownSecond=Math.floor((t/1000)%60);
                                state.CountDownTime=state.CountDownTime<10?("0"+state.CountDownTime):(state.CountDownTime);
                                state.CountDownMinute=state.CountDownMinute<10?("0"+state.CountDownMinute):(state.CountDownMinute);
                                state.CountDownSecond=state.CountDownSecond<10?("0"+state.CountDownSecond):(state.CountDownSecond);
                            }
                    },1000)
            }
         });
	},
};

export default {
    state,
	mutations,
	getters
}