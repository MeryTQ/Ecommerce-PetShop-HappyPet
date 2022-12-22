import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => { 
        if (isInCart(item.id)) {
            const newCart = [...cartList];
            for (const element of newCart){
                if(element.id === item.id){
                    element.qty += qty;
            }
            setCartList(newCart);
            } 
        } else{
            setCartList([...cartList, {
                id: item.id,
                title: item.title,
                picture: item.picture,
                price: item.price,
                qty: qty
            }]);
        }
    }

    const calcItemsQty = () => { // Qty del CartWidget
        let qtyTotal = 0;
        cartList.map((i) => {
            return qtyTotal = qtyTotal  +  i.qty
        });
        return qtyTotal;
    }

    const isInCart = (id) => {
        return cartList.find((e) => e.id === id);
    }

    const itemTotal = (id) => { // Precio total por item //
        let i = cartList.map(i => i.id).indexOf(id);
        return cartList[i].price * cartList[i].qty;
    }

    const subTotal = () => { // Subtotal del carrito //
        let total = 0;
        cartList.map((i) => {
            return total = total + i.price * i.qty
        });
        return total;
    }

    const taxes = () => { // Impuesto del 10% sobre el Subtotal //
        let tax = 0;
        tax = tax + subTotal() * 10 / 100;
        return tax;
    }

    const cartTotal = () => { // Total del carrito //
        return subTotal() + taxes()
    }

    const removeList = () => { // Vaciar carrito //
        setCartList([]);
    }

    const deleteItem = (id) => { // Eliminar un item del carrito //
        const arrayFilter = cartList.filter(item => item.id !== id);
        setCartList(arrayFilter);
    }   
    return (
        <CartContext.Provider value={{cartList, addToCart, deleteItem, itemTotal, subTotal, taxes, cartTotal, removeList, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;