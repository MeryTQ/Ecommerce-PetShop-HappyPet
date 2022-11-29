import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
    return (
        <main>
            <div className="itemListContainer">
                <ItemCount
                title="Item título"
                initial={1}
                stock={5}/>
            </div>
        </main>
    )
}

export default ItemListContainer;