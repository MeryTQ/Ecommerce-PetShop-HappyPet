import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = (item) => {
    const [itemCount, setItemCount] = useState(0);
    const { addToCart } = useContext(CartContext);

    const notify = () => toast(`Añadiste ${item.title} 🤩`);

    const onAdd = (qty) => {
        notify();
        setItemCount(qty);
        addToCart(item, qty);
    }

    return (
        <div className="itemDetail">
            <div className="itemDetailImg animate__animated animate__fadeIn">
                <img src={item.picture} alt={item.title}/>
            </div>
            <div className="itemDetailDescription">
                <div>
                    <h3>{item.title}</h3>
                    <h3>{item.price} $</h3>
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
                <div>
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} onAdd={onAdd}/> 
                        : <div className='included'>
                            <strong><p>Producto añadido!</p></strong>
                            <div className='includedBtn'>
                                <Link to='/'> <button>Seguir comprando</button> </Link>
                                <Link to='/cart'> <button>Ver mi carrito</button> </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </div>
    )
}

export default ItemDetail;