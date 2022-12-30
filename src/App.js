import './App.css';
import './Responsive.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import RouteComp from './Routes/RouteComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <RouteComp />
      </BrowserRouter>
    </div>
  );
}

export default App;