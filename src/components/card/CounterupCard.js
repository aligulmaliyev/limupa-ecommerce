import React from 'react'
import CountUp from 'react-countup';

const CounterupCard = ({ data }) => {
    return (
        <div className="col-lg-3 col-md-6">
            <div className="limupa-counter white-smoke-bg">
                <div className="container">
                    <div className="counter-img">
                        <img src={process.env.PUBLIC_URL + `/assets/images/about-us/icon/${data.image}`} alt="" />
                    </div>
                    <div className="counter-info">
                        <div className="counter-number">
                            <h3 className="counter"><CountUp end={data.number} /></h3>
                        </div>
                        <div className="counter-text">
                            <span>{data.title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterupCard