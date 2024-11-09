
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/signup",
    element: <Signup />,
  },{
    path:"/projects",
    element: <Projects />
  },{
    path:"/project/:id",
    element: <ProjectDetails />
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
  
}

export default App;