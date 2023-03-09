import React, { Component } from 'react'
import PropTypes from 'prop-types'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

  render() {
    return (
      <div>
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div>
                        <a href="http://" className='navbar-brand'>Student Management</a>
                    </div>
                </nav>
            </header>
      </div>
    )
  }
}

export default HeaderComponent
