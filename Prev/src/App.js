import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import Faq from './pages/FAQ/Faq';
import SignUpSignIn from './pages/SignUpSignIn/SignUpSignIn';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class  App extends React.Component {
  constructor   () {
    super();

    this.state ={
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
//           <Route path='/sign-up' component={SignUpSignIn} />     
  render() {
    return (
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} /> 
          <Route path='/products' component={Products} />
          <Route path='/faq' component={Faq} />        
          <Route exact path="/sign-up" render={(props) => <SignUpSignIn {...props} currentUser={this.state.currentUser} />} />       
        </Switch>
        <Footer />
      </Router>
    );
  }

}


export default App;
