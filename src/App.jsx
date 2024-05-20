import { useState } from "react"
import "./App.css"
import { submitJoke } from "./services/jokeService.jsx"

export const App = () => {
  const [joke, setJoke] = useState('')

  const handleChange = (joke) => {
    setJoke(joke.target.value)
  }

  return <>
    <form
      method="post"
      onSubmit={submitJoke}>
        <input
      className=""
      type="text"
      placeholder="New One Liner"
      value={joke}
      onChange={handleChange}
    />
    <button className="joke-input-submit"
            type="submit"
            >
            Submit Joke
            </button>
    </form> 
      </>
}
