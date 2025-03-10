import React, { useState } from "react";
import './Order.css';

const Order = () => {
  const [cart, setCart] = useState([]); // Cart holds the added items

  const menuItems = [
    { id: 1, name: "Pizza Margherita", price: 10 },
    { id: 2, name: "Vegetable Salad", price: 5 },
    { id: 3, name: "Spaghetti Carbonara", price: 12 },
    { id: 4, name: "Cheesecake", price: 6 },
  ];

  // Function to handle adding items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="order-now-container">
      <h1>Order Now</h1>

      {/* Menu Section (First Row) */}
      <div className="menu">
        <h2>Menu</h2>
        <div className="menu-items">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <h3>{item.name}</h3>
              <p>Rs {item.price}</p>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section (Second Row) */}
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - Rs {item.price}
              </li>
            ))}
          </ul>
        )}
        <h3>Total: Rs {calculateTotal()}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Order;
