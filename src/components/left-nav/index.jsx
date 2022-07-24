import React, {Component} from 'react';
import logo from '../../assets/images/logo.png'
import {Icon, Menu} from 'antd';
import './index.less'
import {Link, withRouter} from "react-router-dom";
import menuList from "../../config/menuConfig";

const {SubMenu} = Menu

class LeftNav extends Component {


  state = {
    menuList: []
  };

  /**
   * 根据menu的数据生成对应的标签数组
   * @param menuList
   */
  getMenuNode = (menuList) => {
    let path = this.props.location.pathname
    return menuList.map((item) => {
      if (!item.children) {
        return (<Menu.Item key={item.key}>
          <Link to={item.key}>
            <Icon type={item.icon}/>
            <span>{item.title}</span>
          </Link>
        </Menu.Item>)
      } else {

        // 查找一个与当前请求路径匹配的子Item
        const cItem = item.children.find(cItem => cItem.key === path)
        // 如果存在, 说明当前item的子列表需要打开
        if (cItem) {
          this.openKey = item.key
        }

        return (<SubMenu
          key={item.key}
          title={
            <span>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </span>
          }
        >
          {this.getMenuNode(item.children)}
        </SubMenu>)
      }
    })
  }


  componentDidMount() {
    this.setState({
      menuList: this.getMenuNode(menuList)
    })
  }

  render() {
    /**
     * 得到当前的路由路径
     */
    this.getMenuNode(menuList)
    let path = this.props.location.pathname

    return (
      <div className='left-nav'>
        <Link to="/" className='left-nav-header'>
          <img src={logo} alt=""/>
          <h1>硅谷后台</h1>
        </Link>
        <Menu
          selectedKeys={[path]}
          defaultOpenKeys={[this.openKey]}
          mode="inline"
          theme="dark"
        >
          {this.state.menuList}
        </Menu>
      </div>
    );
  }
}

/**
 * 高阶组件，向给路由组件传递3个属性
 * history/props/match
 */

export default withRouter(LeftNav);