import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createHashRouter,
  redirect
} from 'react-router-dom'
import { customAlphabet } from 'nanoid'
import App from './App'
import './index.scss'
import EditMode from './EditMode'
import ViewMode from './ViewMode'
import { handleGetMenus } from './Supabase/GET/getMenus'
import { Check } from './Check/Check'

const nanoid = customAlphabet('qwertyuioplkjhgfdsazxcvbnm', 6)
const random = nanoid()

const loader = async () => {
  return redirect(`/menu/editMode/${random}`)
}
const router = createHashRouter([
  {
    path: '/',
    loader: loader
  },
  {
    element: <EditMode />,
    path: '/menu/editMode/:hash'
  },
  {
    element: <ViewMode />,
    path: '/menu/viewMode/:hash',
    loader: ({ params }) => {
      console.log(params)
      return handleGetMenus(params.hash)
    }
  },
  {
    element: <Check />,
    path: '/menu/check'
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
