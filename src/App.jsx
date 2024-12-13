
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Index'
import DashboardLayout from './Layouts/DashboardLayout'
import Dashboard from './pages/dashboard/Dashboard'
import Help from './pages/dashboard/Help'
import MyTask from './pages/dashboard/MyTask'
import Settings from './pages/dashboard/Settings'
import TaskCategories from './pages/dashboard/TaskCategories'
import VitalTask from './pages/dashboard/VitalTask'
import Signup from './pages/forms/Signup'
import Signin from './pages/forms/Signin'

function App() {
  const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>
},
{
path: "/signup",
element: <Signup/>
},
{
path: "/signin",
element: <Signin/>
},
{
path: "/dashboard",
element: <DashboardLayout/>,
children: [
  {index: true,
    element: <Dashboard/>
  },
  {
    path: "help",
    element: <Help/>
  },
  {
    path: "mytask",
    element: <MyTask/>
  },
  {
    path: "settings",
    element: <Settings/>
  },
  {
    path: "task-categories",
    element: <TaskCategories/>
  },
  {
  path: "vital-task",
  element: <VitalTask/>
  }
]
}
])

  return (
  <RouterProvider router={router}/>
  )
}

export default App
