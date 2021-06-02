import React from 'react'

const MealBody = ({food, makeOrder}) => {
    return (
        <section className="main-section">
            {food.map(foodList => {
                const {id, name, category, image, price} = foodList;
                return(
                    <article key={id} className="foodCatalogue">
                        <div className="img-container">
                            <img src={image} alt={name} />
                            <p>{`$ ${price}`}</p>
                        </div>
                        <div className="text">
                            <h3>{name}</h3>
                            <button type="button" onClick={()=>{makeOrder(name)}}>Add</button>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default MealBody
