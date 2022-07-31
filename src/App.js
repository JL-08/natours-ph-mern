import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Auth from './containers/Auth/Auth';
import TourPage from './containers/TourPage/TourPage';
import BookingPage from './containers/BookingPage/BookingPage';
import { AUTH, OVERVIEW, TOURS } from './constants/pageRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={AUTH}>
              <Auth />
            </Route>
            <Route path={TOURS}>
              <BookingPage />
            </Route>
            <Route path={OVERVIEW}>
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
