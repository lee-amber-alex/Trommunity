import React from "react";
import "../Styles/nav.css"

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand header-nav" href="/">
            Trommunity
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tradepost">
                  post
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  my trades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  logout
                </a>
              </li>
            </ul>
            {/* <form className="d-flex">
             <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
              
            </form> */}
          </div>
        {/* </div> */}
        </div>
      </nav>
    </>
  );
}
