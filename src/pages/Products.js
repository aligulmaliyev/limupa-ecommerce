import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../store/actions/product-actions'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'
import Card from '../components/card/Card';
import Sidebar from '../containers/products/Sidebar';
import { Link } from 'react-router-dom';
import Pagination from '../components/pagination/Pagination';

const Products = () => {
    const products = useSelector(state => state.products.allProducts);
    const dispatch = useDispatch();
    const [orderType, setOrderType] = useState('normal')
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(5)

    const pagePerSize = [5, 10, 15, 20];
    const indexOfLastPost = currentPage * productsPerPage;
    const indexOfFirstPost = indexOfLastPost - productsPerPage;
    const currentProducts = products?.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const handleOrderType = (type) => {
        setOrderType(type)
    }
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    return (
        <>
            <Breadcrumb page='Products' />
            <div className="content-wraper pt-60 pb-60 pt-sm-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 order-1 order-lg-2">
                            <div className="single-banner shop-page-banner">
                                <a href="#">
                                    <img src="assets/images/bg-banner/2.jpg" alt="Li's Static Banner" />
                                </a>
                            </div>
                            <div className="shop-top-bar mt-30">
                                <div className="shop-bar-inner">
                                    <div className="product-view-mode">
                                        <ul className="nav shop-item-filter-list" role="tablist">
                                            <li onClick={() => handleOrderType('normal')}><span className={orderType === 'normal' ? "active" : undefined}><i className="fa fa-th"></i></span></li>
                                            <li onClick={() => handleOrderType('list')}  ><span className={orderType === 'list' ? "active" : undefined}><i className="fa fa-th-list"></i></span></li>
                                        </ul>
                                    </div>
                                    <div className="toolbar-amount">
                                        <span>Showing {indexOfFirstPost} to {indexOfLastPost} of {products.length}</span>
                                    </div>
                                </div>
                                <div className="product-select-box">
                                    <div className="product-short">
                                        <p>Per Page:</p>
                                        <select className="nice-select" onChange={(e) => setProductsPerPage(e.target.value)}>
                                            {
                                                pagePerSize.map(perSize => (
                                                    <option key={perSize} value={perSize}>{perSize}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-products-wrapper">
                                <div className="tab-content">
                                    <div id="grid-view" className={orderType === 'normal' ? "tab-pane active " : 'tab-pane'}  >
                                        <div className="product-area shop-product-area">
                                            <div className="row">
                                                {
                                                    currentProducts?.map(product => (
                                                        <div key={product.id} className="col-lg-4 col-md-4 col-sm-6 mt-40">
                                                            <Card data={product} type={orderType} />
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div id="list-view" className={orderType === 'list' ? "tab-pane active product-list-view" : 'tab-pane product-list-view'} role="tabpanel">
                                        <div className="row">
                                            <div className="col">
                                                {
                                                    currentProducts?.map(product => (
                                                        <Card key={product.id} data={product} type={orderType} />
                                                    ))
                                                }

                                            </div>
                                        </div>
                                    </div>
                                    <div className="paginatoin-area">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 pt-xs-15">
                                                <p>Showing {indexOfFirstPost} to {indexOfLastPost} of {products.length} product{products.length > 1 && 's'}</p>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <Pagination itemPerPage={productsPerPage} totalItems={products.length} paginate={paginate} currentPage={currentPage} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 order-2 order-lg-1">
                            <Sidebar />
                            <div className="sidebar-categores-box mb-sm-0 mb-xs-0">
                                <div className="sidebar-title">
                                    <h2>Laptop</h2>
                                </div>
                                <div className="category-tags">
                                    <ul>
                                        <li><Link to='/products'>Devita</Link></li>
                                        <li><Link to='/products'>Cameras</Link></li>
                                        <li><Link to='/products'>Sony</Link></li>
                                        <li><Link to='/products'>Computer</Link></li>
                                        <li><Link to='/products'>Big Sale</Link></li>
                                        <li><Link to='/products'>Accessories</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products