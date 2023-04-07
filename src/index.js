import React from 'react'; 
import  ReactDOM  from 'react-dom'; 
import App from './App'; 
import Login from './otherPages/login';
import Create from './otherPages/create/create';
import Edit from './otherPages/edit/edit';

import {
    createBrowserRouter, 
    RouterProvider, 
    route,
}   from "react-router-dom"; 
import CreateEntry from './otherPages/create/create';
import EditEntry from './otherPages/edit/edit';
import CreateToDoEntry from './otherPages/create/createToDo';
import CreateShortcutEntry from './otherPages/create/createShortcut';
import CreateTabEntry from './otherPages/create/createTab';
import DeleteEntry from './otherPages/delete/delete';
import useLogin from './hooks/useLogin';

const loggedIn = useLogin();

const router = createBrowserRouter ([
    {
        path: "/", 
        element: loggedIn ? ( <App /> ) : ( <Login />), 
    },
    {
        path: "create", 
        element: <CreateEntry />, 
    },
    {
        path: "createtodo", 
        element: <CreateToDoEntry />, 
    },
    {
        path: "createshortcut", 
        element: <CreateShortcutEntry />, 
    },
    {
        path: "createtab", 
        element: <CreateTabEntry />, 
    },
    {
        path: "delete", 
        element: <DeleteEntry />, 
    },
    {
        path: "edit", 
        element: <EditEntry />, 
    },
]);



ReactDOM.render( <RouterProvider router = {router} />, document.getElementById('root')); 