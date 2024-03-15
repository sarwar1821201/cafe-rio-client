import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './provider/AuthProvider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <QueryClientProvider  client={queryClient} >
   <HelmetProvider>
    <div className='max-w-screen-xl mx-auto ' >
    <RouterProvider router={router} ></RouterProvider>

    </div>
    </HelmetProvider>
   </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
