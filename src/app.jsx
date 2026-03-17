import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Project1 from './pages/project-1';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project-1" element={<Project1 />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
