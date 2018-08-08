import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/me/me',
      'pages/hot/hot'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#00B36A',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
        text: "所有商品",
        iconPath: "images/production.png",
        selectedIconPath: "images/production-selected.png"
      },
      {
        pagePath: "pages/hot/hot",
        text: "推荐爆款",
        iconPath: "images/hot.png",
        selectedIconPath: "images/hot.png",
      },
      {
        pagePath: "pages/me/me",
        text: "联系我们",
        iconPath: "images/contact.png",
        selectedIconPath: "images/contact-selected.png"
      }]
  }
}

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))