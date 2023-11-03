
import Head from './components/head';
import Header from './components/header';
import Landing from './components/landing';
import Styles from './components/styles';
import Matching from './components/matching';
import Rating from './components/rating';
import Video from './components/video';
import Market from './components/market';
import Footer from './components/footer';
import './css/App.css';
import './css/normalize.css';

function App() {
  return (
    <div className="App">
      <>
        <Head />
        <Header />
        <Landing />
        <Styles />
        <Matching />
        <Rating />
        <Video />
        <Market />
        <Footer />
      </>
    </div>
  );
}

export default App;
