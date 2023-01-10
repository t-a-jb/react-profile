import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Myyth from "../../assets/images/myyth.jpeg";
import Mario from "../../assets/images/mario.jpeg";
import Weather from "../../assets/images/weather.jpeg";
import Coffee from "../../assets/images/coffee.jpeg";
import Traffic from "../../assets/images/traffic.jpeg";
import Restaurant from "../../assets/images/restaurant.jpeg";
import Blog from "../../assets/images/blog.jpeg";
import Freelance from "../../assets/images/freelance.jpeg";



const Projects = () => {
    
    return (
        <div>

            <Loader type="line-scale" color="rgb(169, 255, 3)" width={500} />

            <div className="portfolio-body body">
                <h1 className="portfolio-heading">
                    <AnimatedLetters strArray={"/ web dev portfolio".split('')} startIdx={1} />
                </h1>


                <section className="portfolio content-container">
                    <div className = "project">
                        <p className="project-name"><a href="https://t-a-jb.github.io/myyth/" target="_blank">.myyth</a></p>
                        <p>melbourne band website</p>
                        <div className="project-img-container">
                            <a href="https://t-a-jb.github.io/myyth/" target="_blank">
                                <img className = "project-img" src ={Myyth} />
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <p className="project-name"><a href="https://t-a-jb.github.io/mario_game" target="_blank">.mario_game</a></p>
                        <p>JavaScript mario game</p>
                        <div className="project-img-container">
                            <a href="https://t-a-jb.github.io/mario_game" target="_blank">
                                <img className = "project-img" src ={Mario} />
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <p className="project-name"><a href="https://t-a-jb.github.io/weather_app" target="_blank">.melbourne_weather_app</a></p>
                        <p>JavaScript weather app using APIs</p>
                        <div className="project-img-container">
                            <a href="https://t-a-jb.github.io/weather_app" target="_blank">
                                <img className = "project-img" src ={Weather} />
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <p className="project-name"><a href="https://t-a-jb.github.io/coffee_shop" target="_blank">.coffee_shop</a></p>
                        <p>JavaScript shopping cart</p>
                        <div className="project-img-container">
                            <a href="https://t-a-jb.github.io/coffee_shop" target="_blank">
                                <img className = "project-img" src ={Coffee} />
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <p className="project-name"><a href="https://t-a-jb.github.io/traffic_light" target="_blank">.traffic_light_game</a></p>
                        <p>JavaScript game</p>
                        <div className="project-img-container">
                            <a href="https://t-a-jb.github.io/traffic_light" target="_blank">
                                <img className = "project-img" src ={Traffic} />
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <p className="project-name"><a href="https://t-a-jb.github.io/ga-3-business-site/" target="_blank">.esha's_restaraunt</a></p>
                        <p>mockup restaraunt website</p>
                        <div className="project-img-container">
                            <a href="https://t-a-jb.github.io/ga-3-business-site/" target="_blank">
                                <img className = "project-img" src ={Restaurant} />
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <p className="project-name"><a href="https://t-a-jb.github.io/ga-2-blog/" target="_blank">.jeff's_blog</a></p>
                        <p>mockup blog</p>
                        <div className="project-img-container">
                            <a href="https://t-a-jb.github.io/ga-2-blog/" target="_blank">
                                <img className = "project-img" src ={Blog} />
                            </a>
                        </div>
                    </div>

                    <div className="project">
                        <p className="project-name"><a href="https://t-a-jb.github.io/ga-1-anna-dowlin-website/" target="_blank">.personal_website</a></p>
                        <p>mockup freelance website</p>
                        <div className="project-img-container">
                            <a href="https://t-a-jb.github.io/ga-1-anna-dowlin-website/" target="_blank">
                                <img className = "project-img" src ={Freelance}/>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Projects;