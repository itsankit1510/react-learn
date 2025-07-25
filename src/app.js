import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Menu from './components/Menu';
import UserContext from './utils/userContext';

const AppLayout = () => {
    const [userName, setUserName] = useState("Ankit");
    return (
        <div className="app">
            <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <Header />
            <Outlet />
            </UserContext.Provider>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <Menu/>
            }
        ],
        errorElement: <Error />
    }

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={appRouter} />
    </React.StrictMode>
);
