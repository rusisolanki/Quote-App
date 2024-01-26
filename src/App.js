import {useState, useEffect} from 'react'
import "./App.css";
import { SiTwitter } from "react-icons/si";
import { FaTumblr } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";
import randomColor from 'randomcolor'

function App() {
  const [quote, setQuote] = useState({})
  const colorPicker = randomColor({luminosity:'dark'})
  const [color, setColor] = useState()
  const getQuote = async () => {
    const response = await fetch("https://api.quotable.io/quotes/random")
    const data = await response.json()
    console.log(data)
    setQuote(data[0])
    console.log(quote)
    console.log(colorPicker)
    setColor(colorPicker)
  }
  useEffect(() => {
    getQuote()
  }, [])
  return (
    <div id="wrapper" style={{backgroundColor: color}}>
      <div id="quote-box">
        <div id="quote-text">
          <p id="text" style={{color: color}}>
          <BiSolidQuoteLeft/>{' '}
            {quote.content}
          </p>
        </div>
        <div id="quote-author">
          <p id="author" style={{color: color}}>~ {quote.author}</p>
        </div>
        <div id="quote-buttons">
          <div id="media-button">
            <button id="tweet-quote" style={{backgroundColor: color}}>
              <a href="twitter.com/intent/tweet" target="_top">
              <SiTwitter />
              </a>
            </button>
            <button id="tumblr-quote" style={{backgroundColor: color}}>
              <FaTumblr />
            </button>
          </div>
          <button id="new-quote" onClick={getQuote} style={{backgroundColor: color}}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
