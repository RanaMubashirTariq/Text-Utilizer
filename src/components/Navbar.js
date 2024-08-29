import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        Navbar
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
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>

          {/* <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="/User1"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/User1/perter">
                  perter
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/User1/ali">
                  ali
                </Link>
              </li>
            </ul>
          </li> */}
        </ul>
        <div className="d-flex">
            <div className='bg-primary rounded mx-1' onClick={()=>{props.toggleMode('primary')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
            <div className='bg-danger rounded mx-1' onClick={()=>{props.toggleMode('danger')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
            <div className='bg-success rounded mx-1' onClick={()=>{props.toggleMode('success')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
            <div className='bg-warning rounded mx-1' onClick={()=>{props.toggleMode('warning')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
            <div className='bg-info rounded mx-1' onClick={()=>{props.toggleMode('info')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
            <div className='border bg-light rounded mx-1 border-warning ' onClick={()=>{props.toggleMode('light')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
            <div className='bg-dark rounded mx-1' onClick={()=>{props.toggleMode('black')}} style={{width:'30px',height:'30px',cursor:'pointer'}}></div>
        </div>
          {/* <div className="form-check form-switch">
             <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
             <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
     </div> */}
      </div>
    </div>
  </nav>
  
  )
}
