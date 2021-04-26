import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import TourPage from './components/TourPage/TourPage';
import BookingPage from './components/BookingPage/BookingPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/auth'>
              <Auth />
            </Route>
            <Route path='/tours'>
              <BookingPage />
            </Route>
            <Route path='/overview'>
              <TourPage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
