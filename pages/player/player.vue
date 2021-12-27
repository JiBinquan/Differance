<template>
	<view>
		<image class="imshow":src="this.npath">
	</view>
</template>

<script>
import setnum from "../../common/setnum.js";
let _this = null;
	export default {
		data() {
			return {
				dotype:'player',
				paths:[],
				npath:"/static/bgimg.png",
				timer:null,
			}
		},
		onLoad(e) {
			_this = this;
			if (e.dotype != undefined) this.dotype = e.dotype;
			console.log("这是啥？",e);
			let that = this;
			that.paths = JSON.parse(e.index); // 字符串转对象
			console.log("到底行不行？",that.paths);
		},
		onShow(){
			this.flash();
		},
		onUnload(){
			if(this.timer) {  
				clearInterval(this.timer);  
				this.timer = null;  
			}  
		},
		methods:{
			flash:function(){
				var jsc = 0;
				var nl = this.paths.length;
				console.log("nl ", nl);
				this.timer = setInterval(()=>{
					this.npath = this.paths[jsc];
					console.log("jsc ", jsc);
					console.log("np  ", this.npath);
					console.log("sp  ", setnum.change_speed);
					console.log("op  ", setnum.opacity_num);
					jsc = (jsc + 1) % nl;					
				},setnum.change_speed)//500ms一切图				
			}
		}
	}
</script>

<style>
	.imshow{
		width: 750rpx;
		height: 1625rpx;
		/*height: 1459rpx;*/
	}
</style>