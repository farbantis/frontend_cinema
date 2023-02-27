import React, {Fragment, useState} from 'react';
import './modal-register.styles.css'
import {Outlet} from "react-router-dom";
import axios, {toFormData} from "axios";


const ModalRegister = () => {
    const [showLog, setLog] = useState(true)
    const [showReg, setReg] = useState(false)
    const [active, setActive] = useState(true)
    // const [user, setUser] = useState(undefined)
    // const logIn = (event) => {
    //     event.preventDefault()
    //     const loginFormData = new FormData(event.target)
    //     axios.post(`http://127.0.0.1:8000/api-auth`, loginFormData)
    //         .then((response)=>{
    //             setUser(response.data)
    //         })
    // }

    return (
        <Fragment>
            <div className="main_container">
                <div className="main_row">
                    <div className={active ? 'modal-register active' : 'modal-register'}
                         onClick={() => setActive(false)}>
                        <div className={active ? 'modal-content active' : 'modal-content'}
                             onClick={event => event.stopPropagation()}>
                            {/*{children}*/}

                            <div className="tab">
                                <button className={showLog ? "tablinks tab_active" : "tablinks"} onClick={() => {
                                    setLog(true);
                                    setReg(false)
                                }}>LOGIN
                                </button>
                                <button className={showReg ? "tablinks tab_active" : "tablinks"} onClick={() => {
                                    setReg(true);
                                    setLog(false)
                                }}>REGISTRATON
                                </button>
                                {/*<button className="tablinks" onClick="openCity(event, 'Paris')"*/}
                            </div>

                            <div className={showLog ? "tabcontent visible" : "tabcontent invisible"}>
                                <div className="registration_container__login">PLEASE LOGIN</div>
                                <form method="post" className="tabcontent__form">
                                    <div className="reg-form">
                                        <input id="rfi_username" type="text" required className="reg-form--input"
                                               onKeyUp="search(event)" name="registration_username"/>
                                        <label htmlFor="rfi_username" className="reg-form--label">Username</label>
                                    </div>
                                    <div className="reg-form">
                                        <input id="rfi_pass1" type="password" required className="reg-form--input"
                                               name="registration_pass"/>
                                        <label htmlFor="rfi_pass1" className="reg-form--label">Password</label>
                                    </div>
                                    <button className="form_login_btn" type="submit" name="CinemagoerLoginForm">LOGIN
                                    </button>
                                </form>
                                <div className="forgot_pass">forgot your password?... please click <a href="#">the link
                                    to
                                    restore</a>
                                </div>
                            </div>

                            <div className={showReg ? "tabcontent visible" : "tabcontent invisible"}>
                                <div className="registration_container__login">PLEASE REGISTER</div>
                                <form id="tabcontent__form" className="tabcontent__form" name="registration_form">
                                    <div className="reg-form">
                                        <input id="rfi_email" type="text" required className="reg-form--input"
                                               name="registration_email"/>
                                        <label htmlFor="rfi_email" className="reg-form--label">Email address</label>
                                    </div>
                                    <div className="reg-form">
                                        <input id="rfi_username" type="text" required className="reg-form--input"
                                               onKeyUp="search(event)" name="registration_username"/>
                                        <label htmlFor="rfi_username" className="reg-form--label">Username</label>
                                    </div>
                                    <div className="reg-form">
                                        <input id="rfi_pass1" type="password" required className="reg-form--input"
                                               name="registration_pass"/>
                                        <label htmlFor="rfi_pass1" className="reg-form--label">Password</label>
                                    </div>
                                    <div className="reg-form">
                                        <input id="rfi_pass2" type="password" required className="reg-form--input"
                                               name="registration_pass1"/>
                                        <label htmlFor="rfi_pass2" className="reg-form--label">Repeat password</label>
                                    </div>
                                    <button className="form_login_btn" type="submit"
                                            name="UserRegistrationForm">REGISTER
                                    </button>
                                </form>

                                <div className="register_social">
                                    <a className="loginBtn loginBtn--facebook">
                                        Register with Facebook
                                    </a>
                                    <a href="#" className="loginBtn loginBtn--google">
                                        Register with Google
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default ModalRegister;