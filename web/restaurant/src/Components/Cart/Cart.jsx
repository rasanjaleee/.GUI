import React from 'react'
import {useCart} from "react-use-cart";
import './Cart.css'
import {Link} from "react-router-dom"
const Cart = () => {
  const
  {items,
    totalItems,
    totalUniqueItems,
    isEmpty,
    updateItemQuantity,
    removeItem,
    emptyCart,
    cartTotal
  } = useCart();

  if(isEmpty) return <h1 className='text1'> Your cart is Empty</h1>
  return (
    <section className='section1'>

     <div classname='cart-display'>
        <h5>Cart: {totalUniqueItems}  Total Items: {totalItems}</h5>
      </div>

    
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Images</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
        {items.map((item,index)=>{
          return(
          <tr key={index}>
            <td>
              <img src ={item.image} alt={item.name} className='cart-image'></img>
            </td>
            <td>{item.name}</td>
            <td>RS {isNaN(item.price) ? "Invalid Price" : item.price.toFixed(2)}</td>
            <td>Quantity:{item.quantity}</td>
            <td>
              <button onClick={()=>updateItemQuantity(item.id,item.quantity-1)} className='action-btn'>-</button>
              <button onClick={()=>updateItemQuantity(item.id,item.quantity+1)} className='action-btn'>+</button>
              <button onClick={()=>removeItem(item.id)} className='remove-btn'>Remove Item</button>
            </td>
          </tr>
          )
        })}
        </tbody>        
      </table>
    

    <div className='cart-summary'><h2>Total Price: Rs{cartTotal.toFixed(2)}</h2></div>

    <div className='cart-actions-container'>

      <div classname='cart-actions'>
        <button onClick={()=>emptyCart()} className='clear-btn'>Clear Cart</button>
        <Link to='/Order'><button className='order-btn'>Order Now</button></Link>
      </div>

    </div>
    

    </section>
    
  )
}

export default Cart
