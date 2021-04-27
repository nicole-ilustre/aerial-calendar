import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { userInfo } from './LogIn'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'
import { ifAuthenticated } from './Authenticated'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    return (
      <div>
        <ifAuthenticated>
          <img className= "logo-header" src='./images/aerial-logo.png' />
          <Menu size='tiny'>
            <div className="header item">Welcome, {userInfo.username}</div>
            <Menu.Item as={ Link } to='/home/schedule'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={ Link } to='/home/account'
              name='account'
              active={activeItem === 'account'}
              onClick={this.handleItemClick}
            />
            <Menu.Item as={ Link } to='/home/schedule/bookedClasses'
              name='my classes'
              active={activeItem === 'my classes'}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position='right'>
              <Menu.Item>
                <Link to={'/'}><Button primary onClick={logOff}>Log Out</Button></Link>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </ifAuthenticated>
      </div>
    )
  }
}
