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
            <Button primary>Log Out</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
