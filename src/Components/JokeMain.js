import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"
function JokeMain(){
    // we can map the components of jokesdata (array of jokes ), instead of passing each argument

    const jokeComponent = jokesData.map(function(joke) {
        return <Joke key = {joke.id} question = {joke.question} punchLine ={joke.punchLine} />
    })

    return(
        <div>
            {jokeComponent}
        </div>
    )
}

export default JokeMain