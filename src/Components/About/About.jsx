import React from 'react';
import Header from '../Header/Header';
import Particles from 'react-particles-js';
import PortfolioPicIll1  from '../../images/portfolio-pic-6.png';
import './About.css';
import Chart from '../Chart/Chart';
import Wraith from '../../images/warith-baby.png';
import MeTv from '../../images/me-curved-tv.png';
import Footer from '../Footer/Footer';


function About() {
    return (
        <div className="about">
             <Header/>
             <div className="about-landing">
                <div className="about-me-cont">
                    <div>
                        <h1 className="about-me-head-txt" >about me</h1>
                        <p></p>
                        <br/>
                        <h4 className="about-me-sub-txt" >I'm a graphic designer and front end developer based in St.James, Jamaica.</h4>
                        <br/>
                        <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. <br/> When I'm not coding, tweeting or pushing pixels, you'll find me
                        <br/>
                         cooking, gaming, video editing, 3D modeling.</p>
                    </div>
                    <div className="about-me-pic-cont">
                        <img className="about-me-pic" src={PortfolioPicIll1} alt=""/>
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
                 <div className="chart-outter-cont">
                     <div>
                        <h3>Part Designer</h3>
                        <ul className="skill-list">
                            <li>UX desgin</li>
                            <li>UI desgin</li>
                            <li>Intergaction design</li>
                            <li>Researcher</li>
                            <li>Make it "pop"</li>
                        </ul>
                     </div>

                     <div className="chart-cont">
                        <Chart className="chart-comp" />
                     </div>

                     <div>
                         <ul className="skill-list">
                         <h3>Part Coder</h3>
                            <li>Front end developer</li>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>React Native</li>
                        </ul>
                     </div>

                     
                 </div>
                 <div className="random-facts-cont-outter">
                 <div className="random-facts-cont">
                            <div className="random-fact-div">
                                <img className="wraith-pic" src={Wraith} alt=""/>
                            </div>

                            <div className="random-fact-div">
                                <div>
                                <h4>Random Facts</h4>
                                <ul className="random-fact-list">
                                    <li><p>I love apex legends 💘</p></li>
                                    <li><p>The picture on the left is Wraith from apex legends.</p></li>
                                    <li><p>Wraith is the best legend in apex legends. 😁</p></li>
                                    <li><p>I love video editing. 🎥</p></li>
                                    <li><p>The Weeknd and Drake are my goto artists.</p></li>
                                    <li><p>I also do 3D modeling 🪀</p></li>
                                </ul>
                                </div>
                            </div>
                     </div>
                 </div>
                 <div className="features-cont">
                     <div>
                        <h2 className="feature-header-txt">Featured in a few places</h2>
                        <p>I was lucky enough to be featured in a few local <br/>
                           newspaper articles, television daily shows, and <br/>
                           code with worldclass developers.
                        </p>
                     </div>
                     <div>
                        <img className="feature-img" src={MeTv} alt=""/>
                     </div>
                 </div>
             </div>
             <Footer/>
        </div>
    )
}

export default About;
