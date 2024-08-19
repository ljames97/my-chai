// CollectionGrid.jsx

import CollectionGridItem from "./CollectionGridItem";

const CollectionGrid = ({ products }) => {

  return (
    <div className="collection-grid">
      {products.map((product, index) => (
        <CollectionGridItem key={index} product={product} />
      ))}
    </div>
  )
}

export default CollectionGrid;