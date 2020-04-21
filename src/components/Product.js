import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ title, price, quantity }) => (
  // product component should render title and price
  // It should render title, price and quantity when given inventory
    <div>       
      {quantity>0?
      <span>{title} - ${price} x {quantity}</span>
      :
      <span>{title} - ${price}</span>
      }
    </div> 
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
