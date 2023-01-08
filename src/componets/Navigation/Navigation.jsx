import React from 'react';

import search from '../../assets/search.svg';

function Navigation() {
    return (
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
    );
}

export default Navigation;
