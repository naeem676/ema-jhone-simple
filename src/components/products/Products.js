import React from 'react';
import './Products.css'

const Products = (props) => {
          const { img, name, seller, stock, price } = props.product;

          return (
                    <div className="product">
                              <div>
                                        <img src={img} alt="" />
                              </div>
                              <div>
                                        <h3 className="product-name">{name}</h3>
                                        <br />
                                        <p><small>{seller}</small></p>
                                        <p>${price}</p>
                                        <p><small>only {stock} left in stock - order soon</small></p>
                                        <button className="add">add to card</button>

                              </div>




                    </div>
          );
};

export default Products;