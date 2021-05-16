import React from 'react';
import {Link} from 'react-scroll';
import logo from '../images/logo.png';
import {css} from '../style/header.css';
import { AiOutlineGlobal  } from 'react-icons/ai';

function topbar() {
    return (
        <div className="nav">
            <div className="topBar">
                <div className="langbox">
                    <ul className='menu'>
                        <li>
                            <Link className="Lang_Icon" to="#"><AiOutlineGlobal /></Link>
                        </li>
                        <li>
                            <Link className="getLinks" to="#">Global - English</Link>
                        </li>
                    </ul>
                </div>
                <div className="orderbox">
                    <ul className='menu'>
                        <li>
                            <Link className="getLinks" to="#">RETURNING AN ORDER? <b className="links">Click for more info</b></Link>
                        </li>
                    </ul>
                </div>
                <div className="signbox">
                    <ul className='menu'>
                        <li>
                            <Link className="getLinks" to="#">SIGN IN</Link>
                        </li>
                        <li>
                            <Link className="getLinks" to="#">SIGN UP</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default topbar
