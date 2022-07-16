import React from 'react'
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import CounterupCard from '../components/card/CounterupCard';
import TeamCard from '../components/card/TeamCard';

const TEAM_DATA = [
    {
        id: 1,
        image: '1.png',
        name: 'Jonathan Scott',
        email: 'info@example.com',
        position: 'IT Expert'
    },
    {
        id: 2,
        image: '2.png',
        name: 'Oliver Bastin',
        email: 'info@example.com',
        position: 'Web Designer'
    },
    {
        id: 3,
        image: '3.png',
        name: 'Erik Jonson',
        email: 'info@example.com',
        position: 'Web Developer'
    },
    {
        id: 4,
        image: '4.png',
        name: 'Maria Mandy',
        email: 'info@example.com',
        position: 'Marketing officer'
    },
];

const COUNTER_DATA = [
    {
        id: 1,
        image: '1.png',
        title: 'HAPPY CUSTOMERS',
        number: 2169
    },
    {
        id: 2,
        image: '2.png',
        title: 'AWARDS WINNED',
        number: 869
    },
    {
        id: 3,
        image: '3.png',
        title: 'HOURS WORKED',
        number: 689
    },
    {
        id: 4,
        image: '4.png',
        title: 'COMPLETE PROJECTS',
        number: 2169
    },
];

const About = () => {
    return (
        <>
         <Breadcrumb page='About'/>
            <div className="about-us-wrapper pt-60 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-last order-lg-first">
                            <div className="about-text-wrap">
                                <h2><span>Provide Best</span>Product For You</h2>
                                <p>We provide the best Beard oile all over the world. We are the worldd best store in indi for Beard Oil. You can buy our product without any hegitation because they truste us and buy our product without any hagitation because they belive and always happy buy our product.</p>
                                <p>Some of our customer say’s that they trust us and buy our product without any hagitation because they belive us and always happy to buy our product.</p>
                                <p>We provide the beshat they trusted us and buy our product without any hagitation because they belive us and always happy to buy.</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-10">
                            <div className="about-image-wrap">
                                <img className="img-full" src={process.env.PUBLIC_URL + `/assets/images/product/large-size/13.jpg`} alt="About Us" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counterup-area">
                <div className="container-fluid p-0">
                    <div className="row no-gutters">
                        {
                            COUNTER_DATA.map(counter=>(
                                <CounterupCard key={counter.id} data={counter}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="team-area pt-60 pt-sm-44">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="li-section-title capitalize mb-25">
                                <h2><span>our team</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            TEAM_DATA.map(user => (
                                <TeamCard key={user.id} data={user} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default About