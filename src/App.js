import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import TourPage from './components/TourPage/TourPage';
import BookingPage from './components/BookingPage/BookingPage';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Auth />
      {/* <Home /> */}
      {/* <TourPage /> */}
      {/* <BookingPage /> */}
      <Footer />
    </div>
  );
}

export default App;
