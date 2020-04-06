import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/styles';
import logoSVG from './assets/logo/noun_Deer_53375.svg'
import logoPNG from './assets/logo/noun_Deer_53375.png'
// import SvgIcon from '@material-ui/core/SvgIcon';
import BottomNav from './components/Navigation/BottomNav'
import { Theme, createStyles, MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from './context/ThemeContext';
import Landing from './components/Landing/Landing';
import AuthToolbar from './components/Navigation/AuthToolbar';
import PostsContextProvider from './context/PostsContext';
import PostList from './components/Posts/PostList'
import NavBar from './components/Navigation/NavBar';
import Footer from './components/Navigation/Footer';
import './App.css'
import PostDetails from './components/Posts/PostDetails';
import RestaurantsContextProvider from './context/RestaurantsContext';
import RestaurantList from './components/Restaurants/RestaurantList';
import RestaurantDetails from './components/Restaurants/RestaurantDetails';





const RenderWebsite: React.FC = (props) => {
  const {
    theme,
  } = useContext(ThemeContext)


  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Container disableGutters maxWidth="lg" style={{ marginTop: theme.spacing(10), height: '80vh' }}>
          <Route exact path="/" component={Landing} />
          <PostsContextProvider>
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/posts/:postId" component={PostDetails} />
          </PostsContextProvider>
          <RestaurantsContextProvider>
            <Route exact path="/restaurants" component={RestaurantList} />
            <Route exact path="/restaurants/:restaurantId" component={RestaurantDetails} />
          </RestaurantsContextProvider>
          <Footer />
        </Container>
      </Router>
    </MuiThemeProvider>)
}

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  }, [])
  return (

    <RenderWebsite />



  );
}
export default App
