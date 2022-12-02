import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (item) => {
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
                    <ItemCount stock={item.stock}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;