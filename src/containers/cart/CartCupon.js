import React from 'react'

const CartCupon = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="coupon-all">
                    <div className="coupon">
                        <input id="coupon_code" className="input-text" name="coupon_code" defaultValue="" placeholder="Coupon code" type="text" />
                        <input className="button" name="apply_coupon" defaultValue="Apply coupon" type="submit" />
                    </div>
                    <div className="coupon2">
                        <input className="button" name="update_cart" defaultValue="Update cart" type="submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartCupon