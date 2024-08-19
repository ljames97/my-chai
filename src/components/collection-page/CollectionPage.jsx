// CollectionPage.jsx

import products from "../data";
import FilterProducts from "./FilterProducts";

const CollectionPage = () => {
  const productList = products;

  return (
    <div className="collection-page">
      <div className="collection-title"></div>
      <div className="collection-description"></div>
      <FilterProducts />
      <CollectionGrid products={productList} />
    </div>
  )
}

export default CollectionPage;