import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import RevealLetters from '../RevealLetters';
import Mottmac from "../../assets/images/mottmac.png";
import Bom from "../../assets/images/bom.jpeg";
import Wsp from "../../assets/images/wsp.png";
import Ga from "../../assets/images/ga.png";
import Rmit from "../../assets/images/rmit.png";
import MelbUni from "../../assets/images/melb-uni.png";
import Srl from "../../assets/images/srl.jpeg";
import Dsip from "../../assets/images/inland-port.jpeg";
import Lxrp from "../../assets/images/lxrp.jpeg";





const Career = () => {

    
    return (
        <div>

            <Loader type="line-scale" color="rgb(169, 255, 3)" width={500} />

            <div className='portfolio-body body'>

                <h1 className="career-heading">
                    <AnimatedLetters strArray={"/ professional experience".split('')} startIdx={1} />
                </h1>

                <section className = "career content-container">

                    <div className="work">
                        <h2 className="org">.mott_macdonald</h2>
                        <p className="role">senior civil engineer</p>
                        <p className="year">2019 to present</p>
                        <div className="career-img-container">
                            <a href="https://www.mottmac.com/australia" target="_blank">
                                <img className = "work-img" src ={Mottmac} />
                            </a>
                        </div>
                    </div>

                    <div className="work">
                        <h2 className="org">.bureau_of_meterology</h2>
                        <p className="role">hydrologist</p>
                        <p className="year">2019</p>
                        <div className="career-img-container">
                            <a href="http://www.bom.gov.au/" target="_blank">
                                <img className = "work-img" src={Bom} />
                            </a>
                        </div>
                    </div>

                    <div className="work">
                        <h2 className="org">.irwinconsult_wsp</h2>
                        <p className="role">civil engineer</p>
                        <p className="year">2016 to 2019</p>
                        <div className="career-img-container">
                            <a href="https://www.wsp.com/en-au/" target="_blank">
                                <img className = "work-img" src={Wsp} />
                            </a>
                        </div>
                    </div>
                </section>

                <div>
                    <h1 className="career-heading">
                        <RevealLetters strArray={"/ education".split('')} startIdx={1} />
                    </h1>
                </div>

                <div className='reveal fade-bottom'>
                    <section className = "career content-container">
                    
                        <div className="work">
                            <h2 className="org">.general_assembly</h2>
                            <p className="qual">JavaScript development</p>
                            <p className="year">2022</p>
                            <div className="career-img-container">
                                <a href="https://generalassemb.ly/education/javascript-development/sydney" target="_blank">
                                    <img className = "work-img" src ={Ga} />
                                </a>
                            </div>
                        </div>

                        <div className="work">
                            <h2 className="org">.rmit_university</h2>
                            <p className="qual">bachelor of engineering / honours</p>
                            <p className="year">2016</p>
                            <div className="career-img-container">
                                <a href="https://www.rmit.edu.au/study-with-us/levels-of-study/undergraduate-study/honours-degrees/bachelor-of-engineering-civil-and-infrastructure-honours-bh077" target="_blank">
                                    <img className = "work-img" src ={Rmit} />
                                </a>
                            </div>
                        </div>

                        <div className="work">
                            <h2 className="org">.university_of_melbourne</h2>
                            <p className="qual">bachelor of arts</p>
                            <p className="year">2013</p>
                            <div className="career-img-container">
                                <a href="https://study.unimelb.edu.au/find/courses/undergraduate/bachelor-of-arts/" target="_blank">
                                    <img className = "work-img" src ={MelbUni} />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>


                <div className='reveal fade-bottom'>
                    <h1 className="career-heading">
                        <RevealLetters strArray={"/ significant engineering projects".split('')} startIdx={1} />
                    </h1>

                    <section className = "career content-container">
                        <div className="work">
                            <h2 className="org">.suburban_rail_loop</h2>
                            <p className="role">senior civil engineer</p>
                            <p className="year">2019 to 2021</p>
                            <div className="career-img-container">
                                <a href="https://bigbuild.vic.gov.au/projects/suburban-rail-loop" target="_blank">
                                    <img className="work-img civil-project-img" src ={Srl} />
                                </a>
                            </div>
                        </div>

                        <div className="work">
                            <h2 className="org">.dandenong_inland_port</h2>
                            <p className="role">senior civil engineer</p>
                            <p className="year">2021</p>
                            <div className="career-img-container">
                                <a href="https://www.salta.com.au/projects/Dandenong-south-intermodal-terminal/" target="_blank">
                                    <img className = "work-img civil-project-img" src ={Dsip} />
                                </a>
                            </div>
                        </div>

                        <div className="work">
                            <h2 className="org">.level_crossing_removal</h2>
                            <p className="role">senior civil engineer</p>
                            <p className="year">2022</p>
                            <div className="career-img-container">
                                <a href="https://bigbuild.vic.gov.au/projects/level-crossing-removal-project" target="_blank">
                                    <img className = "work-img civil-project-img" src = {Lxrp}/>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>


            </div>
        </div>
    );
}

export default Career;