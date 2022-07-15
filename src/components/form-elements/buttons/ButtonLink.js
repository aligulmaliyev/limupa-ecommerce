import React from 'react'
import { Link } from 'react-router-dom';

const ButtonLink = (props) => {
  let { url, type, text } = props;
  let className = type === 'dark' ? 'li-button li-button-fullwidth li-button-dark' : 'li-button li-button-fullwidth'
  return (
    <Link to={url} className={className} {...props}>
      <span>{text}</span>
    </Link>
  )
}

export default ButtonLink