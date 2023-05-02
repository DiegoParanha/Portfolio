import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from './HomePage/HomePage';
import AboutMe from './AboutMe/AboutMe';
import MyProjects from './MyProjects/MyProjects';
import ContactMe from './ContactMe/ContactMe';
import MyResume from './MyResume/MyResume';

export default function App() {

  return (
    <main className="App">
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects" element={<MyProjects />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/resume" element={<MyResume />} />

            </Routes>
          </>
    </main>
  );
}
