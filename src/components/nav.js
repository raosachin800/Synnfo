import React, { useEffect } from 'react'
import gsap from 'gsap'
import '../components/nav.css'
import Logo from '../images/group-2.svg'
import close from '../images/hamburger-square.svg'
import insta from '../images/Vectorda.svg'
import phone from '../images/phone.svg'
import email from '../images/group-35.svg'
import group from '../images/Group 4.svg'

const Nav = () => {
    const openNav =()=>{
        document.getElementById("ham").style.width="5000px";
        document.getElementById("overlay").style.display = "block";
        document.getElementById("overlay").style.width = "5000px";
    }
    
    const closeNav =()=>{
        document.getElementById("ham").style.width="0";
        document.getElementById("overlay").style.display = "none";
    }
    
    const openMob =()=>{
        document.getElementById("ham").style.width="1650px";
    }
    
    
    
    useEffect(() => {
        var t1 = gsap.timeline();
        t1.fromTo(".logo",{y:-40,opacity:0},{y:0,opacity:1,duration:0.5})
        .fromTo(".first_link",{x:40,opacity:0},{x:0,opacity:1,duration:0.1} )
        .fromTo(".second_link",{x:40,opacity:0},{x:0,opacity:1,duration:0.1})
        .fromTo(".third_link",{x:40,opacity:0},{x:0,opacity:1,duration:0.1})
        .fromTo(".fourth_link",{x:40,opacity:0},{x:0,opacity:1,duration:0.1})
        .fromTo(".hamburger",{x:40,opacity:0},{x:0,opacity:1,duration:0.1})
    }, [])

    return (
        <div className="navbar">
            <div className="nav_content">
            <img className="logo" src={Logo} alt=""/>
            <ul>
                <li><a href="#" className="first_link" >HOME</a></li>
                <li><a href="#" className="second_link" >ABOUT US</a></li>
                <li><a href="#" className="third_link" >SERVICES</a></li>
                <li><a href="#" className="fourth_link" >CONTACT US</a></li>
                <a href="#" className="hamburger edesk" onClick={openNav} >
                    <div className="one"></div>
                    <div className="two"></div>
                </a>
                <a href="#" className="hamburger mobi" onClick={openMob} >
                    <div className="one"></div>
                    <div className="two"></div>
                </a>
            </ul>
            </div>
            <div className="ham_content" id="ham">
                <div id="overlay"></div>
                <div className="cloudy">
                    <img src={group} alt=""/>
                </div>
                <div className="left_full_nav">
                    <h2>SERVICES</h2>
                    <h3>Cloud Services</h3>
                    <h3>Cyber Security</h3>
                    <h3>Software Testing</h3>
                    <h3>Digital Solutions</h3>
                    <h3>Analytics, Insights & Data</h3>
                    <h3>Managed IT Services</h3>
                    <div className="under_div">
                        <h1>LOCATION</h1>
                        <div className="up">
                            <div className="left_up">
                                <h3>Need the office address here</h3>
                                <h3>Australia</h3>
                            </div>
                            <div className="right_up">
                                <h3>Need the office address here</h3>
                                <h3>Australia</h3>
                            </div>
                        </div>
                    </div>
                    <div className="fourth_column1">
                        <div className="contact_info1">
                            <h3>CONTACT</h3>
                            <h4> <img src={phone} alt=""/>  9898989898</h4>
                            <h4> <img src={email} alt=""/>   email@synnfo.com</h4>
                        </div>
                        <div className="social_media1">
                            <h3>SOCIAL MEDIA</h3>
                            <img src={insta} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="right_full_nav">
                    <div className="close">
                        <img src={close} className="desktop" alt="" onClick={closeNav}/>
                    </div>
                    <div className="abso">
                        <p>MENU</p>
                        <h1>Home</h1>
                        <h1>About Us</h1>
                        <h1>Services</h1>
                        <h1>Partners</h1>
                        <h1>Career</h1>
                        <h1>Blogs</h1>
                        <h1>Contact Us</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Nav
