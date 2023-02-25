import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Stock from '../pages/Stock'
import Users from '../pages/Users'

import useAuth from '../hooks/useAuth'

export default function Routes() {

	const Private = ({ children }) => {
    const { authenticated, loading } = useAuth()

    if(loading) {
        return <div className='loading'> Carregando..... </div>
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  }

	const router = createBrowserRouter([
		{
			path: '/login',
			element: <Login />,
			errorElement: <ErrorPage />
		},
		{
			path: '/',
			element: <Private> <Home /> </Private>,
			errorElement: <ErrorPage />
		},
		{
			path: '/dashboard',
			element: <Private> <Dashboard /> </Private>,
			errorElement: <ErrorPage />
		},
		{
			path: '/dashboard/users',
			element: <Private> <Users /> </Private>,
			errorElement: <ErrorPage />
		},
		{
			path: '/dashboard/stock',
			element: <Private> <Stock /> </Private>,
			errorElement: <ErrorPage />
		},
	])

	return (
		<RouterProvider router={router}/>
	)
}
