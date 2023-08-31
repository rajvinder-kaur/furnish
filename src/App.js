
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Router/>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
