import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Restaurant from './pages/map/Restaurant';
import Home from './pages/home/Home';
import { Navbar } from './components/Navbar';
import Member from './pages/member/Member';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Restaurant" element={<Restaurant />} />
        <Route path="/Member" element={<Member />} />
      </Routes>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
