import React from "react";
import PropTypes from 'prop-types'
// import { Outlet, Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <>
    <navbar >
      <nav className={`navbar navbar-expand-lg bg-${props.modes} navbar-${props.modes}  `}>
        <div className="container-fluid">
          <img src="logo192.png" height={30} className="mx-3" />
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.home}
                </a>
              </li>
              <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#">{props.about}</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <label className={`form-check-label mx-3 text-${props.modes==='light' ? 'dark' : 'light'}`}  htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
              <input className="form-check-input mx-3 " onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>

              {/* <input className="form-check-input mx-3" onClick={props.toggle1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label mx-3 text-${props.modes==='light' ? 'dark' : 'light'}`}  htmlFor="flexSwitchCheckDefault">Toggle Mode1</label>

              
              <input className="form-check-input mx-3" onClick={props.toggle2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label mx-3 text-${props.modes==='light' ? 'dark' : 'light'}`}  htmlFor="flexSwitchCheckDefault">Toggle Mode2</label> */}
            </div>
              
          </div>
        </div>
      </nav>

    </navbar>
    {/* <Outlet/> */}
    </>
  );
}
// for checking whether the upcoming props will bve of string or not ,if not then it'll raise an error !!
Nav.propTypes={
    title : PropTypes.string
}
//  for setting default value of props
Nav.defaultProps={
    title : "Set title here"
}

// .isRequired is used if the props is neccessary to declare
Nav.propTypes={
    title : PropTypes.string.isRequired
}