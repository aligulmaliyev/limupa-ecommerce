import React from 'react'
import BillingDetails from '../containers/checkout/BillingDetails'
import CuponAccordion from '../containers/checkout/CuponAccordion'
import YourOrder from '../containers/checkout/YourOrder'

const Checkout = () => {
    return (
        <div class="checkout-area pt-60 pb-30">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <CuponAccordion />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 col-12">
                        <BillingDetails />
                    </div>
                    <div class="col-lg-6 col-12">
                        <YourOrder />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout