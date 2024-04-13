
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';
import './bootstrap.css';




function Products() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((response) => {
        setProducts(response.data.products);
    });
  }, []);



    return (
        <div className='products'>
        {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}  
            
        
        </div>


       
    
    );
}


// Product component to display each product
function Product({ product }) {
    const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
    return (
       // item box like amazon
         <div className="product">
              <div className="image">
                  <img src={product.images[0]} alt={product.name} />
              </div><br></br>
              <span className='title'>{product.name}</span><br></br>
              {/* <span className='description'>{product.description}</span> */}
              <span className='price'>Rs{product.price}</span><br></br>
               {/* <span className='rating'>Rating: {product.rating}</span>  */}
              {/* <span className='stock'>Stock: {product.stock}</span> */}
              <span className='brand'>Brand: {product.brand}</span><br></br>
              <span className='descount-percentage'>DiscountPercentage: {product.discountPercentage}</span><br></br>
              <button className='btn btn-info' type="submit">Add to Cart</button>
              
    <div className="star-rating">
        <Rating rat={product.rating} />
    {/* <span className="star fs-2">&#9733;</span> */}
      {/* {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star fs-2">&#9733;</span>
          </button>
        );
      })} */}
    </div>
            </div>
  );
};
function Rating(rat) {
        const [rating, setRating] = useState(null);
        // setRating(rat);
       console.log("rating",rat.rat);
        return (
            <div>
              
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                        <span
                        onLoad={() => 
                          setRating(rat.rat)}
                            key={i}
                            className={i < (rat.rat-1) ? "on" : "off"}
                           
                            // onClick={() => setRating(rat)}
                        >
                            <span className="star fs-2">&#9733;</span> 
                        </span>
                    );
                })}
            </div>
        );
}


    export default Products;
