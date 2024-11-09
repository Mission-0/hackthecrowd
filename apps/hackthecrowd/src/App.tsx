
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Projects from './pages/Projects';

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
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
  
}

export default App;