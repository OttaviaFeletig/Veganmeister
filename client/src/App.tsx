import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import { Switch } from 'react-router'
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
import AddRestaurant from './components/Restaurants/AddRestaurant';
import Page404 from './components/Elements/GraphicElmts/Page404';





const RenderWebsite: React.FC = (props) => {
  const {
    theme,
  } = useContext(ThemeContext)


  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>

        <NavBar />

        <Container disableGutters maxWidth="lg" style={{ marginTop: theme.spacing(10), height: '100%' }}>
          <Route exact path="/" component={Landing} />
          <PostsContextProvider>
            <Route exact path="/posts" component={PostList} />
            <Route exact path="/posts/:postId" component={PostDetails} />
          </PostsContextProvider>
          <RestaurantsContextProvider>
            <Switch>
              <Route exact path="/restaurants" component={RestaurantList} />
              <Route exact path="/restaurants/:restaurantId" component={RestaurantDetails} />
              <Route exact path="/addRestaurant" component={AddRestaurant} />
              {/* <Route component={Page404} /> */}
            </Switch>
          </RestaurantsContextProvider>


        </Container>
        <Footer />

      </BrowserRouter>
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
