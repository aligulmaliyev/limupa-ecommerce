import React from 'react'

const Modal = ({ isVisible, close, children }) => {
    return (
        <div className={isVisible ? 'modal fade modal-wrapper show' : 'modal fade modal-wrapper'}  >
            <div className="modal-dialog modal-dialog-centered" >
                <div className="modal-content">
                    <div className="modal-body">
                        <button onClick={close} type="button" className="close" >
                            <span aria-hidden="true">&times;</span>
                        </button>
                        {
                            children
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal