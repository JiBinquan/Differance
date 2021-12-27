<template>
	<view class="content" :style="{background: 'url('+imageURL+')'}">
		<view class="page">
		
			<view style="height: 850rpx;"></view>
			
			<navigator url="../camera/camera"><button class="buttons" type="plain">拍摄第一张照片！</button></navigator>
			<view style="height: 60rpx;"></view>
			
			<button class="buttons" type="plain" ripple=true @click="bsimg">上传基础图片并继续拍摄</button>
			<view style="height: 60rpx;"></view>

			<button class="buttons" type="plain" @click="img">播放延时摄影</button>
			<view style="height: 130rpx;"></view>
			
			<button class="setbtn" @click="navtoset">设置</button>
			<!--<view>拍摄结果预览图，见下方</view>-->
			<!--<image  class="preview" :src="imagesrc" mode="aspectFit" style="width:710rpx:height:710rpx;margin: 20rpx;"></image>-->
			<!-- 下面这行不显示，但是不要动……应该是只有显示了缩略图之后才会调用存储函数，但是我懒得改了…… -->
			<canvas id="canvas-clipper" canvas-id="canvas-clipper" type="2d" :style="{width: canvasSiz.width+'px',height: canvasSiz.height+'px',position: 'absolute',left:'-500000px',top: '-500000px'}" />
		
		</view>
	</view>	
</template>

<script>
	var _this;
	import setnum from "../../common/setnum.js"
export default {
	data() {
		return {
			imageURL:"/static/bgimg3x.png",
			windowWidth:'',
			windowHeight:'',
			imagesrc: null,
			canvasSiz:{
				width:188,
				height:273
			}
		};
	},
	onLoad() {
		_this= this;
		this.init();
	},
	onShow() {
		console.log("ind: change_speed",setnum.change_speed);
		console.log("ind: opacity_num",setnum.opacity_num);
		console.log("ind: my_watermark",setnum.my_watermark);
	},
	methods: {
		
		bsimg(){
			uni.chooseImage({
				// count:  允许上传的照片数量
				count:1,
				// sizeType:  original 原图，compressed 压缩图，默认二者都有
				sizeType: "original",
				success(bsi){
					console.log("bsi",bsi)
					console.log("path能不能访问？",bsi.tempFilePaths[0])
					let that = this;
					var navData = JSON.stringify(bsi.tempFilePaths[0]);
					uni.navigateTo({
						url:"../camera/watermark/watermark?index="+navData+'&tmdop='+setnum.opacity_num
					})
				}
			});
		},
		
		img(){
			uni.chooseImage({
				// count:  允许上传的照片数量
				count:50,
				// sizeType:  original 原图，compressed 压缩图，默认二者都有
				sizeType: "original",
				success(res){
					console.log(res)
					let that = this;
					var navData = JSON.stringify(res.tempFilePaths);
					uni.navigateTo({
						url:"../player/player?index="+navData
					})
					// uni.previewImage({
					// 	// 对选中的图片进行预览
					// 	urls: res.tempFilePaths,
					// 	// urls:['','']  图片的地址 是数组形式
					// })
					
				}
			});
		},
		
		navtoset(){
			uni.navigateTo({
				url:"../settingpage/settingpage"
			})
		},
		
		//设置图片
		setImage(e) {
			console.log(e);
			//显示在页面
			//this.imagesrc = e.path;
			if(e.dotype != ('player' || 'seter')){
				_this.watermark(e.path);
			}
		},
		
		
		//添加照片水印
		watermark(path){
			uni.getImageInfo({
				src: path,
				success: function(image) {
					console.log(image);
					
					_this.canvasSiz.width =image.width;
					_this.canvasSiz.height =image.height;
					
					//担心尺寸重置后还没生效，故做延迟
					setTimeout(()=>{
						let ctx = uni.createCanvasContext('canvas-clipper', _this);
						
						ctx.drawImage(
							path,
							0,
							0,
							image.width,
							image.height
						);
						
						//具体位置如需和相机页面上一致还需另外做计算，此处仅做大致演示
						ctx.setFillStyle('white');
						ctx.setFontSize(40);
						ctx.fillText(setnum.my_watermark, 20, 100);
						
						
						//再来加个时间水印
						var now = new Date();
						var time= now.getFullYear()+'-'+now.getMonth()+'-'+now.getDate()+' '+now.getHours()+':'+now.getMinutes()+':'+now.getMinutes();
						ctx.setFontSize(30);
						ctx.fillText(time, 20, 140);

						ctx.draw(false, () => {
							uni.canvasToTempFilePath(
								{
									destWidth: image.width,
									destHeight: image.height,
									canvasId: 'canvas-clipper',
									fileType: 'jpg',
									success: function(res) {
										_this.savePhoto(res.tempFilePath);
									}
								},
								_this
							);
						});
					},500)
					
					
				}
			});
		},
		
		//保存图片到相册，方便核查
		savePhoto(path){
			this.imagesrc = path;
			//保存到相册
			uni.saveImageToPhotosAlbum({
				filePath: path,
				success: () => {
					uni.showToast({
						title: '已保存至相册',
						duration: 2000
					});
					var navData = path;
					console.log("地址有没有？",navData)
					uni.navigateTo({
						url:"../shower/shower?index="+navData
					})
				}
			});
		},
		
		//初始化
		init(){
			let _this = this;
			uni.getSystemInfo({
				success: function(res) {
					_this.windowWidth = res.windowWidth;
					_this.windowHeight = res.windowHeight;
				}
			});
		}
		
	}
};
</script>

<style lang="scss">
	.page {
		width: 750rpx; 
		justify-content: center;
		align-items: center;
		flex-direction:column;
		display: flex;
		.buttons {
			border-radius:20px;
			width: 500rpx;
			opacity: 0.6;
			box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
			background-color: #e7e7e7; color: black;
		}
		.setbtn{
			border-radius:25px;
			width: 135rpx;
			height: 75rpx;
			background-color: transparent; border: 0;
			box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
			font-size: 15px;
			opacity: 0.3;
			margin-right: 10px
		}
	}
	.content{
		width: 750rpx; 
		height: 1500rpx;
		display: block;
		margin: 0 auto;
	}
</style>
