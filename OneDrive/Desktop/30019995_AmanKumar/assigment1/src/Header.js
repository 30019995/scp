import React, { Component } from "react";


class Header extends Component
{
    render()
    {
        return(
          <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="index.html">
              <img src="img/scp.jpg" alt="" width="200" height="100" className="d-inline-block align-text-top"></img>
              
            </a>
            <h1>SCP FOUNDATION</h1>
          </div>
        </nav>
        );
    }
}

export default Header;