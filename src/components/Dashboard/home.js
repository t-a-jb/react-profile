import { useRef } from 'react';
import { signOutUser, dbRef, storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';







const Home = () => {
    const form = useRef([]);
    console.log(form);


    const submitPortfolio = (event) => {
        event.preventDefault();

        const itemName = form.current[0]?.value;
        const itemDescription = form.current[1]?.value;
        const itemURL = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        console.log(itemName, itemDescription, itemURL, image);

        const storageRef = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageRef, image)
            .then( (snapshot) => { 
                console.log(snapshot.ref);
                getDownloadURL(snapshot.ref)
                    .then( (downloadUrl) => {
                        console.log(downloadUrl);
                        savePortfolio(downloadUrl);
                    })
                    .catch( (error) => {
                        console.log(error);
                    })
            });

        const savePortfolio = (imageURL) => {
            const portfolioItem = {
                itemName,
                itemDescription,
                itemURL,
                imageURL,
            }
            console.log(portfolioItem);
            
            addDoc(dbRef, portfolioItem)
                .then( (documentRef) => {
                    console.log('Document has been uploaded successfully', documentRef);
                    form.current.reset();

                })
                .catch( (error) => {
                    console.log(error);
                });
        }
    }


    return(
    <div>
        <h2>This dashboard is only an example to demonstrate the use of Google Firebase</h2>
        <h1>You are logged in!</h1>

        <form ref={form} onSubmit={submitPortfolio}> 
            <input type='text' placeholder="Name" /><br />
            <textarea placeholder="Description"></textarea><br />
            <input type='text' placeholder="URL" /><br />
            <input type='file' placeholder="Image" /><br />
            <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        <br />

        <button onClick={signOutUser}>Sign out</button>


    </div>)
}


export default Home;