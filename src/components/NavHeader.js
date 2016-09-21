import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return (
      <div className="content-header">
        <a href="#"><span className="glyphicon glyphicon-align-justify"></span></a>
        <h2>Tyler's Corner</h2>
        <a href="#"><span className="glyphicon glyphicon-heart-empty"></span></a>
      </div>
    )
  }
}

export default NavHeader;
