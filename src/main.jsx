import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RegisterPage } from './pages/RegisterPage'
import { TopicsPage } from './pages/TopicsPage'
import { SummaryPage } from './pages/SummaryPage'
import App from './App.jsx'
import './index.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/',
        element: <RegisterPage />
      },
      {
        path: '/topics',
        element: <TopicsPage />
      },
      {
        path: '/summary',
        element: <SummaryPage />
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
