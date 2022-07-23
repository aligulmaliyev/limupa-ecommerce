import React from 'react'
import CounterupCard from '../../components/card/CounterupCard';
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

const Countup = () => {
    return (
        <div className="counterup-area">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    {
                        COUNTER_DATA.map(counter => (
                            <CounterupCard key={counter.id} data={counter} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Countup