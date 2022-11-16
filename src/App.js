import React from 'react';
import logo from './assets/logo.svg';
import cart from './assets/cart.svg';
import btnPrev from './assets/btnPrev.svg';
import btnNext from './assets/btnNext.svg';
import avatar from './assets/avatar.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="header">
                <div className="header__container">
                    <div className="header__inner  inner">
                        <img src={logo} alt="logo" />
                        <div className="inner__info">
                            <div className="title">React Tea</div>
                            <div className="description">Самый лучший чай</div>
                        </div>
                    </div>
                    <nav className="header__nav nav">
                        <a href="#" className="nav__cart">
                            <img src={cart} alt="cart" />
                            <div className="amount">
                                <span>1504P</span>
                            </div>
                        </a>
                        <div className="nav__avatar">
                            <a href="#" className="link">
                                <img src={avatar} alt="avatar" />
                            </a>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="slider">
                <div className="slider__container">
                    <div className="slider__wrapper">
                        <div className="slider__items">
                            <div className="slider__item"></div>
                        </div>
                    </div>
                    <button className="slider__btn btn_prev">
                        <img src={btnPrev} alt="prev" />
                    </button>
                    <button className="slider__btn btn_next">
                        <img src={btnNext} alt="next" />
                    </button>
                </div>
            </div>
            <div className="intro">
                <div className="intro__container"></div>
            </div>
        </div>
    );
}

export default App;
