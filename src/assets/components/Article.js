import React from "react"

function Article({source, bagName, price}){

    return(
        <article>
            <span>Best Seller</span>
            <img src={source} alt="bag img"/>
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>

    )
}

export default Article ;