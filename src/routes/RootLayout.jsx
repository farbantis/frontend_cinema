import {Fragment, useState} from "react";
import { Outlet } from 'react-router-dom'
import Navigation from "../components/navigation/navigation.component";
import ModalRegisterComponent from "../components/modal-register/modal-register.component";

function RootLayout () {
    const [active, setActive] = useState(false)
    return(
        <>
            <Navigation/>
            <Outlet/>
        </>
    )
}

export default RootLayout;