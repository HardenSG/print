<template>
  <view>
    <text class="header">
      八零五打印店
    </text>
    <button type="default" @click="upload">
      上传文件
    </button>
    <button type="default" @click="pay">
      支付
    </button>
  </view>
</template>

<script>
  export default {  
    data() {
      return {
        
      }
    },
    methods: {
      upload(){
        uni.chooseMessageFile({
          count:5,
          success:(res)=>{
            console.log(res)
          }
        })
      },
      pay(){
        uni.requestPayment({
            provider: 'wxpay',
        	timeStamp: String(Date.now()),
        	nonceStr: 'A1B2C3D4E5',
        	package: 'prepay_id=wx6836fb3c447f8868',
        	signType: 'MD5',
        	paySign: '',
        	success: function (res) {
        		console.log('success:' + JSON.stringify(res));
        	},
        	fail: function (err) {
        		console.log('fail:' + JSON.stringify(err));
        	}
        });
      }
    }
  }
</script>

<style lang="less">
  .header{
    display: block;
    width: 100%;
    height: 60rpx;
    font-size: 32rpx;
    text-align: center;
    line-height: 30px;
    background-color: #999;
  }
  button{
    width: 150rpx;
    height: 70rpx;
    line-height: 35px;
    border: 1px solid #666;
  }
</style>
