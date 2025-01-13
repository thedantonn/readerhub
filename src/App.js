import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ReadingPage from './pages/ReadingPage';
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";

function App() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/article/:id",
      element:<ReadingPage/>
    }
]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={appRouter}></RouterProvider>
)