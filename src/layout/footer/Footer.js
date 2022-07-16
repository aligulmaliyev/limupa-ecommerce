import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-static-top">
                <div className="container">
                    <div className="footer-shipping pt-60 pb-55 pb-xs-25">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                <div className="li-shipping-inner-box">
                                    <div className="shipping-icon">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/shipping-icon/1.png`} alt="Shipping Icon" />
                                    </div>
                                    <div className="shipping-text">
                                        <h2>Free Delivery</h2>
                                        <p>And free returns. See checkout for delivery dates.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                <div className="li-shipping-inner-box">
                                    <div className="shipping-icon">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/shipping-icon/2.png`} alt="Shipping Icon" />
                                    </div>
                                    <div className="shipping-text">
                                        <h2>Safe Payment</h2>
                                        <p>Pay with the world's most popular and secure payment methods.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                <div className="li-shipping-inner-box">
                                    <div className="shipping-icon">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/shipping-icon/3.png`} alt="Shipping Icon" />
                                    </div>
                                    <div className="shipping-text">
                                        <h2>Shop with Confidence</h2>
                                        <p>Our Buyer Protection covers your purchasefrom click to delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                <div className="li-shipping-inner-box">
                                    <div className="shipping-icon">
                                        <img src={process.env.PUBLIC_URL + `/assets/images/shipping-icon/4.png`} alt="Shipping Icon" />
                                    </div>
                                    <div className="shipping-text">
                                        <h2>24/7 Help Center</h2>
                                        <p>Have a question? Call a Specialist or chat online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-static-middle">
                <div className="container">
                    <div className="footer-logo-wrap pt-50 pb-35">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="footer-logo">
                                    <img src={process.env.PUBLIC_URL + `/assets/images/menu/logo/1.jpg`} alt="Foote/r Logo" />
                                    <p className="info">
                                        We are a team of designers and developers that create high quality HTML Template & Woocommerce, Shopify Theme.
                                    </p>
                                </div>
                                <ul className="des">
                                    <li>
                                        <span>Address: </span>
                                        Baku, Yasamal Sharifzada, AZ
                                    </li>
                                    <li>
                                        <span>Phone: </span>
                                        <Link to='/'>(+994 50) 341 66 62</Link>
                                    </li>
                                    <li>
                                        <span>Email: </span>
                                        <Link to="mailto://ali.gulmaliyov@gmail.com">ali.gulmaliyov@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer-block">
                                    <h3 className="footer-block-title">Product</h3>
                                    <ul>
                                        <li><Link to='/'>Prices drop</Link></li>
                                        <li><Link to='/'>New products</Link></li>
                                        <li><Link to='/'>Best sales</Link></li>
                                        <li><Link to='/'>Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-sm-6">
                                <div className="footer-block">
                                    <h3 className="footer-block-title">Our company</h3>
                                    <ul>
                                        <li><Link to='/'>Delivery</Link></li>
                                        <li><Link to='/'>Legal Notice</Link></li>
                                        <li><Link to='/'>About us</Link></li>
                                        <li><Link to='/'>Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-block">
                                    <h3 className="footer-block-title">Follow Us</h3>
                                    <ul className="social-link">
                                        <li className="twitter">
                                            <a target='_blank' rel="noreferrer" href="https://twitter.com/" >
                                                <i className="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li className="rss">
                                            <a target='_blank' rel="noreferrer" href="https://rss.com/" >
                                                <i className="fa fa-rss"></i>
                                            </a>
                                        </li>
                                        <li className="google-plus">
                                            <a target='_blank' rel="noreferrer" href="https://www.plus.google.com/discover" >
                                                <i className="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li className="facebook">
                                            <a target='_blank' rel="noreferrer" href="https://www.facebook.com/">
                                                <i className="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li className="youtube">
                                            <a target='_blank' rel="noreferrer" href="https://www.youtube.com/">
                                                <i className="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li className="instagram">
                                            <a target='_blank' rel="noreferrer" href="https://www.instagram.com/">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-newsletter">
                                    <h4>Sign up to newsletter</h4>
                                    <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footer-subscribe-form validate" target="_blank" noValidate>
                                        <div id="mc_embed_signup_scroll">
                                            <div id="mc-form" className="mc-form subscribe-form form-group" >
                                                <input id="mc-email" type="email" autoComplete="off" placeholder="Enter your email" />
                                                <button className="btn" id="mc-submit">Subscribe</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-static-bottom pt-55 pb-55">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-links">
                                <ul>
                                    <li><Link to='/'>Online Shopping</Link></li>
                                    <li><Link to='/'>Promotions</Link></li>
                                    <li><Link to='/'>My Orders</Link></li>
                                    <li><Link to='/'>Help</Link></li>
                                    <li><Link to='/'>Customer Service</Link></li>
                                    <li><Link to='/'>Support</Link></li>
                                    <li><Link to='/'>Most Populars</Link></li>
                                    <li><Link to='/'>New Arrivals</Link></li>
                                    <li><Link to='/'>Special Products</Link></li>
                                    <li><Link to='/'>Manufacturers</Link></li>
                                    <li><Link to='/'>Our Stores</Link></li>
                                    <li><Link to='/'>Shipping</Link></li>
                                    <li><Link to='/'>Payments</Link></li>
                                    <li><Link to='/'>Warantee</Link></li>
                                    <li><Link to='/'>Refunds</Link></li>
                                    <li><Link to='/'>Checkout</Link></li>
                                    <li><Link to='/'>Discount</Link></li>
                                    <li><Link to='/'>Refunds</Link></li>
                                    <li><Link to='/'>Policy Shipping</Link></li>
                                </ul>
                            </div>
                            <div className="copyright text-center">
                                <Link to='/'>
                                    <img src={process.env.PUBLIC_URL + `/assets/images/payment/1.png"`}alt="" />
                                </Link>
                            </div>
                            <div className="copyright text-center pt-25">
                                <span><a href="https://www.aligulmaliyev.com" target='_blank' rel="noreferrer">Ali Gülmaliyev</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer