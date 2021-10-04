import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

import { OriginalLink } from "./Card.elements";

const api =  axios.create({
  baseURL: 'http://localhost:3001/'
  // baseURL: 'http://f1.sergei.info:3000/'
})


const Card =  ({ matchID, imagedata, confidence, imageUrl }) => {

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

  const imageUrl1  = (imageUrl.indexOf("http")>-1) ? imageUrl : 'http://'+ imageUrl;

  let css = 'tc bg-light-gray dib br3 pa3 ma2  bw2 shadow-5';
  
  return (
        <div className={css}  >
            <img src={thumbnailData}  alt=""/>
            <h4>Confidence {confidence}%.</h4>
            <OriginalLink
              href={imageUrl1}
              rel='noopener noreferrer'
              target='_blank'
            >
              Original here.
            </OriginalLink>
        </div>
  );
}

export default Card; 