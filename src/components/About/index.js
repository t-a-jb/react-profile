import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Portrait from "../../assets/images/portrait.jpeg";



const About = () => {
    
    return (
    <div>

        <Loader type="line-scale" color="rgb(169, 255, 3)" width={500} />

        <div class = "about content-container">
            <div className="img-container">
                <img className="profile-img" src={Portrait} alt="Tristan portrait" />
            </div>
            <div className="about-description">
                <h2>
                    <AnimatedLetters strArray={"/ about me".split('')} startIdx={1} />
                </h2>
                <div className='about-text'>
                    <p className='para-one'>Highly motivated Software Engineer passionate about using tech to enhance our world.</p>
                    <br />
                    <p className='para-two'>Extensive professional experience working on Australia’s most ambitious infrastructure projects as a Senior Civil Engineer.</p>
                    <br />
                    <p className='para-three'>Graduated from the Victorian Government’s competitive Digital Jobs program with a certification in JavaScript Development from General Assembly.</p>
                    <br />
                    <p className='para-four'>Seeking opportunities to leverage my strong problem solving and analytical skills to contribute to meaningful projects.</p>
                    <br />
                </div>
            </div>
        </div>

    </div>
    );

}

export default About;