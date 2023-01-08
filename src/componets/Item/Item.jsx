import React from 'react';
import photo from '../../assets/image.png';
import plusActive from '../../assets/plusActive.svg';
import minusNotActive from '../../assets/minusNotActive.svg';
import cart from '../../assets/cart.svg';

function Item() {
    return (
        <div className="main__item">
            <div className="main__info">
                <img src={photo} alt="photo" />
                <p className="main__grade">Черный чай</p>
                <p className="main__name">Черный чай Цейлон Пекое (Красный слон)</p>
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
    );
}

export default Item;
