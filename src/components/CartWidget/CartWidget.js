import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { cartList ,calcItemsQty } = useContext(CartContext);
    return (
        <div className="cartWidget">
            {
                cartList.length > 0 &&
                <p>{calcItemsQty()}</p>
            }
            <Link to='/cart'><i className="fa-solid fa-cart-shopping fa-xl"></i></Link>
        </div>
    )
}

export default CartWidget;