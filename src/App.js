import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import TourPage from './components/TourPage/TourPage';
import BookingPage from './components/BookingPage/BookingPage';

function App() {
  return (
    <div className='App'>
      <NavBar />
      {/* <Home /> */}
      {/* <TourPage /> */}
      <BookingPage />
      <Footer />
    </div>
  );
}

export default App;
