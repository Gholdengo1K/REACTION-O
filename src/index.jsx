import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyComponent from 'MyComponent';


const router = createBrowserRouter([//empty path, home page
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/MyComponent",
        element: <MyComponent />,
    },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);