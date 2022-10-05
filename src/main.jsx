import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  redirect
} from 'react-router-dom'
import { customAlphabet } from 'nanoid'
import App from './App'
import './index.scss'
import EditMode from './EditMode'
import ViewMode from './ViewMode'

const nanoid = customAlphabet('qwertyuioplkjhgfdsazxcvbnm', 6)
const random = nanoid()

const loader = async () => {
  return redirect(`/menu/editMode/${random}`)
}
const router = createBrowserRouter([
  {
    path: '/',
    loader: loader
  },
  {
    element: <EditMode />,
    path: '/menu/editMode/*'
  },
  {
    element: <ViewMode />,
    path: '/menu/viewMode/*'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
