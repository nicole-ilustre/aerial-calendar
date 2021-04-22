import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { userInfo } from './LogIn'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div>
      <img className= "logo-header" src='./images/aerial-logo.png' />
      <Menu size='tiny'>
        <div className="header item">Welcome, {userInfo.username}</div>
        <Link to={'/home/schedule'}><Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        /></Link>
        <Link to={'/home/account'}><Menu.Item
          name='account'
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
        /></Link>
        <Link to={'/home/schedule/bookedClasses'}><Menu.Item
          name='my classes'
          active={activeItem === 'my classes'}
          onClick={this.handleItemClick}
        /></Link>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to={'/'}><Button primary>Log Out</Button></Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
    )
  }
}
