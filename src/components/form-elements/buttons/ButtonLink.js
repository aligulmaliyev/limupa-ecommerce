import React from 'react'
import { Link } from 'react-router-dom';

const ButtonLink = ({ url, type, text }) => {
  let className = type === 'dark' ? 'li-button li-button-fullwidth li-button-dark' : 'li-button li-button-fullwidth'
  return (
    <Link to={url} className={className}>
      <span>{text}</span>
    </Link>
  )
}

export default ButtonLink