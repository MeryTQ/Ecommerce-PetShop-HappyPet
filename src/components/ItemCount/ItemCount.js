import React, {useState} from "react";

function ItemCount({ stock, initial, onAdd, onDecrement}) {
    const [count, setCount] = useState(initial);

    onAdd = () => {  // Incrementar items //
        setCount(count + 1);
    }

    onDecrement = () => { // Decrementar items //
        setCount(count - 1);
    }

    return (
        <div className="itemCount">
            <h3>Item título</h3>
            <div className="itemCountAdd">
                <button onClick={onDecrement} disabled={count === 1}>-</button>
                <p>{count}</p>
                <button onClick={onAdd} disabled={count === stock}>+</button>
            </div>
            <button className="btnAñadir">Añadir al carrito</button>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default ItemCount;