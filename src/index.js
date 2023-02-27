import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './routes/App';
import {RouterProvider, createBrowserRouter, useParams} from 'react-router-dom'
import {Provider} from "react-redux";
import store from "./store";
import ContactsComponent from "./components/contacts/contacts.component";
import RootLayout from "./routes/RootLayout";
import ModalRegisterComponent from "./components/modal-register/modal-register.component";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Signup from "./routes/SignUp";
import Facebook from "./routes/Facebook";
import Google from "./routes/Google";
import ResetPassword from "./routes/ResetPassword";
import ResetPasswordConfirm from "./routes/ResetPasswordConfirm";
import Activate from "./routes/Activate";
import Movie from "./routes/Movie";
import ActorList from "./components/actor-list/actor-list.component";


const router = createBrowserRouter([
    {
        path: '/', element: <RootLayout/>, children: [
            {path: '/', element: <App/>},
            {path: '/movie/:movieId/', element: <Movie/>},
            {path: '/login/', element: <Login/>},
            {path: '/signup/', element: <Signup/>},
            {path: '/facebook/', element: <Facebook/>},
            {path: '/google/', element: <Google/>},
            {path: '/reset-password', element: <ResetPassword/>},
            {path: '/password/reset/confirm/:uid/:token', element: <ResetPasswordConfirm/>},
            {path: '/activate/:uid/:token', element: <Activate/>},
            {path: '/actors', element: <ActorList/>},
            {path: '/contacts', element: <ContactsComponent/>},
            {path: '/home', element: <Home/>},
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
