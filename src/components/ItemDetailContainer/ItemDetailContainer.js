import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpinnerB from '../Spinner/SpinnerB';
import ItemDetail from '../ItemDetail/ItemDetail';
import { fetchFirebaseItem } from '../../utils/fetchFirebase';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();

    useEffect(() => {
        fetchFirebaseItem(itemId)
        .then(result => setItem(result))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

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