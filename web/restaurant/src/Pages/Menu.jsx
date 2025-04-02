import React, { useState } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import './Menu.css';
import vegetable_fried_rice from '../assets/v01.jpeg';
import chicken_fried_rice from '../assets/chicken_fried_rice.jpeg';
import seafood_fried_rice from '../assets/seafood_fried_rice.jpeg';
import shrimp_fried_rice from '../assets/shrimp_fried_rice.jpeg';
import veggie_pizza from '../assets/veggie_pizza.jpeg';
import margherita from '../assets/margherita.jpeg';
import crispy_chicken_pizza from '../assets/crispy_chicken_pizza.jpeg';
import applecake from '../assets/apple-cake with toffe crust.webp';
import chocolate_chip_cookies from '../assets/chocolate_chip_cookies.webp';
import chocolate_cupcake from '../assets/chocolate_cupcake.webp';
import double_chocolate_peanut from '../assets/double chocolate peanut.webp';
import triple_cheesecake from '../assets/triple-cheesecake.webp';
import cappuccino from '../assets/cappuccino.jpeg';
import flat_white from '../assets/flat_white.jpeg';
import latte from '../assets/latte.jpeg';
import long_black_coffee from '../assets/long_black_coffe.jpeg';

const menuItems = [
  { id: 1, name: "Vegetable Fried Rice", image: vegetable_fried_rice, price: 780.00, category: "Rice" },
  { id: 2, name: "Chicken Fried Rice", image: chicken_fried_rice, price: 1200.00, category: "Rice" },
  { id: 3, name: "Sea Food Fried Rice", image: seafood_fried_rice, price: 1500.00, category: "Rice" },
  { id: 4, name: "Shrimp Fried Rice", image: shrimp_fried_rice, price: 1800.00, category: "Rice" },
  { id: 5, name: "Crispy Chicken Pizza", image: crispy_chicken_pizza, price: 1300.00, category: "Pizza" },
  { id: 6, name: "Vegetable Pizza", image: veggie_pizza, price: 2000.00, category: "Pizza" },
  { id: 7, name: "Margherita Pizza", image: margherita, price: 2000.00, category: "Pizza" },
  { id: 8, name: "Apple Cake", image: applecake, price: 200.00, category: "Dessert" },
  { id: 9, name: "Chocolate Chip Cookies", image: chocolate_chip_cookies, price: 300.00, category: "Dessert" },
  { id: 10, name: "Chocolate Cupcake", image: chocolate_cupcake, price: 450.00, category: "Dessert" },
  { id: 11, name: "Double Chocolate Peanut", image: double_chocolate_peanut, price: 370.00, category: "Dessert" },
  { id: 12, name: "Triple Cheesecake", image: triple_cheesecake, price: 250.00, category: "Dessert" },
  { id: 13, name: "Cappuccino", image: cappuccino, price: 250.00, category: "Coffee" },
  { id: 14, name: "Flat White Coffee", image: flat_white, price: 450.00, category: "Coffee" },
  { id: 15, name: "Latte Coffee", image: latte, price: 350.90, category: "Coffee" },
  { id: 16, name: "Long Black Coffee", image: long_black_coffee, price: 450.00, category: "Coffee" }
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem } = useCart();

  const categories = ["All", "Rice", "Pizza", "Dessert", "Coffee"];

  const handleAddToCart = (item) => {
    console.log("Adding item to cart:", item);
    addItem(item);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='Menu'>
      <h1>Our Menu</h1>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}/>
          </div>
      

          <div className="cart-container"><Link to='/Cart'><LuShoppingCart /></Link></div>

        <div className="categories" onClick={(e) => e.stopPropagation()}>
           {categories.map((category, index) => (
              <button
              key={index}
              className={`category-button ${selectedCategory === category ? "active" : ""}`}
              onClick={(e) => {
              e.stopPropagation(); 
              setSelectedCategory(category);}}>
        {category}</button>))}
        </div>


        <table border="1" cellPadding="10" className="menu-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.name} width="50" height="50" /></td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>RS {isNaN(item.price) ? "Invalid Price" : item.price.toFixed(2)}</td>

              <td>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
