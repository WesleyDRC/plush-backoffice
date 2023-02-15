import {createBrowserRouter, RouterProvider, Navigate} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { AuthProvider } from '../contexts/auth'
import { UserProvider } from '../contexts/user'

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
			path: '/',
			element: <Home />,
			errorElement: <ErrorPage />
		},
		{
			path: '/login',
			element: <Login />,
			errorElement: <ErrorPage />
		},
		{
			path: '/dashboard',
			element: <Private> <Dashboard /> </Private>,
			errorElement: <ErrorPage />
		},
	])

	return (
		<AuthProvider>
			<UserProvider>
				<RouterProvider router={router}/>
			</UserProvider>
		</AuthProvider>
	)
}
