import { useEffect, useState } from "react"
import "./App.css"
import { submitJoke } from "./services/jokeService.jsx"
import stevePic from "./assets/steve.png"
import { getAllJokes } from "./allJokes.jsx"


export const App = () => {
  const [joke, setJoke] = useState('')
  const [allJokes, setAllJokes] = useState([])
  const [untoldJokes, setUntoldJokes] = useState([])
  const [toldJokes, setToldJokes] = useState([])

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
    }}, [untoldJokes, allJokes])

//filter for told jokes
useEffect(() => {
  if (toldJokes) {
    const toldJokesArray = allJokes.filter(
      (joke) => joke.told === true
    )
    setToldJokes(toldJokesArray)
}}, [toldJokes, allJokes])

  return <>
    <div>
      <div className="app-heading-circle">
        <img className="app-logo" src={stevePic} alt="Good job Steve" />
      </div>
        <header className="app-heading-text">Chuckle Checklist</header>
        <input
      className="joke-add-form"
      type="text"
      placeholder="Add Joke"
      value={joke}
      onChange={handleChange}
      />
      {/* add .then to render page with empty string upon clicking button */}
      <button onClick = { () => {submitJoke({text: joke, told: false}).then(setJoke(""))}}
              className="joke-input-submit"
              type="submit"
              >
              Add
              </button>
      <div className="joke-lists-container">
          <div className="joke-list-container">
            {untoldJokes.map(joke => {
              return (
                <ul className="joke-list-item" key={joke.id}>
                  <li className="joke-list-item-text">
                    {joke.text}
                  </li>
              </ul>
              )
            })}
          </div>
          <div className="joke-list-container">
            {toldJokes.map(joke => {
              return (
                <ul className="joke-list-item" key={joke.id}>
                  <li className="joke-list-item-text">
                    {joke.text}
                  </li>
              </ul>
              )
            })}
          </div>
      </div>
    </div> 
      </>
}
