import React from 'react'
import quotes from '../quotes.json'
import Buttom from './Buttom'

const QuoteBox = ({ index, handleQuotes, color }) => {
  return (
    <article className="article">
      <p className="text-quote-box">
        <i className="icon-quote-box fa-solid fa-quote-left"></i>
        {quotes[index].quote}
      </p>
      <h3>{quotes[index].author}</h3>
      <Buttom handleQuotes={handleQuotes} color={color} />
    </article>
  )
}

export default QuoteBox