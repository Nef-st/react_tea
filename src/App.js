import React from 'react';
import logo from './assets/logo.svg';
import cart from './assets/cart.svg';
import btnPrev from './assets/btnPrev.svg';
import btnNext from './assets/btnNext.svg';
import avatar from './assets/avatar.svg';
import search from './assets/search.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
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
                            <div className="amount">
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

            <nav className="nav">
                <div className="nav__container">
                    <div className="nav__bar">
                        <a href="#" className="nav__btn  nav__btn_active">
                            Все
                        </a>
                        <a href="#" className="nav__btn">
                            Черный чай
                        </a>
                        <a href="#" className="nav__btn">
                            Зеленый чай
                        </a>
                        <a href="#" className="nav__btn">
                            Синий чай
                        </a>
                        <a href="#" className="nav__btn">
                            Белый чай
                        </a>
                    </div>
                    <div className="nav__search">
                        <input className="nav__input" type="text" placeholder="Поиск..." />
                        <a href="#">
                            <img className="nav__icon" src={search} alt="search" />
                        </a>
                    </div>
                </div>
            </nav>

            <div className="intro">
                <div className="intro__container"></div>
            </div>
        </div>
    );
}

export default App;
