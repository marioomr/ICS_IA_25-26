import { createBrowserRouter } from 'react-router-dom'
import RootLayout, { rootLoader } from './routes/RootLayout'
import CountryDetails from './routes/CountryDetails'
import ErrorPage from './routes/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    id: 'root',
    element: <RootLayout />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'country/:countryName',
        element: <CountryDetails />,
      },
    ],
  },
])
