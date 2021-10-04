import React from 'react';
import { Redirect } from 'react-router-dom';
import { FirstHomeSection } from '../../components';

function Home({
  currentUser
}) {

  if (!currentUser) {
    return <Redirect to='/sign-up'/>;
  }

  return (
    <>
      <FirstHomeSection  />
    </>
  );
}

export default Home;