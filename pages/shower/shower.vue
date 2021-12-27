<template>
	<view>
		<image class="imshow":src="this.npath">
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dotype:'player',
				npath:"/static/test2.jpg",
			}
		},
		onLoad(e) {
			let _this = this;
			if (e.dotype != undefined) this.dotype = e.dotype;
			console.log("(shower)这是啥？",e);
			let that = this;
			that.npath = e.index; // 字符串转对象
			console.log("到底行不行？",that.npath);
		},
		methods: {
			
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
