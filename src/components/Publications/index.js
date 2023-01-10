import './index.scss';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { render } from '@testing-library/react';
import { useEffect, useState} from 'react';

import { getDocs } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { dbRef } from "../../firebase";


const Publications = () => {

    const [portfolio, setPortfolio] = useState([]);

    useEffect( () => {
        getPortfolio();
     },[]);




    const getPortfolio = async () => {
        const querySnapshot = await getDocs(dbRef);
        console.log(querySnapshot.docs);
        setPortfolio(querySnapshot.docs.map( (doc) =>  doc.data() ));
    }




    const renderPortfolio = (portfolio) => {
        return(
            <div className='portfolio-content'>
                {
                    portfolio.map( (port, idx) => {
                        return(
                            <div className='portfolio-item' key={ `port-${idx}` }>
                                <img src={port.imageURL} alt={port.itemName} />
                                <h3>{port.itemName}</h3>
                                <p>{port.itemDescription}</p>
                                <button onClick={ () => window.open(port.itemURL) }>View site</button>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
    
    return (
        <div>
            <h1 className='publications-heading'>
                <AnimatedLetters strArray={"/ publications".split('')} startIdx={1} />
            </h1>

            {renderPortfolio(portfolio)}


            <Loader type="line-scale" color="rgb(169, 255, 3)" width={500} />

        </div>  
    );

}

export default Publications;