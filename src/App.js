import React from 'react';
import logo from './assets/logo.svg';
import cart from './assets/cart.svg';
import btnPrev from './assets/btnPrev.svg';
import btnNext from './assets/btnNext.svg';
import avatar from './assets/avatar.svg';
import search from './assets/search.svg';
import photo from './assets/image.png';
import plusActive from './assets/plusActive.svg';
import minusNotActive from './assets/minusNotActive.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="intro">
                <div className="intro__container">
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

                    <div className="main">
                        <div className="main__container">
                            <div className="main__items">
                                <div className="main__item">
                                    <div className="main__info">
                                        <img src={photo} alt="photo" />
                                        <p className="main__grade">Черный чай</p>
                                        <p className="main__name">
                                            Черный чай Цейлон Пекое (Красный слон)
                                        </p>
                                    </div>
                                    <div className="main__bar">
                                        <div>
                                            <p className="main__price">205 ₽</p>
                                            <div className="main__amount">
                                                <button>
                                                    <img src={minusNotActive} alt="minus" />
                                                </button>
                                                <p>50г</p>
                                                <button>
                                                    <img src={plusActive} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="main__cart">
                                            <img src={cart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                                <div className="main__item">
                                    <div className="main__info">
                                        <img src={photo} alt="photo" />
                                        <p className="main__grade">Черный чай</p>
                                        <p className="main__name">
                                            Черный чай Цейлон Пекое (Красный слон)
                                        </p>
                                    </div>
                                    <div className="main__bar">
                                        <div>
                                            <p className="main__price">205 ₽</p>
                                            <div className="main__amount">
                                                <button>
                                                    <img src={minusNotActive} alt="minus" />
                                                </button>
                                                <p>50г</p>
                                                <button>
                                                    <img src={plusActive} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="main__cart">
                                            <img src={cart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                                <div className="main__item">
                                    <div className="main__info">
                                        <img src={photo} alt="photo" />
                                        <p className="main__grade">Черный чай</p>
                                        <p className="main__name">
                                            Черный чай Цейлон Пекое (Красный слон)
                                        </p>
                                    </div>
                                    <div className="main__bar">
                                        <div>
                                            <p className="main__price">205 ₽</p>
                                            <div className="main__amount">
                                                <button>
                                                    <img src={minusNotActive} alt="minus" />
                                                </button>
                                                <p>50г</p>
                                                <button>
                                                    <img src={plusActive} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="main__cart">
                                            <img src={cart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                                <div className="main__item">
                                    <div className="main__info">
                                        <img src={photo} alt="photo" />
                                        <p className="main__grade">Черный чай</p>
                                        <p className="main__name">
                                            Черный чай Цейлон Пекое (Красный слон)
                                        </p>
                                    </div>
                                    <div className="main__bar">
                                        <div>
                                            <p className="main__price">205 ₽</p>
                                            <div className="main__amount">
                                                <button>
                                                    <img src={minusNotActive} alt="minus" />
                                                </button>
                                                <p>50г</p>
                                                <button>
                                                    <img src={plusActive} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="main__cart">
                                            <img src={cart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                                <div className="main__item">
                                    <div className="main__info">
                                        <img src={photo} alt="photo" />
                                        <p className="main__grade">Черный чай</p>
                                        <p className="main__name">
                                            Черный чай Цейлон Пекое (Красный слон)
                                        </p>
                                    </div>
                                    <div className="main__bar">
                                        <div>
                                            <p className="main__price">205 ₽</p>
                                            <div className="main__amount">
                                                <button>
                                                    <img src={minusNotActive} alt="minus" />
                                                </button>
                                                <p>50г</p>
                                                <button>
                                                    <img src={plusActive} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="main__cart">
                                            <img src={cart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                                <div className="main__item">
                                    <div className="main__info">
                                        <img src={photo} alt="photo" />
                                        <p className="main__grade">Черный чай</p>
                                        <p className="main__name">
                                            Черный чай Цейлон Пекое (Красный слон)
                                        </p>
                                    </div>
                                    <div className="main__bar">
                                        <div>
                                            <p className="main__price">205 ₽</p>
                                            <div className="main__amount">
                                                <button>
                                                    <img src={minusNotActive} alt="minus" />
                                                </button>
                                                <p>50г</p>
                                                <button>
                                                    <img src={plusActive} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="main__cart">
                                            <img src={cart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                                <div className="main__item">
                                    <div className="main__info">
                                        <img src={photo} alt="photo" />
                                        <p className="main__grade">Черный чай</p>
                                        <p className="main__name">
                                            Черный чай Цейлон Пекое (Красный слон)
                                        </p>
                                    </div>
                                    <div className="main__bar">
                                        <div>
                                            <p className="main__price">205 ₽</p>
                                            <div className="main__amount">
                                                <button>
                                                    <img src={minusNotActive} alt="minus" />
                                                </button>
                                                <p>50г</p>
                                                <button>
                                                    <img src={plusActive} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="main__cart">
                                            <img src={cart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                                <div className="main__item">
                                    <div className="main__info">
                                        <img src={photo} alt="photo" />
                                        <p className="main__grade">Черный чай</p>
                                        <p className="main__name">
                                            Черный чай Цейлон Пекое (Красный слон)
                                        </p>
                                    </div>
                                    <div className="main__bar">
                                        <div>
                                            <p className="main__price">205 ₽</p>
                                            <div className="main__amount">
                                                <button>
                                                    <img src={minusNotActive} alt="minus" />
                                                </button>
                                                <p>50г</p>
                                                <button>
                                                    <img src={plusActive} alt="plus" />
                                                </button>
                                            </div>
                                        </div>
                                        <button className="main__cart">
                                            <img src={cart} alt="cart" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="footer">
                        <div className="footer__container">
                            <p className="footer__context">Created by Yoni Holly</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
