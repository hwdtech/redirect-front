import React from 'react'


const Header = () => (
    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" >hwdtech/redirect-front</a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><a>Settings</a></li>
            <li><a>Help</a></li>
          </ul>
          <form className="navbar-form navbar-right">
            <input type="text" className="form-control" placeholder="Search..."/>
          </form>
        </div>
      </div>
    </div>
)

export default Header