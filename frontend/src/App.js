import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
function App() {
  return (
    //<BrowserRouter basename='/tutorial'> //http://localhost:3000/tutorial/about
    <BrowserRouter >
    <div className="App">
    <Navbar />
    </div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />

    </BrowserRouter>
   
  )
}

export default App;
