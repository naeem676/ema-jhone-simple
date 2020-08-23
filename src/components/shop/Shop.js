import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Products from '../products/Products';


const Shop = () => {
          
          const first10 = fakeData.slice(0, 10);
          const [products, setProducts] = useState(first10); 
          return (
                    <div className="shop-container">
                              
                              <div className="product-container">
                                        
                              {
                                        products.map( pd => <Products product={pd}></Products>)
                              }
                                        
                              </div>
                              <div className="card-container">
                                        <h3>this is card container</h3>
                              </div>
                    </div>
          );
};

export default Shop;