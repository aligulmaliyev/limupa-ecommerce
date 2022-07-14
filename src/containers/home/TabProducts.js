import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import TabLinks from './TabLinks';

const TabProducts = ({ data = [] }) => {
    const [activeTab, setActiveTab] = useState(3);
    const [tabData, setTabData] = useState(data);

    const changeTab = (val) => {
        setActiveTab(val)
    }
    useEffect(() => {
        let filteredData = data?.filter(product => product.type.id === activeTab);
        setTabData(filteredData)
    }, [data, activeTab])
    return (
        <div className="product-area  pt-60 pb-45">
            <div className="container">
                    <TabLinks onChange={changeTab} active={activeTab} />
                <div className='row'>
                    {
                        tabData?.map(product => (
                            <div className='col-lg-3'>
                                <Card data={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TabProducts