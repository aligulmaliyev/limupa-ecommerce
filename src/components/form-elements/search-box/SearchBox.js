import React, { useState } from 'react'
import SearchButton from '../buttons/SearchButton'
import SelectBox from '../SelectBox'
import Input from '../Input'


const SearchBox = ({ onSearch }) => {
    const [selectVal, setSelectVal] = useState(null);
    const [inputVal, setInputVal] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault()
        onSearch({ [selectVal]: inputVal })
    }
    return (
        <form onSubmit={handleSearch} className="hm-searchbox">
            <SelectBox onChange={(e) => setSelectVal(e)} />
            <Input onChange={(e) => setInputVal(e)} placeholder='Enter your search key ...' />
            <SearchButton />
        </form>
    )
}

export default SearchBox