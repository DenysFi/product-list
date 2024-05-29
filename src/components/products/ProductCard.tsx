import { useAppDispatch } from '@/redux-hooks';
import { removeProductByID } from '@/store/products';
import { Product } from '@/types/products';
import { Button, Popconfirm } from '@douyinfe/semi-ui';
import { ComponentPropsWithoutRef, FC, useState } from 'react'
import {
    IconDelete,
    IconEdit
} from "@douyinfe/semi-icons";

interface IProductCard extends ComponentPropsWithoutRef<'article'> {
    product: Product,
    onEditClick: (value: number) => void
}

const ProductCard: FC<IProductCard> = ({ product, onEditClick }) => {
    const dispatch = useAppDispatch()
    const [isConfirmVisible, setConfirmVisible] = useState(false)

    function onConfirm() {
        dispatch(removeProductByID(product.id))
    }
    return (
        <article className='product' >
            <div className="product__image">
                <img
                    src={`../../../products/${product.imageUrl}`}
                    alt={product.name}
                    onError={(e) => {
                        e.currentTarget.src = '../../../products/empty.jpg';
                    }} />
            </div>
            <div className="product__content">
                <h5 className='product__title'>{product.name}</h5>
                <div className="product__body">
                    <span>Кількість: {product.count}</span>
                    <span>Вага: {product.weight}</span>
                </div>
                <div className="product__sizes">
                    <span>Висота: {product.size.height}</span>
                    <span>Ширина: {product.size.width}</span>
                </div>
                <span className='product__coments-quantity'>Кількість коментарів: {product.comments.length}</span>
            </div>
            <div className="product__controlls">
                <Popconfirm
                    visible={isConfirmVisible}
                    onVisibleChange={setConfirmVisible}
                    trigger="custom"
                    title="Are you sure delete this product?"
                    onConfirm={onConfirm}
                    position='top'
                    onCancel={() => setConfirmVisible(false)}
                    showArrow
                    cancelType='danger'
                >
                    <Button className='cancel' onClick={() => setConfirmVisible(true)} type='danger' size='large' icon={<IconDelete />} />
                </Popconfirm    >
                <Button onClick={() => onEditClick(product.id)} size='large' icon={<IconEdit />} />
            </div>
        </article>
    )
};
export default ProductCard;