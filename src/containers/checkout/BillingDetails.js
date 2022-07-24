import React from 'react'

const BillingDetails = () => {
    return (
        <form action="#">
            <div class="checkbox-form">
                <h3>Billing Details</h3>
                <div class="row">
                    <div class="col-md-12">
                        <div class="country-select clearfix">
                            <label>Country <span class="required">*</span></label>
                            <select class="nice-select wide">
                                <option data-display="Bangladesh">Bangladesh</option>
                                <option value="uk">London</option>
                                <option value="rou">Romania</option>
                                <option value="fr">French</option>
                                <option value="de">Germany</option>
                                <option value="aus">Australia</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkout-form-list">
                            <label>First Name <span class="required">*</span></label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkout-form-list">
                            <label>Last Name <span class="required">*</span></label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="checkout-form-list">
                            <label>Company Name</label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="checkout-form-list">
                            <label>Address <span class="required">*</span></label>
                            <input placeholder="Street address" type="text" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="checkout-form-list">
                            <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="checkout-form-list">
                            <label>Town / City <span class="required">*</span></label>
                            <input type="text" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkout-form-list">
                            <label>State / County <span class="required">*</span></label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkout-form-list">
                            <label>Postcode / Zip <span class="required">*</span></label>
                            <input placeholder="" type="text" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkout-form-list">
                            <label>Email Address <span class="required">*</span></label>
                            <input placeholder="" type="email" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="checkout-form-list">
                            <label>Phone  <span class="required">*</span></label>
                            <input type="text" />
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="checkout-form-list create-acc">
                            <input id="cbox" type="checkbox" />
                            <label>Create an account?</label>
                        </div>
                        <div id="cbox-info" class="checkout-form-list create-account">
                            <p>Create an account by entering the information below. If you are a returning customer please login at the top of the page.</p>
                            <label>Account password  <span class="required">*</span></label>
                            <input placeholder="password" type="password" />
                        </div>
                    </div>
                </div>
                <div class="different-address">
                    <div class="ship-different-title">
                        <h3>
                            <label>Ship to a different address?</label>
                            <input id="ship-box" type="checkbox" />
                        </h3>
                    </div>
                    <div id="ship-box-info" class="row">
                        <div class="col-md-12">
                            <div class="country-select clearfix">
                                <label>Country <span class="required">*</span></label>
                                <select class="nice-select wide">
                                    <option data-display="Bangladesh">Bangladesh</option>
                                    <option value="uk">London</option>
                                    <option value="rou">Romania</option>
                                    <option value="fr">French</option>
                                    <option value="de">Germany</option>
                                    <option value="aus">Australia</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>First Name <span class="required">*</span></label>
                                <input placeholder="" type="text" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>Last Name <span class="required">*</span></label>
                                <input placeholder="" type="text" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>Company Name</label>
                                <input placeholder="" type="text" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>Address <span class="required">*</span></label>
                                <input placeholder="Street address" type="text" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <input placeholder="Apartment, suite, unit etc. (optional)" type="text" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>Town / City <span class="required">*</span></label>
                                <input type="text" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>State / County <span class="required">*</span></label>
                                <input placeholder="" type="text" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>Postcode / Zip <span class="required">*</span></label>
                                <input placeholder="" type="text" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>Email Address <span class="required">*</span></label>
                                <input placeholder="" type="email" />

                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="checkout-form-list">
                                <label>Phone  <span class="required">*</span></label>
                                <input type="text" />

                            </div>
                        </div>
                    </div>
                    <div class="order-notes">
                        <div class="checkout-form-list">
                            <label>Order Notes</label>
                            <textarea id="checkout-mess" cols="30" rows="10" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default BillingDetails