import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

const api =  axios.create({
  baseURL: 'http://localhost:3001/'
  // baseURL: 'http://f1.sergei.info:3000/'
})


const Card =  ({ matchID, imagedata, CardClick }) => {

  const [thumbnailData, setThumbnailData] = useState("");

  useEffect(() => {
    if (matchID) {
        api.get(`/getthumbnail/`+ matchID)
        .then(response => {
          setThumbnailData(response.data);
        }); 

      } else {

        setThumbnailData(null);

      }
  }, [matchID]); 


  let css = 'tc bg-light-gray dib br3 pa3 ma2  bw2 shadow-5';
  
  return (
        <div className={css} onClick={() =>{CardClick(matchID)}} >
            <img src={thumbnailData}  alt=""/>
            <h3>{matchID}</h3>
        </div>
  );
}

export default Card; 