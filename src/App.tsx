import {
  BrowserRouter
} from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.scss';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
