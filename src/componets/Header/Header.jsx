import React from 'react';
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import avatar from '../../assets/avatar.svg';

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__inner">
                    <img src={logo} alt="logo" />
                    <div className="header__info">
                        <div className="header__title">React Tea</div>
                        <div className="header__description">Самый лучший чай</div>
                    </div>
                </div>
                <nav className="header__nav">
                    <a href="#" className="header__cart">
                        <img src={cart} alt="cart" />
                        <div className="header__price">
                            <span>1504P</span>
                        </div>
                    </a>
                    <div className="header__avatar">
                        <a href="#" className="link">
                            <img src={avatar} alt="avatar" />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
