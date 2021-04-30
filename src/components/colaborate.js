import React from 'react'
import './colaborate.css'
import letters from '../images/group-11.svg'
import combo from '../images/Groups3.svg'

const Colaborate = () => {
    return (
        <div className="collab">
            <div className="image_right">
                <img className="letters" src={letters} alt=""/>
                <img className="combo" src={combo} alt=""/>
            </div>
            <div className="left_content">
                <div className="upper_content">
                    <p>Collaborate with us</p>
                    <h2>Have an idea? Hold that thought!
                        We will reach out to you
                    </h2>
                    <button className="details">Drop your Details here <i class="fas fa-arrow-right"></i></button>
                </div>
                <div className="lower_content">
                    <p>We are looking for talents</p>
                    <h2>Do you have the same passion and love for technology like we do?
                    </h2>
                    <button className="join_us">Join Us <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
            
        </div>
    )
}

export default Colaborate
