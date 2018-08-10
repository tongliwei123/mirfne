import Taro, { Component } from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import "./me.scss";
import me from '../../images/me.jpg'

export default class Me extends Component {
  config = {
    navigationBarTitleText: "联系我们"
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='container'>
          <Image className='background' mode='widthFix' src={me} lazyLoad />
      </View>
    );
  }
}
