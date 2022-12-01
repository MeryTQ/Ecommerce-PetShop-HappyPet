import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (item) => {
    return (
        <div className="itemDetail">
            <div className="itemDetailImg">
                <img src={item.pictureUrl} alt={item.title}/>
            </div>
            <div className="itemDetailDescription">
                <h3>{item.title}</h3>
                <h3>{item.price} $</h3>
                <p>{item.description}</p>

                <ItemCount stock={item.stock}/>
            </div>
        </div>
    )
}

export default ItemDetail;