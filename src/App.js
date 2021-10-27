import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import SignUpSignIn from './pages/SignUpSignIn/SignUpSignIn';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class  App extends React.Component {
  constructor   () {
    super();

    this.state ={
      currentUser: 1
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

  render() {
    //debugger;
    return (
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
        <Route exact path="/" render={() => <Home  currentUser={this.state.currentUser} />} />            
        <Route exact path="/sign-up" render={(props) => <SignUpSignIn currentUser={this.state.currentUser} />} />  
        </Switch>
        <Footer />
      </Router>
    );
  }

}

export default App;
