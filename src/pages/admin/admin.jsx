import React, {Component} from 'react';
import memoryUtils from "../../utils/memoryUtils";
import {Redirect} from "react-router-dom";

class Admin extends Component {

  render() {
    const user = memoryUtils.user
    console.log(user)
    if ((!user._id)) {
      return <Redirect to='/login'/>
    }

    return (
      <div>
        admin组件
      </div>
    );
  }
}

export default Admin;