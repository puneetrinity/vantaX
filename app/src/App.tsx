import { Routes, Route } from 'react-router-dom';
import PageLayout from './components/layout/PageLayout';
import LandingPage from './pages/LandingPage';
import WhatIsVantaXPage from './pages/WhatIsVantaXPage';
import CompanyPage from './pages/CompanyPage';
import JuryPage from './pages/JuryPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/what-is-vantax" element={<WhatIsVantaXPage />} />
        <Route path="/companies" element={<CompanyPage />} />
        <Route path="/jury" element={<JuryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
