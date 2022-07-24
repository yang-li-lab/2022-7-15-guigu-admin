import React, {Component} from 'react';
import memoryUtils from "../../utils/memoryUtils";
import {Redirect, Route, Switch} from "react-router-dom";
import {Layout} from 'antd';
import Header from "../../components/header";
import LeftNav from "../../components/left-nav";
import Category from "../category/category";
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";
import Home from "../home/home";
import Product from "../product/product";
import Role from "../role/role";
import User from "../user/user"
import Order from "../order/order"

const {Footer, Sider, Content} = Layout;

class Admin extends Component {

  render() {
    const user = memoryUtils.user
    console.log(user)
    if ((!user._id)) {
      console.log(1)
      return <Redirect to='/login'/>
    }

    return (
      <Layout style={{height: "100%"}}>
        <Sider>
          <LeftNav/>
        </Sider>
        <Layout>
          <Header>
          </Header>
          <Content style={{margin: "20px", backgroundColor: "#fff"}}>
            <Switch>
              <Route path='/home' component={Home}/>
              <Route path='/category' component={Category}/>
              <Route path='/product' component={Product}/>
              <Route path='/role' component={Role}/>
              <Route path='/user' component={User}/>
              <Route path='/charts/bar' component={Bar}/>
              <Route path='/charts/line' component={Line}/>
              <Route path='/charts/pie' component={Pie}/>
              <Route path='/order' component={Order}/>
              <Redirect to='/home'/>
            </Switch>
          </Content>
          <Footer style={{textAlign: "center", color: 'black', backgroundColor: 'pink'}}>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Admin;