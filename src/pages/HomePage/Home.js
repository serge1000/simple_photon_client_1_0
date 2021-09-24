import React from 'react';
import { Redirect } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing, FirstHomeSection } from '../../components';

function Home({
  currentUser
}) {

  if (!currentUser) {
    return <Redirect to='/sign-up'/>;
  }

  return (
    <>
      <FirstHomeSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
}

export default Home;
