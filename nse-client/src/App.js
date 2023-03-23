import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Bmc_request from './pages/Bmc_request';
import InsuranceSub from './pages/InsuranceSub';
import Home from './components/Home';
import PenaltyDashboard from './pages/PenaltyDashboard';
import Noobjection from './pages/Noobjection';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="insurancesubmission" element={<InsuranceSub />} />
          <Route path="bmcrequest" element={<Bmc_request />} />
          <Route path="penaltydashboard" element={<PenaltyDashboard />} />
          <Route path="noobjection" element={<Noobjection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
