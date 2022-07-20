import React, {Component} from 'react';
import "./login.less"
import logo from './images/logo.png'
import {Form, Icon, Input, Button, message} from 'antd';
import {reqLogin} from "../../api";
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import {Redirect} from "react-router-dom";

class Login extends Component {
  handleSubmit = (event) => {
    const {validateFields} = this.props.form;

    event.preventDefault()
    validateFields(async (error, values) => {
      if (error) {
        return
      } else {
        let result = await reqLogin(values)
        const user = result.data
        if (result.status === 0) {
          message.success('登录成功')
          console.log(result)
          memoryUtils.user = user
          storageUtils.saveUser(user)
          this.props.history.replace('/')
        } else {
          message.error('登录失败')
        }
      }
    })
  }

  render() {
    const user = memoryUtils.user
    if (user && user._id) {
      return <Redirect to='/admin'/>
    }


    const form = this.props.form;
    let {getFieldDecorator} = form

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt=""/>
          <h2>React项目: 后台管理系统</h2>
        </header>
        <div className="login-container">
          <h2 className="title">用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                // 声明时验证
                rules: [
                  {required: true, whitespace: true, message: 'Please input your username!'},
                  {min: 4, message: 'username at least 4'},
                  {max: 12, message: 'username不能超过12位'},
                  {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是字母数字'}
                ],
                initialValue: 'admin'
              })(
                <Input
                  prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'Please input your Password!'}], initialValue: 'admin'
              })(<Input
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                type="password"
                placeholder="Password"
              />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

/**
 * 高阶函数
 * 接收函数类型的参数，函数的返回值是一个函数
 * 常见的高阶函数
 * 1. 定时
 * 2. Promise  then
 * 3. 数组的相关  forEach  filter  map  reduce find  findIndex
 * 4. bind  闭包
 *
 *
 * 高阶组件
 * 1. 高阶组件本质就是一个函数
 * 2. 接收一个组件（被包装组件），返回一个新的组件（包装组件），新组件内部渲染被包装组件
 * 3. 高阶组件也是一个高阶函数
 *
 *
 *
 * async  await
 * 作用？
 * 简化promise的使用，不用使用.then 指定回调
 * 以同步编码（没有回调函数）方式实现一步流程
 *
 *
 *
 */
export default Form.create()(Login);