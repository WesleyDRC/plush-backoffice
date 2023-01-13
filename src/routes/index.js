import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

export default function Routes() {

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
			element: <Dashboard />,
			errorElement: <ErrorPage />
		},
	])

	return (
		<RouterProvider router={router}/>
	)
}
