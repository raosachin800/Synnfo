import React from 'react'

import '../components/about.css'
import Banner from '../images/rectangle.svg'
import combo from '../images/group-33.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const About = () => {

    return (
        <div className="cloud_about">
            <div className="cover_image">
                <img src={Banner} alt=""/>
            </div>
            <div className="content">
                <div className="arrow " id="id" data-aos="fade-left" data-aos-delay="400" >
                    <p>WHO ARE WE</p>
                    <br/>
                    <h3>We are Cloud Experts</h3>
                    <h4>A team of cloud experts committed to provide exceptional <br/>
                        tech solutions to complex problems with our expertise and <br/> favourite technology, with pleasure!  </h4>
                    <br/>
                    <button className="know">Know Us <i class="fas fa-arrow-right"></i></button>
                </div>
                <div className="image"  data-aos="fade-right" data-aos-delay="400" >
                    <img src={combo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About
