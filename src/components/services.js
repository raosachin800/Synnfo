import React from 'react'

import '../components/services.css'
import hero from '../images/group-44.svg'
import Cloud from '../images/services-cloud-services.svg'
import Cyber from '../images/services-cyber-security.svg'
import Data from '../images/services-data-analytics.svg'
import Digital from '../images/services-digital-solutions.svg'
import Software from '../images/services-software-testing.svg'
import It from '../images/services-managed-it-solutions.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Services = () => {
    return (
        <div className="provided_services">
            <div className="first_service">
                <img src={hero} alt=""/>
            </div>
            <div className="services_top">
                <div className="services_title">
                    <p>OUR SERVICES</p>
                    <h1>What can we do for you</h1>
                    <h3>We strive to bring the highest quality solutions with a fresh perspective focused on emerging technology</h3>
                </div>
                
                <div className="services_cards swiper-container">
                    <div className="cards" data-aos="fade-right" data-aos-delay="300">
                        <img src={Cloud} alt=""/>
                        <div className="bio">
                            <h2>Cloud Services</h2>
                            <h4>We solve complex problems with our favourite technology.</h4>
                            <h3>More </h3>
                        </div>
                    </div>
                    
                    <div className="cards" data-aos="fade-down" data-aos-delay="300">
                        <img src={Cyber} alt=""/>
                        <div className="bio">
                            <h2>Cyber Security</h2>
                            <h4>We solve complex problems with our favourite technology.</h4>
                            <h3>More </h3>
                        </div>
                    </div>
                    <div className="cards" data-aos="fade-left" data-aos-delay="300">
                        <img src={Software} alt=""/>
                        <div className="bio">
                            <h2>Software Testing</h2>
                            <h4>We solve complex problems with our favourite technology.</h4>
                            <h3>More </h3>
                        </div>
                    </div>
                    <div className="cards" data-aos="fade-right" data-aos-delay="300">
                        <img src={Data} alt=""/>
                        <div className="bio">
                            <h2>Data Analytics & Insights</h2>
                            <h4>We solve complex problems with our favourite technology.</h4>
                            <h3>More </h3>
                        </div>
                    </div>
                    <div className="cards" data-aos="fade-up" data-aos-delay="300">
                        <img src={Digital} alt=""/>
                        <div className="bio">
                            <h2>Digital Solutions</h2>
                            <h4>We solve complex problems with our favourite technology.</h4>
                            <h3>More </h3>
                        </div>
                    </div>
                    <div className="cards" data-aos="fade-left" data-aos-delay="300">
                        <img src={It} alt=""/>
                        <div className="bio">
                            <h2>Managed IT Solutions</h2>
                            <h4>We solve complex problems with our favourite technology.</h4>
                            <h3>More </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
