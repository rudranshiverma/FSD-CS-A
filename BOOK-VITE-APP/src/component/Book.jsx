import React from 'react'
import './Book.css'
const Book = () => {
  return (
    <div className='card'>
        <img src="" alt="book image" width={200} height={200}></img>
        <h3>Title: Physics</h3>
        <h4>Price: $15.50</h4>
        <br/>
        <button>Add to Cart</button>
    </div>
  )
}

export default Book
