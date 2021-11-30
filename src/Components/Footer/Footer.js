import React from 'react'

const Footer = () => {
    return (
   <div className="footer bg-light ">
  <div className="container">
    <div className="row">
      <div className="col-3 ">
        <img src="image/phone-app.png" alt = "" width="100%" />
      </div>
      <div className="col-1 pt-5 rightBorder  ">
        <h1 className="ms-5">
          TRY THE OLX APP
        </h1>
        <p className="ms-5">
          Buy, sell and find just about anything using the app on your mobile.
        </p>
      </div>
      <div className="col-3 pt-5 ps-4 app">
        <h6>
          GET YOUR APP TODAY
        </h6>
        <img src="image/playstore_2x.png" alt = "" width="100px" />
        <img src="image/appstore_2x.png" alt = "" width="100px" />
      </div>
    </div>
  </div>
</div>

    )
}

export default Footer
