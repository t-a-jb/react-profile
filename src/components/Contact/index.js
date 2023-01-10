import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import {MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
// import * as leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});


const Contact = () => {
    
    return (
        <>
            <div className='about-page'>
                <div className='container'>
                    <div className='left-side'>

                        <h1 className='contact-heading'>
                            <AnimatedLetters strArray={"/ contact".split('')} startIdx={1} />
                        </h1>

                        <h2 className='form-text'>Contact form is a code example only, please send me an email.</h2>


                        <div className='contact-form'>
                            <form>
                                <div className='form-row'>
                                    <input type="text" name="name" placeholder='Name'></input>
                                    <input type="email" name="email" placeholder='Email'></input>
                                </div>
                                <div className='form-row'>
                                    <textarea name='message' placeholder='Message'></textarea>
                                </div>
                                <div className='form-row'>
                                    <input type="submit" className='form-submit'></input>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className='right-side'>
                        <div className='map-info'>
                            <p>
                                Based in Melbourne, Victoria<br></br>
                                <span>tristan.jeffrey-bailey@outlook.com</span>
                            </p>
                        </div>
                        <div className='map-wrapper'>
                            <MapContainer center={[-37.81220959779143, 144.9623067214305]} zoom={11}>
                            <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[-37.77424462501971, 145.04248520058718]} icon={DefaultIcon}>
                                    <Popup>
                                        It all starts with a line of JavaScript!!!
                                    </Popup>

                                </Marker>
                            </MapContainer>

                        </div>

                    </div>

                

                    

                </div>
            </div>

            <Loader type="line-scale" color="rgb(169, 255, 3)" width={500} />           
        </>


    );

}

export default Contact;