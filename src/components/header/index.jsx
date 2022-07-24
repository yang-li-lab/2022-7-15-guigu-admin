import React, {Component} from 'react';
import memoryUtils from "../../utils/memoryUtils";
import {withRouter} from "react-router-dom";
import dateFormat from "../../utils/dateFormat"
import './index.less'
import {Modal} from 'antd';
import LinkButton from "../link-button";
import storageUtils from "../../utils/storageUtils";
import menuConfig from "../../config/menuConfig";


const {confirm} = Modal

class Header extends Component {
  state = {
    currentTime: dateFormat(Date.now()),
  }


  getTime = () => {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: dateFormat(Date.now())
      })
    }, 1000)
  }

  /**
   * 根据路由获取title
   */
  getTitle = () => {
    let path = this.props.location.pathname
    let title
    menuConfig.forEach((item) => {
      if (!item.children) {
        if (item.key === path) {
          title = item.title
        }
      } else {
        item.children.forEach((subItem) => {
          if (subItem.key === path) {
            title = subItem.title
          }
        })
      }
    })
    return title
  }

  logout = () => {

    confirm({
      title: 'Do you want to logout?',
      content: '确定要退出登录吗？',
      onOk: () => {
        memoryUtils.user = {}
        storageUtils.removeUser('_user')
        this.props.history.replace('/login')
      },
    })
  }

  componentDidMount() {
    this.getTime()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const username = memoryUtils.user.username
    let title = this.getTitle()

    return (
      <div className='header'>
        <div className='header-top'>
          <span>欢迎，{username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className='header-bottom'>
          <div className='header-bottom-left'>{title}</div>
          <div className='header-bottom-right'>
            <span>{this.state.currentTime}</span>
            <img src="" alt=""/>
            <span>晴</span>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Header);