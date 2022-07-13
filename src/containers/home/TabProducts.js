import React, { useState } from 'react'
import Card from '../../components/card/Card';
import TabLinks from './TabLinks';

const TabProducts = () => {
    const [activeTab, setActiveTab] = useState(3);

    const changeTab = (val) => {
        setActiveTab(val)
    }

    return (
        <div className="product-area  pt-60 pb-45">
            <div className="container">
                <TabLinks onChange={changeTab} active={activeTab} />
                {
                    activeTab === 1 &&
                    <div className='row'>
                        <div className='col-lg-3'>
                            <Card img='1.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='2.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='3.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='4.jpg' />
                        </div>
                    </div>
                }
                {
                    activeTab === 2 &&
                    <div className="row">
                        <div className='col-lg-3'>
                            <Card img='12.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='11.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='10.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='9.jpg' />
                        </div>
                    </div>
                }
                {
                    activeTab === 3 &&
                    <div className='row'>
                        <div className='col-lg-3'>
                            <Card img='3.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='5.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='7.jpg' />
                        </div>
                        <div className='col-lg-3'>
                            <Card img='9.jpg' />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default TabProducts