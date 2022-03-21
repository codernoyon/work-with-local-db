import React from 'react';
import { addToDb, remvoeFromDb } from '../../utilities/fakeDb';
import "./Product.css"

const Product = (props) => {
    const {title, price, image, category, description, id} = props.user;

    /* 
     Different way to call fuction with parameter
    
    const addToCart = (id)=>{
        console.log("item added", id);
    }

    onst addToCartWithParam = () => addToCart(id);
    */


    // add to cart
    const addToCart = (id) => {
        // console.log("item added", id);
        addToDb(id);
    };

    // remove from cart
    const removeFromCart = (id) => {
        // console.log("removing", id);
        remvoeFromDb(id);
    };

    return (
        <div className='product'>
            <div className="image">
                <img src={image} alt="" />
            </div>
            <h2>{title.slice(0, 28) + "..."}</h2>
            <p>{category}</p>
            <h3>${price}</h3>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={()=> removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Product;