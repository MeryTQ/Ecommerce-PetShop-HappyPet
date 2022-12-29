import { Link } from "react-router-dom";
import 'animate.css';

const Item = (item) => {
    return (
        <div className="item animate__fadeIn animate__animated">
            <h3>{item.title}</h3>
            <div className="itemImg">
                <img src={item.pictureUrl} alt={item.title}/> 
            </div> 
            <p>{item.price} $</p>
            <Link to={`/item/${item.id}`}> <button className="itemBtn">Detalles</button> </Link>
        </div>
    )
}

export default Item;