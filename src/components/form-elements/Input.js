import React from 'react'

const Input = ({ placeholder, onChange, type }) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }
    return (
        <input onChange={handleChange} type="text" placeholder={placeholder} />
    )
}

export default Input