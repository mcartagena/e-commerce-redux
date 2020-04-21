import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

// should render a product (title, product, inventory)

// should have a button with message 'Add to cart'

// should call an action when button is clicked.

// should disable the the button when the inventory is empty

// should change the message on the button to 'Sold Out' when inventory is empty

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory}
    />
    <button
      onClick={onAddToCartClicked} 
      disabled={product.inventory===0?'disabled':''}  
      style={{
        marginLeft: '4px',
        background: '#89CFF0'
      }}
    >
      { product.inventory>0?"Add to cart":"Sold Out"}
    </button>

  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem