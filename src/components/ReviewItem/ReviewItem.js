import React from 'react';

const ReviewItem = (props) => {
    // console.log(props)
    const {name,quantity,key,price} = props.product;
    return (
        <div style={{borderBottom:'1px solid pink',padding:'5px'}} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity{quantity}</p>
            <p>{price}</p>
            <br></br>
            <button onClick={()=>props.removeProduct(key)} className="main-button">Remove Iteam</button>
        </div>
    );
};

export default ReviewItem;