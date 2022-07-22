import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/modal/Modal'
import Card from '../components/card/Card';
import ProductDetailContent from '../containers/products/ProductDetailContent'
import ProductFeedback from '../containers/products/ProductFeedback';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchProducts } from '../store/actions/product-actions'

const ProductsDetail = () => {
    const dispatch = useDispatch();
    const params = useParams()
    const location = useLocation()
    const products = useSelector(state => state.productsReducer.products);
    const [tab, setTab] = useState(1);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [product, setProduct] = useState({});

    const handleModal = () => setIsVisibleModal(prev => !prev);
    const handleTab = (number) => setTab(number)
    const id = Number(params.id)

    useEffect(() => {
        let existingProduct = products?.find(product => product.id === id);
        setProduct(existingProduct)
    }, [products, id])

    useEffect(() => {
        fetchProducts()
    }, [id])

    return (
        <>
            <ProductDetailContent product={product} id={id}>
                <div className="block-reassurance">
                    <ul>
                        <li>
                            <div className="reassurance-item">
                                <div className="reassurance-icon">
                                    <i className="fa fa-check-square-o"></i>
                                </div>
                                <p>Security policy (edit with Customer reassurance module)</p>
                            </div>
                        </li>
                        <li>
                            <div className="reassurance-item">
                                <div className="reassurance-icon">
                                    <i className="fa fa-truck"></i>
                                </div>
                                <p>Delivery policy (edit with Customer reassurance module)</p>
                            </div>
                        </li>
                        <li>
                            <div className="reassurance-item">
                                <div className="reassurance-icon">
                                    <i className="fa fa-exchange"></i>
                                </div>
                                <p> Return policy (edit with Customer reassurance module)</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </ProductDetailContent>
            <div className="product-area pt-35">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-product-tab">
                                <ul className="nav li-product-menu">
                                    <li><Link onClick={() => handleTab(1)} to={location.pathname} className={tab === 1 ? "active" : undefined}><span>Description</span></Link></li>
                                    <li><Link onClick={() => handleTab(2)} to={location.pathname} className={tab === 2 ? "active" : undefined}><span>Product Details</span></Link></li>
                                    <li><Link onClick={() => handleTab(3)} to={location.pathname} className={tab === 3 ? "active" : undefined}><span>Reviews</span></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-content">
                        {
                            tab === 1 &&
                            <div>
                                <div className="product-description">
                                    <span>{product?.description}</span>
                                </div>
                            </div>
                        }
                        {
                            tab === 2 &&
                            <div>
                                <div className="product-details-manufacturer">
                                    <Link to={location.pathname}>
                                        <img src={process.env.PUBLIC_URL + `/assets/images/product-details/1.jpg`} alt="Product Manufacturer" />
                                    </Link>
                                    <p><span>Reference</span> demo_7</p>
                                    <p><span>Reference</span> demo_7</p>
                                </div>
                            </div>
                        }
                        {
                            tab === 3 &&
                            <div >
                                <div className="product-reviews">
                                    <div className="product-details-comment-block">
                                        <div className="comment-review">
                                            <span>Grade</span>
                                            <ul className="rating">
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li><i className="fa fa-star-o"></i></li>
                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                                <li className="no-star"><i className="fa fa-star-o"></i></li>
                                            </ul>
                                        </div>
                                        <div className="comment-author-infos pt-25">
                                            <span>HTML 5</span>
                                            <em>01-12-18</em>
                                        </div>
                                        <div className="comment-details">
                                            <h4 className="title-block">Demo</h4>
                                            <p>Plaza</p>
                                        </div>
                                        <div className="review-btn">
                                            <Link to={location.pathname} className="review-links" onClick={handleModal}>Write Your Review!</Link>
                                        </div>
                                        <Modal isVisible={isVisibleModal} close={handleModal}>
                                            <ProductFeedback product={product} />
                                        </Modal>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <section className="product-area li-laptop-product pt-30 pb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="li-section-title">
                                <h2>
                                    <span>4 other products in the same category:</span>
                                </h2>
                            </div>
                            <div className="row">
                                {
                                    products?.slice(0, 4).map(product => (
                                        <div key={product.id} className="col-lg-3 col-md-3 col-sm-4 mt-40">
                                            <Card data={product} type='normal' />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsDetail