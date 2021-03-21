import React, {useState} from 'react';
import './Navbar.css';
import {HashLink as Link} from 'react-router-hash-link';
import Logo from './Images/Logo4.png';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {

    const [showLinks, setShowlinks] = useState(false);

    return (
        <div className="Navbar">
            <div className="LeftSide">
                <img
                alt="Logo"
                className="header__logo"
                src={Logo}></img>
                {/* <a href="/">Pranavan A</a> */}
            </div>
            <div className="RightSide">
                <div className="Links" id={showLinks ? "hidden" : ""}>
                <Link onClick={() => setShowlinks(!showLinks)} smooth to="#Home">Home</Link>
                <Link onClick={() => setShowlinks(!showLinks)} smooth to="#Task">Task</Link>
                <Link onClick={() => setShowlinks(!showLinks)} smooth to="#Create">Create-Task</Link>
                </div>
                <button onClick={() => setShowlinks(!showLinks)}><ReorderIcon/></button>
            </div>

        </div>
    )
}

export default Navbar
