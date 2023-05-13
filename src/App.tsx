import {
  BrowserRouter
} from 'react-router-dom'
import Navigation from './components/Navigation'
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      </BrowserRouter>
    </div>
  );
}

export default App;
