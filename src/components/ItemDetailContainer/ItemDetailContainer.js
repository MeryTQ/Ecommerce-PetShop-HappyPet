import { useEffect, useState } from 'react';
import { data } from '../../utils/data';
import { customFetch } from '../../utils/customFetch';
import SpinnerB from '../Spinner/SpinnerB';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        customFetch(2000, data[1])
        .then(response => setItem(response))
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }, []);
    
    return (
        <div className="itemDetailContainer">
            {loading ? <SpinnerB/> : <ItemDetail {...item}/>}
        </div>
    )
}

export default ItemDetailContainer;