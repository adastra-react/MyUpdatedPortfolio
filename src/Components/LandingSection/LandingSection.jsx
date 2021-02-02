import React from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import Header from '../Header/Header';
import PortfolioPicIll1  from '../../images/portfolio-pic.png';
import PortfolioPicIll2  from '../../images/portfolio-pic2.png';
import Footer from '../Footer/Footer';
import Parallax from 'react-rellax';
import { motion } from "framer-motion"



import './LandingSection.css'


function LandingSection() {
    const skill1 = 'Designer';
    const skill2 = '<CODER>';
    return (
        <div className="landing-section">
            <Header/>
            <div className="landing-section-cont">
                <div className="landing">
                        <div className="inner-landing landing-1">         
                            <div className="inner-landing-cont">
                              
                                <Parallax speed={-4}>
                                <Link className="portfolio-link" to="">
                                    <h1 className="main-txt">{skill1}</h1>
                                    <p className="sndry-txt">UI/UX designer with a passion
                                        for <br/> designing beautiful and fuctional <br/>
                                        user experiences.
                                    </p>
                                    {/* <img className="portfolio-pic-1" src={PortfolioPicIll1} alt=""/> */}
                                </Link>
                                </Parallax>
                               
                            </div>
                            
                        </div>

                        <div className="inner-landing landing-2">
                            <div>
                               
                                <Parallax speed={-4} >
                                    <Link className="portfolio-link" to="">
                                    <h1 className="main-txt">{skill2}</h1>
                                    <p className="sndry-txt">Front end Developer who focuses <br/> on writing
                                    clean, elegant and <br/> efficient code.</p>
                                    </Link>
                                </Parallax>
                                {/* <img className="portfolio-pic-2" src={PortfolioPicIll2} alt=""/> */}

                            </div>
                             
                        </div>
                </div>
                <Particles
                className="particle-cont"
                 params={{
                    "particles": {
                        "number": {
                            "value": 90,
                            "density": {
                                "enable": true,
                                "value_area": 2000.4120608655228
                            }
                        },
                        "color": {
                            "value": "#000000"
                        },
                        "shape": {
                            "type": "square",
                            "stroke": {
                                "width": 2,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 5
                            },
                            "images":
                                {
                                  "src": "./react-logo.png",
                                  "width": 100,
                                  "height": 100,
                                //   "opacity": 1
                                }
                            
                        },
                        "opacity": {
                            "value": 0.4008530152163807,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 2,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 100,
                            "color": "#000000",
                            "opacity": 1,
                            "width": 0.9
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "grab"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 100,
                                "duration": 0.4,
                                "opacity": 1
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}
                 />
                 <div className="latest-work-cont">
                     <p className="latest-work-header-text" >SOME OF MY LATEST WORK</p>
                     
                    <div className="landing-portfolio">
                        <div className="port-card-cont">
                            <div className="post-card-img-cont post-card-img-cont-1">
                                
                            </div>
                            <div className="post-card-info-cont">
                            <p className="post-card-info-cont-prm">SmartHub Ja</p>
                            <p className="post-card-info-cont-snd">Website</p>
                            </div>
                        </div>
                        

                        <div className="port-card-cont">
                            <div className="post-card-img-cont post-card-img-cont-2">
                                
                            </div>
                            <div className="post-card-info-cont">
                            <p className="post-card-info-cont-prm">Lamborghini website clone</p>
                            <p className="post-card-info-cont-snd">Website</p>
                            </div>
                        </div>

                        <div className="port-card-cont">
                            <div className="post-card-img-cont post-card-img-cont-3">
                                
                            </div>
                            <div className="post-card-info-cont">
                            <p className="post-card-info-cont-prm">Previous portfolio site</p>
                            <p className="post-card-info-cont-snd">Website</p>
                            </div>
                        </div>
                    </div>
                 </div>
                
            </div>
                <Footer/>
        </div>
    )
}

export default LandingSection
