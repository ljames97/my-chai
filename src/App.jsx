// App.jsx

import ProductPage from './components/product-page/ProductPage';
import products from './data';

const App = () => {

  const product = products[0];

  return (
    <div>
      <ProductPage product={product}/>
    </div>
  )
}

export default App
