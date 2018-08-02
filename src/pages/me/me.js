import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import "./me.scss";

export default class Me extends Component {
  config = {
    navigationBarTitleText: "购买"
  };

  state = {
    nickName: "",
    avatarUrl: ""
  };

  componentWillMount() {}

  componentDidMount() {
    Taro.getStorage({
      key: "userInfo",
      success: res => {
        console.log(res);
        this.setState({
          nickName: res.data.nickName,
          avatarUrl: res.data.avatarUrl
        });
      }
    });
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='containe'>
        <View className='imageContainer'>
          <Image className='avatar' src={this.state.avatarUrl} lazyLoad />
          <View>
          <Text>{this.state.nickName}</Text>
        </View>
        </View>
      </View>
    );
  }
}
