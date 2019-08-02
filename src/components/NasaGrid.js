import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "./Image";


function NasaGrid() {

    const [title, setTitle] = useState([]);
    const [photo, setPhoto] = useState([]);
    const [date, setDate] = useState([]);
    const [explain, setExplain] = useState([]);
    const [copyright, setCopyright] = useState([]);


    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=ICLzHW9yb3MGATQd9zYxOun8OmsxIJVxyejtDhQE`)
            .then(response => {

                setTitle(response.data.title);
                setDate(response.data.date);
                setPhoto(response.data.hdurl);
                setExplain(response.data.explanation);
                setCopyright(response.data.copyright);

                console.log(response.data);

            })


            .catch(
                error => console.log(error)
            )
    }, [])


    return (

      <div>

                <h1>{title}</h1>
                <h2>{date}</h2>



                <div>

                   <Image imgURL={photo} />

                </div>



                <p>{explain}</p>


                <div>

                    <h4>{copyright}</h4>

                </div>


      </div>
    )


};




export default NasaGrid;


