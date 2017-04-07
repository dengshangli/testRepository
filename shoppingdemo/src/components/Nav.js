import React from 'react'
import {Link} from 'react-router'
import { Menu } from 'antd'

const Nav = () => (
   <Menu mode="horizontal">
      <Menu.Item><Link to="/">欢迎页</Link></Menu.Item>
      <Menu.Item><Link to="/ShoppingContainer">商品页</Link></Menu.Item>
      <Menu.Item><Link to="/CartContainer">购物车</Link></Menu.Item>
    </Menu>
)

export default Nav


