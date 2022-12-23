import { useEffect, useState } from 'react';
import SpinnerB from '../Spinner/SpinnerB';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { fetchFirebase } from '../../utils/fetchFirebase';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        fetchFirebase(categoryId)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [categoryId]);

    return (
        <main>
            {categoryId === undefined
            ? <h1>Todos los productos</h1>
            : <h1>{categoryId}</h1>}
            <div className="itemListContainer">
                {loading ? <SpinnerB/> : <ItemList datos={datos}/>} 
            </div>
        </main>
    )
}

export default ItemListContainer;