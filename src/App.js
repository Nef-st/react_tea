import React from 'react';
import logo from './assets/logo.svg';
import cart from './assets/cart.svg';
import avatar from './assets/avatar.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="container">
                    <div className="inner">
                        <img src={logo} alt="logo" />
                        <div className="info">
                            <div className="title">React Tea</div>
                            <div className="description">Самый лучший чай</div>
                        </div>
                    </div>
                    <nav className="nav">
                        <a href="#" className="link">
                            <div className="cart">
                                <img src={cart} alt="cart" />
                                <div className="amount">
                                    <span>1504P</span>
                                </div>
                            </div>
                        </a>
                        <div className="avatar">
                            <a href="#" className="link">
                                <img src={avatar} alt="avatar" />
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="intro">
                <div className="container"></div>
            </div>
        </div>
    );
}

export default App;
