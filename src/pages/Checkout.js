import React from 'react'
import BillingDetails from '../containers/checkout/BillingDetails'
import CuponAccordion from '../containers/checkout/CuponAccordion'
import YourOrder from '../containers/checkout/YourOrder'

const Checkout = () => {
    return (
        <div className="checkout-area pt-60 pb-30">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <CuponAccordion />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <BillingDetails />
                    </div>
                    <div className="col-lg-6 col-12">
                        <YourOrder />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout