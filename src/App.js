import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Intro from './components/Intro/Intro';
import TourIntro from './components/TourIntro/TourIntro';
import FeaturedTours from './components/FeaturedTours/FeaturedTours';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Intro />
      <TourIntro />
      <FeaturedTours />
    </div>
  );
}

export default App;
