import {
  BrowserRouter
} from 'react-router-dom'
import Navigation from './components/Navigation'
import Slider from './components/Slider'
import FeatureProductList from './components/FeatureProductList'
import CollectionProductGrid from './components/CollectionProductGrid'
import Blog from './components/Blog'
import './App.scss';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Slider/>
        <FeatureProductList/>
        <CollectionProductGrid/>
        <Blog/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
