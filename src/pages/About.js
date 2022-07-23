import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import AboutHeader from '../containers/about/AboutHeader';
import Countup from '../containers/about/Countup';
import OurTeam from '../containers/about/OurTeam';

const About = () => {
    return (
        <>
            <Breadcrumb page='About' />
            <AboutHeader />
            <Countup />
            <OurTeam />
        </>
    )
}

export default About