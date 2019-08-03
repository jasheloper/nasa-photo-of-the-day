import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "./Image";
import styled from "styled-components";


const ContainerDiv = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 50%;
  font-family: sans-serif;
  text-align: center;
  background-color: #212F3C;
  box-sizing: border-box;
  padding: 1em;
  border-radius: 1em;
  line-height: 2em;
  font-family: verdana;
`;

const Title = styled.h1`
  color: #FFC300;
`;

const Date = styled.h2`
  color: #CCD1D1;
`;

const Explain = styled.p`
  color: #F0F3F4;
  font-size: 13px;
`;

const Copyright = styled.h4`
font-size: 30px;
  color: #F5B041;
`;






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

      <ContainerDiv>

                <Title>{title}</Title>
                <Date>{date}</Date>



                <div>

                   <Image imgURL={photo} />

                </div>



                <Explain>{explain}</Explain>


                <div>

                    <Copyright>{copyright}</Copyright>

                </div>


      </ContainerDiv>
    )


};




export default NasaGrid;


