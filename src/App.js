import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import Stream from './Components/Stream/Stream';
import Events from './Components/Events/Events';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/stream" element={<Stream></Stream>}></Route>
          <Route path="/events" element={<Events></Events>}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
