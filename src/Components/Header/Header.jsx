import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="brand-logo-cont">
                <Link to="/">
                    {/* <img className="brand-logo" src="" alt=""/> */}
                    <h1 className="brand-logo">Cypher</h1>
                </Link>
            </div>

            <div className="nav-links-cont">
                <Link className="nav-link" to="/about">
                    <p className="nav-link-text">About</p>
                </Link>

                {/* <Link className="nav-link" to="/featured">
                    <p className="nav-link-text">Featured</p>
                </Link> */}

                <Link className="nav-link" to="/portfolio">
                    <p className="nav-link-text">Portfolio</p>
                </Link>
{/* 
                <Link className="nav-link" to="/contact">
                    <p className="nav-link-text">Contact</p>
                </Link> */}
            </div>

            <div className="nav-social-cont">
                <Link>
                    <InstagramIcon className="social-icon"/>
                </Link>

                <Link>
                    <GitHubIcon className="social-icon"/>
                </Link>

                <Link>
                    <FacebookIcon className="social-icon"/>
                </Link>

                <Link>
                    <TwitterIcon className="social-icon"/>
                </Link>

                <Link>
                    <LinkedInIcon className="social-icon"/>
                </Link>
            </div>
        </div>
    )
}

export default Header;
