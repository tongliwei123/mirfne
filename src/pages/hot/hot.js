import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './hot.scss'

class Hot extends Component {
  config = {
    navigationBarTitleText: '爆款推荐'
  }

  componentWillMount () { }

  componentDidMount () { 
    console.log('this is a miniprogram')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        所有品牌
      </View>
    )
  }
}

export default Hot;

