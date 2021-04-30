import React from 'react'
import '../components/model.css'
import Accord from '../components/accordion'

const Model = () => {
    
    return (
        <div className="engagement">
            <div className="modal">
                <h3>ENGAGEMENT MODEL</h3>
                <h2>We offer the choice</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            </div>
            <div className="accordion">
                <div className="accordian">
                    <Accord/>
                </div>
            </div>
        </div>
    )
}

export default Model
