import React from 'react'

const GoogleMap = () => {
    return (
        <div className="container mb-60">
            <iframe title='Google Map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48625.558628958956!2d49.776006116108185!3d40.384533547541714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d8c33c62a3f%3A0x77807ca915edd570!2sYasamal%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2s!4v1658011179325!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default GoogleMap