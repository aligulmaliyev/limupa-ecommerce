import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

const NotFound = () => {
  return (
    <>
      <Breadcrumb page='404 Error' />
      <div class="error404-area pt-30 pb-60">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="error-wrapper text-center ptb-50 pt-xs-20">
                <div class="error-text">
                  <h1>404</h1>
                  <h2>Opps! PAGE NOT BE FOUND</h2>
                  <p>Sorry but the page you are looking for does not exist, have been removed, <br /> name changed or is temporarity unavailable.</p>
                </div>
                <div class="search-error">
                  <form id="search-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Search" />
                    <button><i class="zmdi zmdi-search"></i></button>
                  </form>
                </div>
                <div class="error-button">
                  <Link to='/'>Back to home page</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound