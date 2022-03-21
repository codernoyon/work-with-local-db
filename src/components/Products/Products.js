import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);


    return (
        <div >
            <h1>A List of Products</h1>
            <div className='product-container'>
                {products.map(user => <Product key={user.id} user={user}></Product>)}
            </div>
            
        </div>
        
    );
};

export default Products;