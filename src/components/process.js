import React from 'react'
import './process.css'
import rectangle from '../images/rectangle.svg'
import path from '../images/Group 2patha122.svg'
import requirement from '../images/process-req-gathering.svg'
import resource from '../images/process-resource-selection.svg'
import process from '../images/process-proposal.svg'
import execution from '../images/process-execution.svg'
import improvement from '../images/process-ci.svg'
import contract from '../images/process-contract.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Process = () => {


    return (
        <div className="process">
            <div className="process_image">
                <img src={rectangle} alt=""/>
            </div>
            <div className="header">
                <div className="header1">
                    <p>Process</p>
                    <h2>We mind the process!</h2>
                    <h4>We strive to bring the highest quality solutions with a fresh perspective focused on emerging technology</h4>
                </div>
                <div className="process_names">
                    <div className="path" data-aos="fade-in"
                    data-aos-duration="3000"
                    >
                        <img src={path} alt=""/>
                    </div>
                    <div className="process_cards" >
                        <div className="cards" data-aos="slide-right" data-aos-duration="1000">
                            <img src={requirement} alt=""/>
                            <div className="fler">
                                <h2>Requirement gathering</h2>
                            <h4>A growing part of our business is focused on emerging tech.</h4>
                            </div>
                            
                        </div>
                        <div className="cards"data-aos="slide-right" data-aos-duration="1000" >
                            <img src={resource} alt=""/>
                            <div className="fler">
                            <h2>Resource Selection</h2>
                            <h4>A growing part of our business is focused on emerging tech.</h4>
                            </div>
                        </div>
                        <div className="cards" data-aos="slide-right" data-aos-duration="1000">
                            <img src={process} alt=""/>
                            <div className="fler">
                            <h2>Proposal</h2>
                            <h4>A growing part of our business is focused on emerging tech.</h4>

                            </div>
                        </div>
                        <div className="cards" data-aos="slide-left" data-aos-duration="1000">
                            <img src={execution} alt=""/>
                            <div className="fler">
                            <h2>Execution</h2>
                            <h4>A growing part of our business is focused on emerging tech.</h4>

                            </div>
                        </div>
                        <div className="cards" data-aos="slide-left" data-aos-duration="1000">
                            <img src={improvement} alt=""/>
                            <div className="fler">
                            <h2>Continous improvement</h2>
                            <h4>A growing part of our business is focused on emerging tech.</h4>

                            </div>
                        </div>
                        <div className="cards" data-aos="slide-left" data-aos-duration="1000">
                            <img src={contract} alt=""/>
                            <div className="fler">
                            <h2>Contract Finalization</h2>
                            <h4>A growing part of our business is focused on emerging tech.</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process
