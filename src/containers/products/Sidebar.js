import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { brands, dimensions, sizes, colors, } from '../../data';
import { useFilterHandle } from '../../hooks/useFilterHandle';
import { fetchProducts } from '../../store/actions/product-actions';

const Sidebar = () => {
    const dispatch = useDispatch()
    const [filters, onFilter, setFilters] = useFilterHandle(
        {
            brands: undefined,
            dimensions: undefined,
            colors: undefined,
            sizes: undefined
        },
        ({ filters }) => {
            dispatch(fetchProducts(filters))
        }
    );
    const handleBrand = (value) => {
        onFilter('brands', value)
    }
    const handleDimension = (value) => {
        onFilter('dimensions', value)
    }
    const handleColor = (value) => {
        onFilter('colors', value)
    }
    const handleSize = (value) => {
        onFilter('sizes', value)
    }
    return (
        <div className="sidebar-categores-box">
            <div className="sidebar-title">
                <h2>Filter By</h2>
            </div>
            <div className="filter-sub-area">
                <h5 className="filter-sub-titel">Brand</h5>
                <div className="categori-checkbox">
                    <form action="#">
                        <ul>
                            {
                                brands.map(brand => (
                                    <li key={brand.id}><input type="checkbox" name={brand.key} /><Link onClick={() => handleBrand(brand.id)} to={""}>{brand.name}</Link></li>
                                ))
                            }
                        </ul>
                    </form>
                </div>
            </div>
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
                <h5 className="filter-sub-titel">Categories</h5>
                <div className="categori-checkbox">
                    <form action="#">
                        <ul>
                            {
                                brands.map(brand => (
                                    <li key={brand.id}><input type="checkbox" name={brand.key} /><Link onClick={() => handleBrand(brand.id)} to={""}>{brand.name}</Link></li>
                                ))
                            }
                        </ul>
                    </form>
                </div>
            </div>
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
                <h5 className="filter-sub-titel">Size</h5>
                <div className="size-checkbox">
                    <form action="#">
                        <ul>
                            {
                                sizes.map(size => (
                                    <li key={size.id}>
                                        <input type="checkbox" name={size.id} id={size.id} />
                                        <label htmlFor={size.id}>
                                            <Link onClick={() => handleSize(size.id)} to={""}>{size.size}</Link>
                                        </label>
                                    </li>
                                ))
                            }
                        </ul>
                    </form>
                </div>
            </div>
            <div className="filter-sub-area pt-sm-10 pt-xs-10">
                <h5 className="filter-sub-titel">Color</h5>
                <div className="color-categoriy">
                    <form action="#">
                        <ul>
                            {
                                colors.map(color => (
                                    <li key={color.id}><span style={{ backgroundColor: color.code }} ></span><Link onClick={() => handleColor(color.id)} to={""}>{color.name}</Link></li>
                                ))
                            }
                        </ul>
                    </form>
                </div>
            </div>
            <div className="filter-sub-area pt-sm-10 pb-sm-15 pb-xs-15">
                <h5 className="filter-sub-titel">Dimension</h5>
                <div className="categori-checkbox">
                    <form action="#">
                        <ul>
                            {
                                dimensions.map(dimension => (
                                    <li key={dimension.id}><input type="checkbox" name={dimension.name} /><Link onClick={() => handleDimension(dimension.id)} to={""}>{dimension.name}</Link></li>
                                ))
                            }
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sidebar