import React from 'react'

const Header = ({food, filterFood, changeBtn, order, checkOut, Link}) => {
    return (
        <header>
            <div className="head-title">
                <h1>Hey!!!, check out our delicious meal.</h1>
                <button onClick={checkOut} type="button">
                    <Link to="/Checkout">
                    {order.length}<i className="fas fa-shopping-bag"></i>
                    </Link>
                </button>
            </div>
            <nav className="navbar">
                {/* looped button */}
                {filterFood.map((btns, index )=> {
                    return (
                        <button type="button" onClick={()=>changeBtn(btns)} key={index} className={btns}>{btns.toUpperCase()}</button>
                    )
                })}
            </nav>
        </header>
    )
}

export default Header
