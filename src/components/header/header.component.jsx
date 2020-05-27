import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({currentUser}) => {
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
                {
                    currentUser ?
                    <Link className="option" to='/signin' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </Link>
                    :
                    <Link className="option" to='/signin'>
                        SIGN IN
                    </Link>
                } 
            </div>
        </header>
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
