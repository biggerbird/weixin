export default {
	//竞价内容
	auction: (state) => {
		return state.auction;
	},
	//最新出价信息
	auction_log:(state)=>{
		 return state.auction_log
	},
	//最新出价信息一条
	auction_log_first:(state)=>{
		 return state.auction_log_first
	},
	//留言信息
    comment:(state)=>{ 
		return state.comment
	},
	//留言信息一条
    comment_first:(state)=>{ 
		return state.comment_first
	},
	//历史竞价记录
    history:(state)=>{ 
		return state.history
	},
	 //用户信息
    user:(state)=>{ 
		return state.user
	},
	//播放时间
    PlayTime:(state)=>{
		 return state.PlayTime
	}, 
	//倒计时小时
    CountDownTime:(state)=>{
		 return state.CountDownTime
	},
	//倒计时分钟
    CountDownMinute:(state)=>{ 
		return state.CountDownMinute
	},
	//倒计时秒钟
    CountDownSecond:(state)=>{ 
		return state.CountDownSecond
	},
}