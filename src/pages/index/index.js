import Taro, { Component } from "@tarojs/taro";
import { View, Swiper,Text, SwiperItem, Image } from "@tarojs/components";
import "./index.scss";
// import ProductComponent from "../../components/productComponent/productComponent";
import banner1 from "../../images/banner1.png"

export default class Index extends Component {
  config = {
    navigationBarTitleText: "所有商品"
  };

  componentWillMount() {}

  componentDidMount() {
    console.log("this is a miniprogram");
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View>
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
          interval={2000}
        >
          <SwiperItem>
            <Image className='banner' src={banner1} />
          </SwiperItem>
          <SwiperItem>
            <Image className='banner' src={banner1} />
          </SwiperItem>
          <SwiperItem>
            <Image className='banner' src={banner1} />
          </SwiperItem>
        </Swiper>
        <View className='productContainer'>
          <View className='title'>为爱出击</View>
          <View className='products'>
            <View className='left'>
              <Image className='product' src={banner1} />
              <View className='bagName'>包包11111</View>
            </View>
            <View className='right'>
              <Image className='product' src={banner1} />
              <View className='bagName'>包包22222</View>
            </View>
          </View>
          <View className='products'>
            <View className='left'>
              <Image className='product' src={banner1} />
              <View className='bagName'>包包33333</View>
            </View>
            <View className='right'>
              <Image className='product' src={banner1} />
              <View className='bagName'>包包4444</View>
            </View>
          </View>
        </View>
        {/* <View className='footer'>footer</View> */}
      </View>
    );
  }
}
