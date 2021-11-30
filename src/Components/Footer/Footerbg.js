import React from "react";

const Footerbg = () => {
  return (
    <footer className="bg-light">
      <div className="container lFooter">
        <div className="row">
          <div className="col-9">
            <ul className=" pt-3 ">
              <li>
                <strong>POPULAR CATEGORIES</strong>
              </li>
              <li>Cars</li>
              <li>Flats for rent</li>
              <li>Jobs</li>
              <li>Mobile Phones</li>
            </ul>
            <ul className=" pt-3">
              <li>
                <strong>TRENDING SEARCHES</strong>
              </li>
              <li>BIkes</li>
              <li>Watches</li>
              <li>Books</li>
              <li>Dogs</li>
            </ul>
            <ul className="pt-3">
              <li>
                <strong>ABOUT US</strong>
              </li>
              <li>About OLX Group</li>
              <li>OLX Blog</li>
              <li>Contact Us</li>
              <li>OLX for Buisinesses</li>
            </ul>
            <ul className="pt-3">
              <li>
                <strong>OLX</strong>
              </li>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal &amp; Privacy information</li>
            </ul>
          </div>
          <div className="col-3">
            <h4 className="mt-4 ">FOLLOW US</h4>
            <span className="logos">
              <img src="image/444.svg" alt="" />
              <img src="image/333.svg" alt="" />
              <img src="image/111.svg" alt="" />
              <img src="image/222.svg" alt="" />
            </span>
            <br />
            <img src="image/appstore.png" alt="" />
            <img src="image/playstore.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerbg;
