import { useAppSelector } from '@/redux-hooks';
import { FC, useMemo, useState } from 'react'
import ProductCard from './ProductCard';
import { Button, Select } from '@douyinfe/semi-ui';
import ProductModal from '../ProductModal';
import { sortType } from '@/constaints/enums';

const ProductsList: FC = () => {
    const { products } = useAppSelector(state => state.products)
    const [selectedId, setSelectedId] = useState(-1)
    const [isOpen, setIsOpen] = useState(false)
    const [sortBy, setSortBy] = useState(sortType.alphabet)
    const lastProdId = products.length + 1

    const selectedProduct = products.find(p => p.id === selectedId)


    function handleEditClick(id: number) {
        setSelectedId(id)
        setIsOpen(true)
    }

    //sort
    const sortedProducts = useMemo(() => {
        switch (sortBy) {
            case sortType.count: {
                return products.slice().sort((a, b) => a.count - b.count)
            }
            case sortType.alphabet:
            default: {
                return products.slice().sort((a, b) => a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase()));
            }
        }
    }, [products, sortBy])

    return (
        <div className='products'>
            <div className="products__toolbar">
                <Button onClick={() => {
                    setIsOpen(o => !o)
                    setSelectedId(-1)
                }}>Add product</Button>
                <Select value={sortBy} onChange={(sb => setSortBy(sb as sortType))}>
                    <Select.Option value="alphabet">Sort by alphabet</Select.Option>
                    <Select.Option value="count">Sort by count</Select.Option>
                </Select>
                <ProductModal isOpen={isOpen} setIsOpen={setIsOpen} prodId={lastProdId} data={selectedProduct} />
            </div>
            {products.length ? (sortedProducts.map(prod => <ProductCard onEditClick={handleEditClick} product={prod} key={prod.id} />)) : <div className='products__empty'>There is no products! </div>}
        </div>

    )
};
export default ProductsList;