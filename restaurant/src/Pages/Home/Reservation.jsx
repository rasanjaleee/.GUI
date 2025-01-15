import React from 'react'
import './reservation.css'
import reserve from '../../assets/reserve_01.jpeg'
import res from '../../assets/res_01.jpg'

const Reservation = () => {
  return (
    <div className='reservation'>
      <img src={res} alt='reserve' className='reserve'></img>
      
      <form className='form'>
      <h3>Reservation</h3>
      <h2>Book A Table Online</h2>
        <label>Your Name<input type='text'required></input></label>
        <label>Your Email<input type='email'required></input></label>
        <label>Date<input type='date'required></input></label>
        <label>Time<input type='time'required></input></label>
        <label>No of People<input type='number'required></input></label>
        <label>Special Requests<input type='textarea'></input></label>
        <button>Submit</button>
      </form>

      
    </div>
  )
}

export default Reservation
