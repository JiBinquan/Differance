<template>
	<view>
		<view class="ct">这是一个简单的设置页面</view>
		<view class="ct">别乱改啊，这个鲁棒性不高</view>
		<view style="height: 60rpx;"></view>
		<view>请输入延时摄影切换速度(单位:毫秒,默认500)</view>
		<uni-easyinput v-model="value1" placeholder="请输入延时摄影切换速度(单位:毫秒,默认500)" ></uni-easyinput>
		<view>请输入相机蒙版透明度(0-1之间,默认0.4)</view>
		<uni-easyinput v-model="value2" placeholder="请输入相机蒙版透明度(0-1之间,默认0.4)" ></uni-easyinput>
		<view>请输入自定义水印</view>
		<uni-easyinput v-model="value3" placeholder="请输入自定义水印" ></uni-easyinput>
		<button @click="cs">我改好了</button>
	</view>
</template>

<script>
	import setnum from "../../common/setnum.js";
	export default {
		data() {
			return {
				dotype:'seter',
				value1:500,
				value2:0.4,
				value3:"延异_differance",
			}
		},
		onUnload(){
			this.ccs();
		},
		methods: {
			cs(){
				console.log("v1",this.value1);
				console.log("v2",this.value2);
				if(this.value1 >= 100){
					setnum.change_speed = this.value1;
				}
				
				if(0 <= this.value2 && this.value2 <= 1){
					setnum.opacity_num = this.value2;
				}
				setnum.my_watermark = this.value3;
				console.log("change_speed",setnum.change_speed);
				console.log("opacity_num",setnum.opacity_num);
				uni.navigateBack();
			},
			ccs(){
				console.log("v1",this.value1);
				console.log("v2",this.value2);
				if(this.value1 >= 100){
					setnum.change_speed = this.value1;
				}
				
				if(0 <= this.value2 && this.value2 <= 1){
					setnum.opacity_num = this.value2;
				}
				setnum.my_watermark = this.value3;
				console.log("change_speed",setnum.change_speed);
				console.log("opacity_num",setnum.opacity_num);
			},
		}
	}
</script>

<style>
	.ct{
		text-align: center;
	}
</style>
