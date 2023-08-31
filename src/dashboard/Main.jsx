import { React, useState ,useEffect} from 'react'
import { Dashboard_container } from './styles/Main'
import Image from './pages/Image'
import { Parent } from '../Styles/Common'
import storage from "../Firebase.js";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL, list, listAll,
} from "firebase/storage";

function Dashboard() {
    const [file, setFile] = useState("");
    const [value, setValue] = useState("");
    const [percent, setPercent] = useState(0);

   const fetchImages = async () => {
        const storageRef = ref(storage, 'images/');
        const result = await listAll(storageRef);

        const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));

        return Promise.all(urlPromises);
    };

    useEffect(()=>{
    setValue(fetchImages());
    console.log(value)
    },[]);

    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);
        console.log(file)
    }
    function handleUpload(e) {
        if (!file) {
            alert("Please choose a file first!")
        }
        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
                
            }
            
        );
        if(percent != NaN){
            alert("image sucessfully uploaded to the website !")
        }

    }
    return (
        <Dashboard_container>
            <input type="file" onChange={handleChange} accept="/image/*" />
            <button onClick={handleUpload} > Add new Image</button>
            <p> {percent} "% done"</p>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <Image />
                    </div>
                    <div class="col">
                        <Image />
                    </div>
                    <div class="col">
                        <Image />
                    </div>
                </div>
            </div>
        </Dashboard_container>
    )
}

export default Dashboard