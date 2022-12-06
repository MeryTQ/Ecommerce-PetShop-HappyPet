import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../utils/data';
import { customFetch } from '../../utils/customFetch';
import SpinnerB from '../Spinner/SpinnerB';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        customFetch(0, data.find(i => i.id === itemId))
        .then(response => setItem(response))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }, [itemId]);
    
    return (
        <main>
            <div className="itemDetailContainer">
                {loading ? <SpinnerB/> : <ItemDetail {...item}/>}
            </div>
        </main>
    )
}

export default ItemDetailContainer;