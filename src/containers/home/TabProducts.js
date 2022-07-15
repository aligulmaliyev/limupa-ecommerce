import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card';
import { Tab } from '../../components/tab/Tab'

const TabProducts = ({ data = [] }) => {
    const [activeTab, setActiveTab] = useState(1);
    const [contentData, setContentData] = useState(data);
    const [tabLinkData, setTabLinkData] = useState([]);

    const changeTab = (val) => {
        setActiveTab(val)
    }

    useEffect(() => {
        let type = data?.map(product => product.type);
        let unique = type.filter((value, index, self) => {
            let allId = self.map(i => i.id)
            return allId.indexOf(value.id) === index;
        });
        setTabLinkData(unique)
    }, [data])

    useEffect(() => {
        let filteredData = data?.filter(product => product.type.id === activeTab);
        setContentData(filteredData)
    }, [data, activeTab])

    return (
        <div className="product-area  pt-60 pb-45">
            <div className="container">
                <Tab.TabNav onChange={changeTab} active={activeTab} data={tabLinkData} />
                <Tab.TabContent>
                    {
                        contentData?.map(product => (
                            <div key={product.id} className='col-lg-3 col-sm-6 col-12 '>
                                <Card data={product} type='normal' />
                            </div>
                        ))
                    }
                </Tab.TabContent>
            </div>
        </div>
    )
}

export default TabProducts