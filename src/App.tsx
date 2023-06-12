import {
  BrowserRouter
} from 'react-router-dom'
import Navigation from './components/Navigation'
import Slider from './components/Slider'
import './App.scss';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Slider/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
