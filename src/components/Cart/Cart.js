import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartList, deleteItem, itemTotal, subTotal, taxes, cartTotal, removeList} = useContext(CartContext);
    return (
        <main>
            <h1 className='yourCart'>Tu carrito</h1>
            <div className='cart'>
                <div> 
                    {
                        cartList.length === 0
                        ? <div className='cartEmpty'>
                            <h1>esta vacío :(</h1>
                            <Link to='/'><button>Ver productos</button></Link>
                            </div>
                        : cartList.map(i => 
                            <div className='cartList' key={i.id}>
                                <img src={i.picture} alt={i.title}/>
                                <h3>{i.title}</h3>
                                <p>x{i.qty}</p>
                                <p>${itemTotal(i.id)}</p>
                                <button onClick={() => deleteItem(i.id)}>x</button>
                            </div>
                        ) 
                    } 
                    {
                        cartList.length > 0 &&
                        <button className='btnClear' onClick={removeList}>Vaciar Carrito</button>
                    }
                </div>
                {
                    cartList.length > 0 &&
                    <div className='cartTotal'>
                        <p>Subtotal: $ {subTotal()}</p>
                        <p>Impuestos: $ {taxes()}</p>
                        <h2>Total: $ {cartTotal()}</h2>
                        <button>Terminar compra</button>
                    </div>
                }
            </div>
        </main>
    )
}

export default Cart;