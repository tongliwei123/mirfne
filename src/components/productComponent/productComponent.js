import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './productComponent.scss'
import copy from '../../images/copy.jpg'

export default class ProductComponent extends Component {

  render () {
    return (
      <View className='container'>
        <Image src={copy} className='product' />
      </View>
    )
  }
}

