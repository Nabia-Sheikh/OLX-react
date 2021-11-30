import React from 'react'

const Nav = () => {
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 shadow-sm navmobile">
  <div className="container">
    <a className="navbar-brand" href="/#">
      <img src="image/logo.svg" alt = "" className="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2">
        <li className="nav-item" id="pakistan">
          <div className="input-group">
            <span className="form-control border-0" data-bs-toggle="dropdown" id="
              
              
              ">
              <img src="image/search-icon.svg" alt = "" width="30px" height="25px" />
            </span>
            <input type="text" className="border-0" id="searchbox" data-bs-toggle="dropdown" aria-label="Text input with segmented dropdown button" placeholder="Pakistan" />
            <button type="button" className="btn  border-0 noShadow selectdiv " data-bs-toggle="dropdown" aria-expanded="false" />
            <ul className="dropdown-menu dropdown-menu-end w-100">
              <li>
                <a className="dropdown-item" href="/#">
                  Location
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  Pakistan
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  Iran{'{'}" "{'}'}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  Afghanistan
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  China
                </a>
              </li>
            </ul>
          </div>
        </li>
        &nbsp; &nbsp;
        <li className="nav-item navitem2">
          <div className="input-group mb-3">
            <input type="text" className="form-control noShadow" id="searchbtn" placeholder="Find Cars, Mobile Phones and more..." aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="btn noShadow" type="button" id="button-addon2">
              <img src="image/search-icon.svg" alt = "" className="svgWhite" />
            </button>
          </div>
        </li>
        <li className="onMobile extra">Popular Categories</li>
        <li className="onMobile">
          <i className="fa fa-mobile" aria-hidden="true" />
          Mobiles
        </li>
        <li className="onMobile">

          <i className="fa fa-car" aria-hidden="true" />
          Vehicles
        </li>
        <li className="onMobile">

          <i className="fas fa-bullhorn" />Property for Sale
        </li>
        <li className="onMobile">
          <i className="fas fa-building" />Property for Rent
        </li>
      </ul>
    </div>
    <a href="/#" className="login">
      Login
    </a>
    <ul className="ghyb">
      <li className="nav-item">
        <a href = "/#"  className="nav-link">
          <button className="btn sell-btn sell">
            <i className="fas fa-plus plus-icon" />&nbsp;SELL
          </button>
        </a>
      </li>
    </ul>
  </div>
</nav>

    );
}

export default Nav
