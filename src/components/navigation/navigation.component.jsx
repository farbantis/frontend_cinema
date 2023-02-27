import React, {Fragment, useState} from 'react';
import './navigation.styles.css'
import {Link} from "react-router-dom";

const Navigation = () => {
    const [active, setActive] = useState(false)
    return (
        <Fragment>
            <div className="header">
                <div className="header_main">
                    <div id="header_search_btn" className="header_logo srch">
                        <Link to='/'>
                            MAIN
                        </Link>
                    </div>
                    <div id="header_chat_btn" className="header_logo">
                        <Link to='/' active={true}>
                            ПОИСК
                        </Link>
                    </div>
                    <div className="header_logo">
                        <Link to="/actors">
                            АКТЕРЫ
                         </Link>
                    </div>
                    <div className="header_logo">
                        <Link to="/contacts">
                            КОНТАКТЫ
                        </Link>
                    </div>
                    <div className="header_logo">
                        <Link to="/login">
                        Login/Register
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation