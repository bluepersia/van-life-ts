import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import './server.js';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans.js';
import VanDetail from './pages/Vans/VanDetail.js';
import HostLayout from './pages/Host/Layout.js';
import HostDashboard from './pages/Host/Dashboard.js';
import HostIncome from './pages/Host/Income.js';
import HostVans from './pages/Host/Vans.js';
import HostReviews from './pages/Host/Reviews.js';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetail />} />

            <Route path='host' element={<HostLayout />}>
              <Route index element={<HostDashboard />} />
              <Route path='income' element={<HostIncome />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='reviews' element={<HostReviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
