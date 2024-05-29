import { useAppDispatch } from '@/redux-hooks';
import { addProduct, updateProductByID } from '@/store/products';
import { Product } from '@/types/products';
import { validate } from '@/utiles';
import { Input, InputNumber, Modal } from '@douyinfe/semi-ui';
import { FC, useEffect, useState } from 'react'

interface IModal {
    isOpen: boolean,
    setIsOpen: (value: boolean) => void,
    prodId: number,
    data?: Product
}
const ProductModal: FC<IModal> = ({ isOpen, setIsOpen, prodId, data }) => {
    const dispatch = useAppDispatch();

    const defaultData: Product = {
        id: 0,
        name: '',
        imageUrl: '',
        count: 0,
        size: {
            width: 0,
            height: 0
        },
        weight: '',
        comments: []
    }

    const [inputsData, setInputsData] = useState<Product>(defaultData)

    useEffect(() => {
        data && setInputsData(data)
    }, [data])


    function handleAddProduct() {
        if (validate(inputsData)) {
            if (data) {
                dispatch(updateProductByID(inputsData))

            } else {
                dispatch(addProduct({
                    ...inputsData,
                    id: prodId,
                    name: inputsData.name
                }))
            }
        }
        setInputsData(defaultData)
        setIsOpen(false);
    }

    return (
        <Modal
            title="Add product"
            visible={isOpen}
            onOk={handleAddProduct}
            onCancel={() => {
                setIsOpen(false)
            }}
            className='product-modal'
        >
            <div className='product-modal__content'>

                <div className="product-modal__line">
                    <span className="product-modal__Label">Name:</span>
                    <Input
                        onChange={(value) => {
                            setInputsData({
                                ...inputsData,
                                name: value
                            })

                        }}
                        value={inputsData.name}
                    />
                </div>
                <div className="product-modal__line">
                    <span className="product-modal__Label">Image url:</span>
                    <Input
                        onChange={(value) => {
                            setInputsData({
                                ...inputsData,
                                imageUrl: value
                            })
                        }}
                        value={inputsData.imageUrl}
                    />
                </div>
                <div className="product-modal__line">
                    <span className="product-modal__Label">Count:</span>
                    <InputNumber
                        min={0}
                        onChange={(value) => {
                            setInputsData({
                                ...inputsData,
                                count: +value
                            })
                        }}
                        value={inputsData.count}
                    />
                </div>
                <div className="product-modal__line">
                    <span className="product-modal__Label">Height:</span>
                    <InputNumber
                        min={1}
                        onChange={(value) => {
                            setInputsData({
                                ...inputsData,
                                size: {
                                    ...inputsData.size,
                                    height: +value
                                }
                            })
                        }}
                        value={inputsData.size.height}
                    />
                </div>
                <div className="product-modal__line">
                    <span className="product-modal__Label">Width:</span>
                    <InputNumber
                        min={1}
                        onChange={(value) => {
                            setInputsData({
                                ...inputsData,
                                size: {
                                    ...inputsData.size,
                                    width: +value
                                }
                            })
                        }}
                        value={inputsData.size.width}
                    />
                </div>
                <div className="product-modal__line">
                    <span className="product-modal__Label">Weight:</span>
                    <Input onChange={(value) => {
                        setInputsData({
                            ...inputsData,
                            weight: value
                        })
                    }}
                        value={inputsData.weight}
                    />
                </div>
            </div>
        </Modal>
    )
};
export default ProductModal;