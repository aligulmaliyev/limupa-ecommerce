import React from 'react'

const StaticBanner = () => {
  return (
    <div className="li-static-banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4 text-center">
                <div className="single-banner">
                    <a href="#">
                        <img src="assets/images/banner/1_3.jpg" alt="Li's Static Banner"/>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                <div className="single-banner">
                    <a href="#">
                        <img src="assets/images/banner/1_4.jpg" alt="Li's Static Banner"/>
                    </a>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 text-center pt-xs-30">
                <div className="single-banner">
                    <a href="#">
                        <img src="assets/images/banner/1_5.jpg" alt="Li's Static Banner"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default StaticBanner