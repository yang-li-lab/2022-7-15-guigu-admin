import React, {Component} from 'react';
import "./login.less"
import logo from './images/logo.png'
import {Form, Icon, Input, Button} from 'antd';

class Login extends Component {
  handleSubmit = (event) => {
    const {validateFields} = this.props.form;

    event.preventDefault()
    validateFields((error, values) => {
      console.log(error, values)
    })
  }


  render() {
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
              })(
                <Input
                  prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{required: true, message: 'Please input your Password!'}]
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
 */
export default Form.create()(Login);