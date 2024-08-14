// App.jsx

import ProductPage from './components/product-page/ProductPage';
import products from './components/data';
import './styles/main.scss';

const App = () => {

  const product = products[0];

  return (
    <ProductPage product={product}/>
  )
}

export default App
