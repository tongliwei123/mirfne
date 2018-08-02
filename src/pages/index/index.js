import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '热门推荐'
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
        <Text>爆款</Text>
      </View>
    )
  }
}

