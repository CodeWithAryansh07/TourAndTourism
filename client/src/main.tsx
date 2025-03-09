import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'
import Destination from './components/Destination.tsx'
import Error from './components/Error.tsx'
import Destinations from './components/Destinations.tsx'
import AboutUs from './components/AboutUs.tsx'
import ContactUs from './components/ContactUs.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />} >
        <Route index element={<LandingPage />} />
        <Route path='destination/:name' element={<Destination />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='contact' element={<ContactUs />} />
      </Route>
      <Route path='*' element={<Error />} />
    </>
  )
);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
