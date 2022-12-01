
const Item = (item) => {
    return (
        <div className="item">
            <h3>{item.title}</h3>
            <div className="itemImg">
                <img src={item.pictureUrl} alt={item.title}/> 
            </div> 
            <p>{item.price} $</p>
            <button>{item.info}</button>
        </div>
    )
}

export default Item;