import React from 'react';
import { Redirect } from 'react-router-dom';
//import { InfoSection } from '../../components';
//import { homeObjOne, homeObjThree } from './Data';

//import { Link } from 'react-router-dom';
import { Container } from '../../globalStyles';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import {
  InfoSec,
  InfoRowSigninSingUp,
  InfoColumn,
} from '../../components/InfoSection/InfoSection.elements';

function SignUpSignIn({
  currentUser
}) {

  if (currentUser !== 1 && currentUser) {
    return <Redirect to='/'/>;
  }

  return (
    <>
      <InfoSec >
        <Container>
          <InfoRowSigninSingUp >
            <InfoColumn>
              <SignIn/>
            </InfoColumn>
            <InfoColumn>
            <SignUp/>
            </InfoColumn>
          </InfoRowSigninSingUp>
        </Container>
      </InfoSec>
    </>
  );
}


export default SignUpSignIn;
