import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from './HomePage/HomePage';

export default function App() {

  return (
    <main className="App">
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />}/>
            </Routes>
          </>
    </main>
  );
}
