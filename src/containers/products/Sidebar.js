import React from 'react'

const Sidebar = () => {
    return (
        <div className="sidebar-categores-box">
            <div className="sidebar-title">
                <h2>Filter By</h2>
            </div>
            <button className="btn-clear-all mb-sm-30 mb-xs-30">Clear all</button>
            <div className="filter-sub-area">
                <h5 className="filter-sub-titel">Brand</h5>
                <div className="categori-checkbox">
                    <form action="#">
                        <ul>
                            <li><input type="checkbox" name="product-categori" /><a href="#">Prime Video (13)</a></li>
                            <li><input type="checkbox" name="product-categori" /><a href="#">Computers (12)</a></li>
                            <li><input type="checkbox" name="product-categori" /><a href="#">Electronics (11)</a></li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
                <h5 className="filter-sub-titel">Categories</h5>
                <div className="categori-checkbox">
                    <form action="#">
                        <ul>
                            <li><input type="checkbox" name="product-categori" /><a href="#">Graphic Corner (10)</a></li>
                            <li><input type="checkbox" name="product-categori" /><a href="#"> Studio Design (6)</a></li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
                <h5 className="filter-sub-titel">Size</h5>
                <div className="size-checkbox">
                    <form action="#">
                        <ul>
                            <li><input type="checkbox" name="product-size" /><a href="#">S (3)</a></li>
                            <li><input type="checkbox" name="product-size" /><a href="#">M (3)</a></li>
                            <li><input type="checkbox" name="product-size" /><a href="#">L (3)</a></li>
                            <li><input type="checkbox" name="product-size" /><a href="#">XL (3)</a></li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
                <h5 className="filter-sub-titel">Color</h5>
                <div className="color-categoriy">
                    <form action="#">
                        <ul>
                            <li><span className="white"></span><a href="#">White (1)</a></li>
                            <li><span className="black"></span><a href="#">Black (1)</a></li>
                            <li><span className="Orange"></span><a href="#">Orange (3) </a></li>
                            <li><span className="Blue"></span><a href="#">Blue  (2) </a></li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15">
                <h5 className="filter-sub-titel">Dimension</h5>
                <div className="categori-checkbox">
                    <form action="#">
                        <ul>
                            <li><input type="checkbox" name="product-categori" /><a href="#">40x60cm (6)</a></li>
                            <li><input type="checkbox" name="product-categori" /><a href="#">60x90cm (6)</a></li>
                            <li><input type="checkbox" name="product-categori" /><a href="#">80x120cm (6)</a></li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sidebar