import Cart from '../Components/Cart'
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { useEffect } from 'react';
const MensWatches = ({ isLoading, product,query }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])
    const filteredProducts = product ? product?.filter((prod) => prod?.category === 'mens-watches') : null
    const filteredData = filteredProducts?.filter((prod) => {
        if (query === '') {
            return prod;
        } else if (prod.title.toLowerCase().includes(query.toLowerCase())) {
            return prod;
        }
    });
    const data = filteredData?.length > 0 ? filteredData?.map((prod, index) => {
        return (
            <Cart key={index} {...prod} />
        )
    }
    ) : null
    return (
        <>
            {isLoading ? (
                <div className="loading-container">
                    <div className="loading-circle"></div>
                </div>
            ) : (
                <ul className="cards">
                    {data}
                </ul>
            )}
        </>
    )
}

export default MensWatches

