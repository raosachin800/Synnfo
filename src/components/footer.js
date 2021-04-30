import React from 'react'
import './footer.css'
import footer from '../images/rectangle-copy-232.svg'
import insta from '../images/Vectorda.svg'
import phone from '../images/phone.svg'
import email from '../images/group-35.svg'
import footer1 from '../images/footer1.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Footer = () => {
    return (
        <div className="footer">
            <div className="background_image">
                <img className="footer_first" src={footer} alt=""/>
                <img src={footer1} alt="" className="footer_second"/>
            </div>
            <div className="content1" data-aos="fade-in">
                <div className="left_column">
                    <div className="upper_info" data-aos="fade-in"
                    data-aos-duration="1200">
                        <h2>We engineer
                        brilliant solutions
                    </h2>
                    <button className="colab" data-aos="fade-in"
                    data-aos-duration="1500">
                        Let's Collaborate <i class="fas fa-arrow-right"></i>
                    </button>
                    </div>
                    <div className="lower_info">
                        <div className="left_lower_info">
                            <h2 data-aos="fade-in"
                            data-aos-duration="1700" >LOCATION</h2>
                            <p data-aos="fade-in"
                    data-aos-duration="1700">Need the office Address here.</p>
                            <h3 data-aos="fade-in"
                    data-aos-duration="2100">Australia</h3>
                        </div>
                        <div className="right_lower_info">
                            <p data-aos="fade-in"
                    data-aos-duration="2100">Need the office Address here</p>
                            <h3 data-aos="fade-in"
                    data-aos-duration="2100">Australia</h3>
                        </div>
                    </div>
                </div>
                <div className="second_column">
                    <h3 data-aos="fade-down"
                    data-aos-duration="1000">LINKS</h3>
                    <h4 data-aos="fade-down"
                    data-aos-duration="1000">Home</h4>
                    <h4 data-aos="fade-down"
                    data-aos-duration="1000">About Us</h4>
                    <h4 data-aos="fade-down"
                    data-aos-duration="1000">Services</h4>
                    <h4 data-aos="fade-down"
                    data-aos-duration="1000">Process</h4>
                    <h4 data-aos="fade-down"
                    data-aos-duration="1000">Partners</h4>
                    <h4 data-aos="fade-down"
                    data-aos-duration="1000">Career</h4>
                    <h4 data-aos="fade-down"
                    data-aos-duration="1000">Blogs</h4>
                    <h4 data-aos="fade-down"
                    data-aos-duration="1000">Contact Us</h4>   
                </div>
                <div className="third_column">
                    <h3 data-aos="fade-up"
                    data-aos-duration="1000" >SERVICES</h3>
                    <h4 data-aos="fade-up"
                    data-aos-duration="1000" >Cloud Services</h4>
                    <h4 data-aos="fade-up"
                    data-aos-duration="1000" >Cyber Security</h4>
                    <h4 data-aos="fade-up"
                    data-aos-duration="1000" >Software Testing</h4>
                    <h4 data-aos="fade-up"
                    data-aos-duration="1000" >Digital Solutions</h4>
                    <h4 data-aos="fade-up"
                    data-aos-duration="1000" >Analytics, Insights & Data</h4>
                    <h4 data-aos="fade-up"
                    data-aos-duration="1000" >Managed IT Services</h4>
                </div>
                <div className="fourth_column" data-aos="fade-left"
                    data-aos-duration="1000">
                    <div className="social_media">
                        <h3>SOCIAL MEDIA</h3>
                        <img src={insta} alt=""/>
                    </div>
                    <div className="contact_info">
                        <h3>CONTACT</h3>
                        <h4> <img src={phone} alt=""/>  9898989898</h4>
                        <h4> <img src={email} alt=""/>   email@synnfo.com</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
