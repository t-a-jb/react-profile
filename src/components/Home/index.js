import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import CodeLogos from "../../assets/images/js-html-css-logo.png";






const Home = () => {
    
    return (
        <div className = 'home-page'>
            {/* <h2> 
                <AnimatedLetters strArray={"Tristan's Portfolio".split('')} startIdx={1} />
                <br></br>
            </h2>
            <h3>
                <AnimatedLetters strArray={"Front End Dev".split('')} startIdx={20} />  
            </h3> */}

            <Loader type="line-scale" color="rgb(169, 255, 3)" width={500} />

            <section class = "index content-container">
                <div class="text-container">
                    <p>HTML5 / CSS3</p>
                    <p>JavaScript / ES6 / ECMAScript 2020</p>
                    <p>DOM interaction</p>
                    <p>web API calls</p>
                    <p>React frameworks</p>
                    <p>node.js</p>
                    <p>source control with Git and GitHub</p>
                    <p>technical documentation</p>
                    <p>research and development</p>
                </div>
                <div class = "logo-container">
                    <img class = "logo" src={CodeLogos} alt="code logo"></img>
                </div> 
            </section>


        </div>

    );

}

export default Home;