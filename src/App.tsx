import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/vans/Vans';
import VanDetail from './pages/vans/VanDetail';
import HostLayout from './pages/host/Layout';
import HostDashboard from './pages/host/Dashboard';
import HostIncome from './pages/host/Income';
import HostVans from './pages/host/Vans';
import HostReviews from './pages/host/Reviews';
import HostVanDetail from './pages/host/VanDetail';
import HostVanDetails from './pages/host/VanDetails';
import HostVanPricing from './pages/host/VanPricing';
import HostVanPhotos from './pages/host/VanPhotos';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

import './server';
import AuthLayout from './components/AuthLayout';

type AppContextType = 
{
  loggedIn: boolean,
  setLoggedIn: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<AppContextType> ({
  loggedIn: false,
  setLoggedIn:() => {}
});

function App() {

  const [loggedIn, setLoggedIn]= useState<boolean> (false);

  return (
  <AppContext.Provider value={{loggedIn, setLoggedIn}}>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='vans' element={<Vans/>}/>
        <Route path='vans/:id' element={<VanDetail/>}/>
        <Route element={<AuthLayout/>}>
          <Route path='host' element={<HostLayout/>}>
            <Route index element={<HostDashboard/>}/>
            <Route path='income' element={<HostIncome/>}/>
            <Route path ='vans' element={<HostVans/>}/>
            <Route path='vans/:id' element={<HostVanDetail/>}>
              <Route index element={<HostVanDetails/>}/>
              <Route path='pricing' element={<HostVanPricing/>}/>
              <Route path ='photos' element={<HostVanPhotos/>}/>
            </Route>
            <Route path ='reviews' element={<HostReviews/>}/>
          </Route>
        </Route>
        <Route path = 'login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
   </AppContext.Provider>
  )
}

export default App

export {AppContext}
