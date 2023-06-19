import React from "react";
import img1 from "../../asset/img/banner/banner-1.jpg";
import img2 from "../../asset/img/banner/banner-2.jpg";
import "../../css/style.css";
function Banner() {
  return (
    <section className="my-3" style={{ marginLeft: "30px" }}>
      <div className="container  ">
        <div className="row">
          <div className="col-md-6">
            <div className="banner__item">
              <div className="banner__item__pic">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner__item">
              <div className="banner__item__pic">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
