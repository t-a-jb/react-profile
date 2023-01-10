import './index.scss';
import NavLogo from '../../assets/images/nav-logo.png';

import MarioLogo from '../../assets/images/marioImg.png'
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faImage, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (

        // <div className="nav-bar">
        //     <Link className="logo" to="/">
        //         <img src={NavLogo} alt='JSDR logo' />
        //     </Link>

        //     <nav>
        //         <NavLink exact="true" activeclassname="active" to="/">
        //             <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
        //         </NavLink>

        //         <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
        //             <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
        //         </NavLink>

        //         <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
        //             <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
        //         </NavLink>

        //         <NavLink exact="true" activeclassname="active" to="/portfolio" className="portfolio-link">
        //             <FontAwesomeIcon icon={faImage} color="#4d4d4d" />
        //         </NavLink>

        //         <NavLink exact="true" activeclassname="active" to="/dashboard" className="dashboard-link">
        //             <FontAwesomeIcon icon={faSignIn} color="#4d4d4d" />
        //         </NavLink>
        //     </nav>

            // <ul>
            //     <li>
            //         <a target="_blank" rel="noreferrer" href='https://linkedin.com'>
            //             <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
            //         </a>
            //     </li>

            //     <li>
            //         <a target="_blank" rel="noreferrer" href='https://twitter.com'>
            //             <FontAwesomeIcon icon={faTwitter} color="#4d4d4d" />
            //         </a>
            //     </li>

            //     <li>
            //         <a target="_blank" rel="noreferrer" href='https://instagram.com'>
            //             <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
            //         </a>
            //     </li>

            //     <li>
            //         <a target="_blank" rel="noreferrer" href='https://github.com'>
            //             <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
            //         </a>
            //     </li>
            // </ul>
        // </div>



        <div>
            <nav>
                <div className = "nav-info">
                    <NavLink className="nav-link" exact="true" activeClassName="active" to="/">
                        <p className="name"><span className="home">Tristan Jeffrey-Bailey</span></p>
                    </NavLink>

                    <NavLink className="nav-link" exact="true" activeClassName="active" to="/"
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(169, 255, 3)' : 'rgba(255, 255, 255, 1)'
                    })}>
                            <p className="occupation">web developer & senior civil engineer</p>
                    </NavLink>

                    <div className='social-media'>
                        <ul>
                            <li>
                                <a target="_blank" rel="noreferrer" href='https://linkedin.com'>
                                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href='https://twitter.com'>
                                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4d" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href='https://instagram.com'>
                                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4d" />
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer" href='https://github.com/t-a-jb'>
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
                                </a>
                            </li>
                            <li>
                                <a className='mario-logo' target="_blank" rel="noreferrer" href="https://t-a-jb.github.io/mario_game/">
                                    <img src={MarioLogo}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <ul className = "nav-links">

                    <NavLink className="nav-link" exact="true" activeClassName="active" to="/about"
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(169, 255, 3)' : 'rgba(255, 255, 255, 1)'
                    })}>
                            <li><span>about</span></li>
                    </NavLink>

                    <NavLink className="nav-link" exact="true" activeClassName="active" to="/portfolio"
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(169, 255, 3)' : 'rgba(255, 255, 255, 1)'
                    })}>
                        <li><span>portfolio</span></li>
                    </NavLink>
                        
                    <NavLink className="nav-link" exact="true" activeClassName="active" to="/career" 
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(169, 255, 3)' : 'rgba(255, 255, 255, 1)'
                    })}>
                        <li><span>career</span></li>
                    </NavLink>

                    <NavLink className="nav-link" exact="true" activeClassName="active" to="/contact" 
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(169, 255, 3)' : 'rgba(255, 255, 255, 1)'
                    })}>
                        <li><span>contact</span></li>
                    </NavLink>

                    <NavLink className="nav-link" exact="true" activeClassName="active" to="/photography" 
                    style={({ isActive }) => ({
                        color: isActive ? 'rgb(169, 255, 3)' : 'rgba(255, 255, 255, 1)'
                    })}>
                        <li><span>photography</span></li>
                    </NavLink>


                    <div>
                        <NavLink className="nav-link" exact="true" activeClassName="active" to="/publications" 
                        style={({ isActive }) => ({
                            color: isActive ? 'rgb(169, 255, 3)' : 'rgba(255, 255, 255, 1)'
                        })}>
                            <li><span>publications</span></li>
                        </NavLink>
                        <NavLink className='dashboard'  exact="true" activeClassName="active" to="/dashboard">
                            <FontAwesomeIcon icon={faSignIn} color="#4d4d4d" />
                        </NavLink>
                    </div>
                </ul>
            </nav>
        </div>


    )

};

export default Sidebar

