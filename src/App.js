// User Story #1: I can see a wrapper element with a corresponding id="quote-box".

// User Story #2: Within #quote-box, I can see an element with a corresponding id="text".

// User Story #3: Within #quote-box, I can see an element with a corresponding id="author".

// User Story #4: Within #quote-box, I can see a clickable element with a corresponding id="new-quote".

// User Story #5: Within #quote-box, I can see a clickable a element with a corresponding id="tweet-quote".

// User Story #6: On first load, my quote machine displays a random quote in the element with id="text".

// User Story #7: On first load, my quote machine displays the random quote's author in the element with id="author".

// User Story #8: When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.

// User Story #9: My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.

// User Story #10: I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in its href attribute to tweet the current quote.

// User Story #11: The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.
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
