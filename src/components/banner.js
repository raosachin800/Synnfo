import React,{useEffect} from 'react'
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import anime from 'animejs/lib/anime.es.js';
import '../components/banner.css'
import Rocket from '../images/rocket-2.svg'
import Clouds from '../images/Clouds_grouped.svg'


gsap.registerPlugin(MotionPathPlugin, PixiPlugin, ScrollToPlugin, ScrollTrigger);

const Banner = () => {
    useEffect(() => {
        var t1 = gsap.timeline();
        t1.fromTo(".engineer",{x:-1000,opacity:0},{x:0,opacity:1,duration:0.7} )
        .fromTo(".button",{x:-20,opacity:0},{x:0,opacity:1,duration:0.1} )
    }, [])
    useEffect(() => {
        anime({
            targets: '.fire',
            translateY: 40,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
});
    }, [])
    return (
        <div className="banner">
            <div className="rocket">
                <div className="banner_header">
                    <div className="main_header">
                        <div className="top_section">
                            <div className="group">
                                <h1 className="engineer">We Engineer  brilliant  Solution</h1>
                                <button className="button">Let's Collaborate <i class="fas fa-arrow-right"></i>
                                </button>
                            </div>
                            <div className="fire">
                                <img className="rocket"src={Rocket} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="clouds">
                        <img src={Clouds} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
