import React from 'react'

const SearchButton = ({ handleSearch }) => {
    return (
        <button onClick={handleSearch} className="li-btn" type="submit"><i className="fa fa-search"></i></button>
    )
}

export default SearchButton