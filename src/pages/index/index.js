import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import ProductComponent from '../../components/productComponent/productComponent';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '所有商品'
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
        <ProductComponent class='production' />
      </View>
    )
  }
}

