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
import HostVanDetail from './pages/Host/VanDetail.js';
import HostVanDetails from './pages/Host/VanDetails.js';
import HostVanPricing from './pages/Host/VanPricing.js';
import HostVanPhotos from './pages/Host/VanPhotos.js';
import NotFound from './pages/NotFound.js';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import AuthLayout from './components/AuthLayout.js';
import Login from './pages/Login.js';

const queryClient = new QueryClient();

type AppContextType = {
  isLoggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

function App() {
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='vans' element={<Vans />} />
              <Route path='vans/:id' element={<VanDetail />} />

              <Route element={<AuthLayout />}>
                <Route path='host' element={<HostLayout />}>
                  <Route index element={<HostDashboard />} />
                  <Route path='income' element={<HostIncome />} />
                  <Route path='vans' element={<HostVans />} />
                  <Route path='vans/:id' element={<HostVanDetail />}>
                    <Route index element={<HostVanDetails />} />
                    <Route path='pricing' element={<HostVanPricing />} />
                    <Route path='photos' element={<HostVanPhotos />} />
                  </Route>
                  <Route path='reviews' element={<HostReviews />} />
                </Route>
              </Route>

              <Route path='login' element={<Login />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </AppContext.Provider>
  );
}

export default App;
