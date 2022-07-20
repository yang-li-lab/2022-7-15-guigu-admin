/**
 * 入口
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/reset.css"
import storageUtils from "./utils/storageUtils";
import memoryUtils from "./utils/memoryUtils";

const user = storageUtils.getUser()
memoryUtils.user = user


// 将app组件渲染到index的div中
ReactDOM.render(<App/>, document.getElementById('root'))