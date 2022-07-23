import React from 'react';
import TeamCard from '../../components/card/TeamCard';
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

const OurTeam = () => {
  return (
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
  )
}

export default OurTeam