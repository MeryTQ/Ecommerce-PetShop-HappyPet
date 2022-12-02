import { useEffect, useState } from 'react';
import { data } from '../../utils/data';
import { customFetch } from '../../utils/customFetch';
import SpinnerB from '../Spinner/SpinnerB';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        if (categoryId) {
            customFetch(1000, data.filter(item => item.category === categoryId))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        } else {
            customFetch(1000, data)
            .then(result => setDatos(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
        }
    }, [categoryId]);

    return (
        <main>
            <div className="itemListContainer">
                {loading ? <SpinnerB/> : <ItemList datos={datos}/>} 
            </div>
        </main>
    )
}

export default ItemListContainer;