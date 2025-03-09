import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage.tsx'
import Destination from './components/Destination.tsx'

const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<LandingPage />} />
      <Route path='destination/:name' element={<Destination />} />
    </Route>
  )
))


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
