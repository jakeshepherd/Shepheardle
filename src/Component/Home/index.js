import React, { useEffect, useState } from "react"
import GuessContent from "../GuessContent"
import Header from "../Header"
import Player from "../Player"
import { getAvailableSongs } from "./configuration"

const Home = () => {
    const [guesses, setGuesses] = useState([])
    const [rightAnswer, setRightAnswer] = useState('')
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)

    useEffect(() => {
        setRightAnswer(getAvailableSongs()[0])

        guesses.map((guess) => {
            if (guess.toLowerCase() === rightAnswer.toLowerCase()) {
                console.log('you did it!')
                setIsAnswerCorrect(true)
                return true
            } else {
                console.log('wrong!')
                return false
            }
        })
    }, [guesses])

    return (
        <>
            <Header />
            <GuessContent guesses={guesses} rightAnswer={rightAnswer} isAnswerCorrect={isAnswerCorrect}/>
            <Player guesses={guesses} setGuesses={setGuesses}/>
        </>

    )
}

export default Home
