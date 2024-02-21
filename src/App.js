import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Music from './Music';
import Contact from './Contact';

function App() {
  return (
    <>
      <div className="App">{/* <Home /> */}</div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/music" element={<Music />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      ;
    </>
  );
}

export default App;
