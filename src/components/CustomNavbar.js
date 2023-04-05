import React, { Component } from "react"
import { Link, NavLink } from "react-router-dom"
import Sticky from "react-stickynode"
import Dropdown from "react-bootstrap/Dropdown"
// import { history } from "";
// import { handleGooglelogout } from "../../src/Fairbase";

class CustomNavbar extends Component {
  handleGooglelogoutg = async () => {
    localStorage.removeItem("Firename")
    window.location.reload()
  }
  if(FireBaseName) {
    window.location.reload()
  }
  componentDidMount() {
    const FireBaseName = localStorage.getItem("Firename")
  }
  render() {
    const FireBaseName = localStorage.getItem("Firename")

    var { mClass, nClass, cClass, slogo, hbtnClass } = this.props
    return (
      <Sticky top={0} innerZ={9999} activeClass='navbar_fixed'>
        <header className='header_area'>
          <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
            <div className={`container ${cClass} nav-fixed`}>
              <Link className={`navbar-brand ${slogo}`} to='/'>
                <img src={require("../img/logo.png")} alt='' width='200px' />
                <img src={require("../img/logo.png")} alt='logo' width='180px' />
              </Link>
              <button
                className='navbar-toggler collapsed'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='menu_toggle'>
                  <span className='hamburger'>
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                  <span className='hamburger-cross'>
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>

              <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                  <li className='dropdown submenu nav-item'>
                    <Link
                      to='./'
                      title='Product'
                      className='dropdown-toggle nav-link'
                      data-toggle='dropdown'
                      role='button'
                      aria-haspopup='true'
                      aria-expanded='false'
                    >
                      Product
                      <span className='ml-1'>
                        <i class='fa fa-angle-down' aria-hidden='true'></i>
                      </span>
                    </Link>
                    <ul role='menu' className=' dropdown-menu'>
                      <li className='nav-item'>
                        <NavLink exact title='Contact' className='nav-link' to='/Contact'>
                          Contact
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink exact title='Task' className='nav-link' to='/myanimation/task'>
                          Task
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink exact title='Goals' className='nav-link' to='/myanimation/goal'>
                          Goals
                        </NavLink>
                      </li>

                      <li className='nav-item'>
                        <NavLink
                          exact
                          title='Marketing'
                          className='nav-link'
                          to='/myanimation/marketing'
                        >
                          Marketing
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink exact title='Shop' className='nav-link' to='/myanimation/shop'>
                          Shop
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink exact title='MyDoc' className='nav-link' to='/myanimation/mydoc'>
                          MyDoc
                        </NavLink>
                      </li>
                      <li className='nav-item'>
                        <NavLink
                          exact
                          title='Employee'
                          className='nav-link'
                          to='/myanimation/employee'
                        >
                          Employee
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="dropdown submenu nav-item">
                    <Link
                      to="./"
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="About"
                          className="nav-link"
                          to="/About"
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Process"
                          className="nav-link"
                          to="/Process"
                        >
                          Process
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Team"
                          className="nav-link"
                          to="/Team"
                        >
                          Team
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Price"
                          className="nav-link"
                          to="/Price"
                        >
                          Price
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="Faq"
                          className="nav-link"
                          to="/Faq"
                        >
                          Faq
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="SignIn"
                          className="nav-link"
                          to="/SignIn"
                        >
                          Sign In
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          title="SignUp"
                          className="nav-link"
                          to="/SignUp"
                        >
                          Sign Up
                        </NavLink>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="dropdown submenu nav-item">
                    <Link
                      title="Pages"
                      className="dropdown-toggle nav-link"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      to="#"
                    >
                      Portfolio
                    </Link>
                    <ul role="menu" className=" dropdown-menu">
                      <li className="nav-item">
                        <NavLink
                          title="Portfolio 2"
                          className="nav-link"
                          to="/Portfolio-2col"
                        >
                          Portfolio 2col
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          title="Portfolio 3"
                          className="nav-link"
                          to="/Portfolio-3col"
                        >
                          Portfolio 3col
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          title="Portfolio Fullwidth"
                          className="nav-link"
                          to="/Portfolio-fullwidth-4col"
                        >
                          Portfolio fullwidth
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          title="PortfolioSingle"
                          className="nav-link"
                          to="/PortfolioSingle"
                        >
                          Portfolio Single
                        </NavLink>
                      </li>
                    </ul>
                  </li> */}
                  {/* <li className="nav-item dropdown submenu">
                    <a
                      className="nav-link dropdown-toggle"
                      href=".#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="/Bloglist" className="nav-link">
                          Blog List
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/BlogGridPage" className="nav-link">
                          Blog Grid
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to="/BlogSingle" className="nav-link">
                          Blog Single
                        </NavLink>
                      </li>
                    </ul>
                  </li> */}
                  <li className='nav-item'>
                    <NavLink title='Solutions' className='nav-link' to='/Home-ERP'>
                      Solutions
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink
                      title='Enterprise'
                      className='nav-link'
                      to='/myanimation/enterprisepage'
                    >
                      Enterprise
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink title='Pricing' className='nav-link' to='/Price'>
                      Pricing
                    </NavLink>
                  </li>
                </ul>

                {FireBaseName !== "" && FireBaseName !== null && FireBaseName !== undefined ? (
                  <>
                    <Dropdown>
                      <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        {FireBaseName}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href='https://me.mymanager.com/login'>
                          Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item
                          // href="#/action-2"
                          onClick={this.handleGooglelogoutg}
                        >
                          Logout
                        </Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item> */}
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                ) : (
                  <>
                    <div className='btn'>
                      <a
                        className={`btn_get btn_hover ${hbtnClass}`}
                        href='https://me.mymanager.com/login'
                      >
                        Sign In
                      </a>

                      <a
                        className={`btn_get btn_hover rt tak`}
                        href='https://me.mymanager.com/login'
                      >
                        Talk to sales
                      </a>

                      <a
                        className={`btn_get btn_hover rt fre `}
                        href='https://me.mymanager.com/login'
                      >
                        Try for free
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
          </nav>
        </header>
      </Sticky>
    )
  }
}

export default CustomNavbar
