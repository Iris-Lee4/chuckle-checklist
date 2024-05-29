import { useEffect, useState } from "react"
import "./App.css"
import { submitJoke } from "./services/jokeService.jsx"
import stevePic from "./assets/steve.png"
import { getAllJokes } from "./services/allJokes.jsx"


export const App = () => {
  const [joke, setJoke] = useState('')
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])
  const [countUntold, setCountUntold] = useState("")
  const [countTold, setCountTold] = useState("")

  const handleChange = (event) => {
    setJoke(event.target.value)
  }

  //for all jokes
  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray)
      console.log("jokes set!")
    }) 
  }, [])

//filter for untold jokes
    useEffect(() => {
      if (untoldJokes) {
        const untoldJokesArray = allJokes.filter(
          (joke) => joke.told === false
        )
        setUntoldJokes(untoldJokesArray)
    }}, [allJokes])

  //filter for told jokes
  useEffect(() => {
    if (toldJokes) {
      const toldJokesArray = allJokes.filter(
        (joke) => joke.told === true
      )
      setToldJokes(toldJokesArray)

  }}, [allJokes, joke])

  //count untold jokes
  useEffect(() => {
    const count = untoldJokes.length
    setCountUntold(count)
  }, [untoldJokes])

  //count told jokes
  useEffect(() => {
    const count = toldJokes.length
    setCountTold(count)
  }, [toldJokes])


  return <div className="app-container">
    <div className="app-heading">
      <div className="app-heading-circle">
        <img className="app-logo" src={stevePic} alt="Good job Steve" />
      </div>
        <header className="app-heading-text">Chuckle Checklist</header>
    </div>
    <div className="joke-add-form">
        <input
          className="joke-input"
          type="text"
          placeholder="Add Joke"
          value={joke}
          onChange={handleChange}
          />
      {/* add .then to render page with empty string upon clicking button */}
        <button onClick = { () => {
                    submitJoke({text: joke, told: false}).then(setJoke(""))}
                  }
                className="joke-input-submit"
                type="submit"
                >
              Add
        </button>
    </div>
    <div className="joke-lists-container">
          <div className="joke-list-container">
           <h2>Untold
                  <span className="untold-count">{countUntold}</span>
           </h2>
            {untoldJokes.map(joke => {
              return (
                <ul key={joke.id}>
                  <li className="joke-list-item">
                    <p className="joke-list-item-text">{joke.text}</p>
                  </li>
                </ul>
                )
              })}
          </div>
          <div className="joke-list-container">
            <h2>Told
              <span className="told-count">{countTold}</span>
            </h2>
              {toldJokes.map(joke => {
                return (
                  <ul key={joke.id}>
                    <li className="joke-list-item">
                      <p className="joke-list-item-text">{joke.text}</p>
                    </li>
                </ul>
                )
              })}
        </div>
      </div> 
  </div>
}
