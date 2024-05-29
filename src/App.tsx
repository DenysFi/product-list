import '@/styles/style.scss'
import { useEffect } from 'react'
import { loadProducts } from './store/products'
import { useAppDispatch, useAppSelector } from './redux-hooks'
import { defaultProdDBName, defaultProducts } from './constaints';
import { loadFromLC, saveToLC } from './utiles';
import { Product } from './types/products';
import ProductsList from './components/products/ProductsList';
import { LoadingType } from './constaints/enums';

function App() {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector(state => state.products)
  //load data logic
  useEffect(() => {
    const prodData = loadFromLC(defaultProdDBName) || defaultProducts;
    dispatch(loadProducts(prodData))
  }, [dispatch])

  //autosave logic
  useEffect(() => {
    if (loading === LoadingType.LOADED) {
      saveToLC<Product>(defaultProdDBName, products);
    }
  }, [products, loading]);
  return (
    <main >
      <div className="main__container">
        <ProductsList />
      </div>
    </main>
  )
}

export default App
