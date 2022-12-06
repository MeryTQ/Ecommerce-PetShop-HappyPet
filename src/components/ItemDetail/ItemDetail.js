import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = (item) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert(`Añadiste ${qty} items`);
        setItemCount(qty)
    }
    return (
        <div className="itemDetail">
            <div className="itemDetailImg">
                <img src={item.pictureUrl} alt={item.title}/>
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
        </div>
    )
}

export default ItemDetail;