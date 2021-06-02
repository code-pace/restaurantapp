import React from 'react'

const Checkout = ({Link, order, setOrder, ordered, done}) => {
    
    return (
        <div className="main-section" style={{paddingTop: "50px"}} >
            <Link style={linkStyle} to="/">
                back
            </Link>
            {order.map((food,index) =>{
                const {name, price, image} = food;
                return (
                    <article key={index} className="foodCatalogue">
                        <div className="img-container">
                            <img src={image} alt={name} />
                            <p>{`$ ${price}`}</p>
                        </div>
                        <div className="text">
                            <button onClick={()=>{setOrder(order.filter((item)=> name!== item.name))}}><i className="fas fa-window-close"></i></button>
                            <h3>{name}</h3>
                        </div>
                    </article>
                )
            })}
            <div className="price-buy">
                <p>Total: ${order.length === 0?0:(order.map(food => food.price)
                .reduce((prev, curr)=>prev + curr).toFixed(2))}</p>
                {order.length!==0 && <button onClick={ordered}>Buy Now</button>}
            </div>
            {done && 
                <div style={orderStyle} className="ordered">
                    <p>Order Successful!!!</p>
                </div>}
        </div>
    )
}
const linkStyle = {
    position: "absolute", 
    top: "20px", 
    left: "20px", 
    textDecoration: "none"
}
const orderStyle = {
    background: "rgba(0, 0, 0, 0.5)", 
    color: "lightgreen", 
    fontSize: "24px", 
    borderRadius: "20px", 
    border: "2px solid lightgreen", 
    padding: "5px 8px", 
    position: "fixed", 
    top: "50%"
}
export default Checkout
