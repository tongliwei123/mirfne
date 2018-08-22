import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './hot.scss'
import jpg1 from '../../images/1.jpg'
import jpg2 from '../../images/2.jpg'
import jpg3 from '../../images/3.jpg'
import jpg4 from '../../images/4.jpg'
import jpg5 from '../../images/5.jpg'
// import jpg6 from '../../images/6.jpg'
// import jpg7 from '../../images/7.jpg'

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
      <View className='masonry'>
        <View className='item'>
          <Image mode='aspectFit' className='item-content' src={jpg2} />
        </View>
        <View className='item'>
          <Image mode='aspectFit' className='item-content' src={jpg3} />
        </View>
        <View className='item'>
          <Image mode='aspectFit' className='item-content' src={jpg4} />
        </View>
        <View className='item'>
          <Image mode='aspectFit' className='item-content' src={jpg5} />
        </View>
        {/* <View className='item'>
          <Image mode='aspectFit' className='item-content' src={jpg6} />
        </View>
        <View className='item'>
          <Image mode='aspectFit' className='item-content' src={jpg7} />
        </View> */}
        <View className='item'>
          <Image mode='aspectFit' className='item-content' src={jpg1} />
        </View>
      </View>
    )
  }
}

export default Hot;

