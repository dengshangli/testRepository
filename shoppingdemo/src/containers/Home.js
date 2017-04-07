import React from 'react'
import Nav from '../components/Nav'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Home
