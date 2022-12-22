import React, {useState} from "react";

function ItemCount({ stock, initial = 1, onAdd, increment, decrement}) {
    const [count, setCount] = useState(initial);

    increment = () => {  // Incrementar items //
        setCount(count + 1);
    }

    decrement = () => { // Decrementar items //
        setCount(count - 1);
    }

    return (
        <div className="itemCount">
            <div className="itemCountAdd">
                <button onClick={decrement} disabled={count === 1 || stock === 0}>-</button>
                <p>{count}</p>
                <button onClick={increment} disabled={count === stock || stock === 0}>+</button>
            </div>
            <button className="btnAñadir" onClick={() => onAdd(count)} disabled={stock === 0}>Añadir al carrito</button>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default ItemCount;