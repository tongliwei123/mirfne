import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/me/me',
      'pages/complaints/complaints'
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
        text: "爆款",
        iconPath: "images/home.png",
        selectedIconPath: "images/home-selected.png"
      },
      {
        pagePath: "pages/complaints/complaints",
        text: "品牌",
        iconPath: "images/speak.png",
        selectedIconPath: "images/speak-selected.png"
      },
      {
        pagePath: "pages/me/me",
        text: "我的",
        iconPath: "images/me.png",
        selectedIconPath: "images/me-selected.png"
      }]
  }
}

  componentDidMount () {
    Taro.login({
      success: (res) => {
        if(res.code){
          Taro.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx3b6b7304c0f0dfbc&secret=81257993b9a62c838671a4097a227636&js_code=${res.code}&grant_type=authorization_code`,
            success: (resp) => {
              console.log(resp.data.openid)
              if(resp.data && resp.data.openid) {
                Taro.setStorage({key:'openid', data: resp.data.openid});
                Taro.getUserInfo({
                  success: (user) => {
                    if(user && user.userInfo) {
                      Taro.setStorage({
                        key: 'userInfo',
                        data: user.userInfo
                      })
                    }
                  }
                })
              }
            }
          })
        }
      }
    })
  }

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