import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import { serverTimestamp, doc, setDoc, collection } from 'firebase/firestore';
import { db } from '../../utils/firebaseConfig'
import Swal from 'sweetalert2';

const Cart = () => {
    const { cartList, deleteItem, itemTotal, subTotal, taxes, cartTotal, removeList} = useContext(CartContext);


    const createOrder = () => {
        const order = {
            buyer: {
                name: "Leo Messi",
                email: "leomessi@hotmail.com",
                phone: "123456789"
            },
            items: cartList.map(i => ({
                id: i.id,
                title: i.title,
                price: i.price,
                qty: i.qty
            })),
            total: cartTotal(),
            date: serverTimestamp()
        }
        const createOrderFirebase = async() => {
            const orderRef = doc(collection(db, "Orders"))
            await setDoc(orderRef, order);
            return orderRef
        }
        createOrderFirebase()
        .then(result => {
            Swal.fire({
                title: 'Compra exitosa!',
                text: `Tu pedido con id ${result.id} llegará a tu dirección en los próximos 2 días.`,
                icon: 'success',
                confirmButtonText: 'Volver a la tienda'
              })
            removeList();
        })
        .catch(err => console.log(err))
    }

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
                        <button onClick={createOrder}>Terminar compra</button>
                    </div>
                }
            </div>
        </main>
    )
}

export default Cart;