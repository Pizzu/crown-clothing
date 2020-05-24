import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/' className='logo-container'>
                <Logo className='logo'/>
            </Link>
            <div className="options-container">
                <Link className="option" to='/shop'>
                    SHOP
                </Link>
                <Link className="option" to='/shop'>
                    CONTACT
                </Link>
                <Link className="option" to='/signin'>
                    SIGN IN
                </Link>
            </div>
        </header>
    );
}

export default Header;
