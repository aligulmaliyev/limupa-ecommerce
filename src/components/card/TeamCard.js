import React from 'react'
import {Link, useLocation } from 'react-router-dom';

const TeamCard = ({data}) => {
    const location = useLocation()
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="team-member mb-60 mb-sm-30 mb-xs-30">
                <div className="team-thumb">
                    <img src={process.env.PUBLIC_URL + `/assets/images/team/${data.image}`} alt="Our Team Member" />
                </div>
                <div className="team-content text-center">
                    <h3>{data.name}</h3>
                    <p>{data.position}</p>
                    <Link to={location.pathname}>{data.email}</Link>
                    <div className="team-social">
                        <Link to={location.pathname}><i className="fa fa-facebook"></i></Link>
                        <Link to={location.pathname}><i className="fa fa-twitter"></i></Link>
                        <Link to={location.pathname}><i className="fa fa-linkedin"></i></Link>
                        <Link to={location.pathname}><i className="fa fa-google-plus"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard