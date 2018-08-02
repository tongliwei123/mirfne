import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './complaints.scss'

class Complaints extends Component {
  config = {
    navigationBarTitleText: '品牌分类'
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

export default Complaints;

