import React from 'react'
import './Featured.css'
import grilled_salmon from '../../assets/grilled_salmon.jpeg'
import margherita from '../../assets/margherita.jpeg'
import chocolate_lava_cake from  '../../assets/chocolate_lava_cake.jpeg'

const Featured = () => {
    const featuredItems = [
        {
            id: 1,
            name: "Grilled Salmon",
            description: "Freshly grilled salmon with herbs and spices.",
            image: grilled_salmon,
            price: "Rs1500.99",
            tag: "Chef's Special",
        },

        {
            id: 2,
            name: "Margherita Pizza",
            description: "Classic Italian pizza with fresh mozzarella and basil.",
            image: margherita,
            price: "Rs1200.99",
            tag: "Popular",
          },
          {
            id: 3,
            name: "Chocolate Lava Cake",
            description: "Delicious molten chocolate cake served with ice cream.",
            image: chocolate_lava_cake ,
            price: "Rs350.99",
            tag: "Dessert",
          },
    ];
  return (
    <div className="featured-section">
      <h2>Our Top Picks</h2>
      <div className="featured-items">
        {featuredItems.map((item) => (
          <div key={item.id} className="featured-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
            <span className="tag">{item.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured
