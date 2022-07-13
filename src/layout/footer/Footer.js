import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-static-top">
                <div class="container">
                    <div class="footer-shipping pt-60 pb-55 pb-xs-25">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                <div class="li-shipping-inner-box">
                                    <div class="shipping-icon">
                                        <img src="assets/images/shipping-icon/1.png" alt="Shipping Icon" />
                                    </div>
                                    <div class="shipping-text">
                                        <h2>Free Delivery</h2>
                                        <p>And free returns. See checkout for delivery dates.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 pb-sm-55 pb-xs-55">
                                <div class="li-shipping-inner-box">
                                    <div class="shipping-icon">
                                        <img src="assets/images/shipping-icon/2.png" alt="Shipping Icon" />
                                    </div>
                                    <div class="shipping-text">
                                        <h2>Safe Payment</h2>
                                        <p>Pay with the world's most popular and secure payment methods.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                <div class="li-shipping-inner-box">
                                    <div class="shipping-icon">
                                        <img src="assets/images/shipping-icon/3.png" alt="Shipping Icon" />
                                    </div>
                                    <div class="shipping-text">
                                        <h2>Shop with Confidence</h2>
                                        <p>Our Buyer Protection covers your purchasefrom click to delivery.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 pb-xs-30">
                                <div class="li-shipping-inner-box">
                                    <div class="shipping-icon">
                                        <img src="assets/images/shipping-icon/4.png" alt="Shipping Icon" />
                                    </div>
                                    <div class="shipping-text">
                                        <h2>24/7 Help Center</h2>
                                        <p>Have a question? Call a Specialist or chat online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-static-middle">
                <div class="container">
                    <div class="footer-logo-wrap pt-50 pb-35">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="footer-logo">
                                    <img src="assets/images/menu/logo/1.jpg" alt="Foote/r Logo" />
                                    <p class="info">
                                        We are a team of designers and developers that create high quality HTML Template & Woocommerce, Shopify Theme.
                                    </p>
                                </div>
                                <ul class="des">
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
                                        <a href="mailto://ali.gulmaliyov@gmail.com">ali.gulmaliyov@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6">
                                <div class="footer-block">
                                    <h3 class="footer-block-title">Product</h3>
                                    <ul>
                                        <li><Link to='/'>Prices drop</Link></li>
                                        <li><Link to='/'>New products</Link></li>
                                        <li><Link to='/'>Best sales</Link></li>
                                        <li><Link to='/'>Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-3 col-sm-6">
                                <div class="footer-block">
                                    <h3 class="footer-block-title">Our company</h3>
                                    <ul>
                                        <li><Link to='/'>Delivery</Link></li>
                                        <li><Link to='/'>Legal Notice</Link></li>
                                        <li><Link to='/'>About us</Link></li>
                                        <li><Link to='/'>Contact us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="footer-block">
                                    <h3 class="footer-block-title">Follow Us</h3>
                                    <ul class="social-link">
                                        <li class="twitter">
                                            <a href="https://twitter.com/" data-toggle="tooltip" target="_blank" title="Twitter">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="rss">
                                            <a href="https://rss.com/" data-toggle="tooltip" target="_blank" title="RSS">
                                                <i class="fa fa-rss"></i>
                                            </a>
                                        </li>
                                        <li class="google-plus">
                                            <a href="https://www.plus.google.com/discover" data-toggle="tooltip" target="_blank" title="Google Plus">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li class="facebook">
                                            <a href="https://www.facebook.com/" data-toggle="tooltip" target="_blank" title="Facebook">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="youtube">
                                            <a href="https://www.youtube.com/" data-toggle="tooltip" target="_blank" title="Youtube">
                                                <i class="fa fa-youtube"></i>
                                            </a>
                                        </li>
                                        <li class="instagram">
                                            <a href="https://www.instagram.com/" data-toggle="tooltip" target="_blank" title="Instagram">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="footer-newsletter">
                                    <h4>Sign up to newsletter</h4>
                                    <form action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="footer-subscribe-form validate" target="_blank" novalidate>
                                        <div id="mc_embed_signup_scroll">
                                            <div id="mc-form" class="mc-form subscribe-form form-group" >
                                                <input id="mc-email" type="email" autocomplete="off" placeholder="Enter your email" />
                                                <button class="btn" id="mc-submit">Subscribe</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-static-bottom pt-55 pb-55">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="footer-links">
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
                            <div class="copyright text-center">
                                <Link to='/'>
                                    <img src="assets/images/payment/1.png" alt="" />
                                </Link>
                            </div>
                            <div class="copyright text-center pt-25">
                                <span><a target="_blank" href="https://www.templateshub.net">Ali Gülmaliyev</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer