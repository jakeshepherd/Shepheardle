import React, { useEffect, useState } from "react"
import GuessContent from "../GuessContent"
import Header from "../Header"
import Player from "../Player"
import { getAvailableSongs } from "./configuration"
import moment from "moment"

const Home = () => {
    const [guesses, setGuesses] = useState({})
    const [rightAnswer, setRightAnswer] = useState('')
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
    const currentDate = moment().format('DD-MM-YYYY')

    useEffect(() => {
        const rightAnswerFromConfig = getAvailableSongs().filter(item => {
            return item.date === currentDate
        });

        setRightAnswer(rightAnswerFromConfig[0].name)

        Object.keys(guesses).map((key) => {
            if (guesses[key].toLowerCase() === rightAnswer.toLowerCase()) {
                setIsAnswerCorrect(true)
                return true
            } else {
                return false
            }
        })
    }, [guesses])

    return (
        <>
            <Header />
            <GuessContent guesses={guesses} rightAnswer={rightAnswer} isAnswerCorrect={isAnswerCorrect}/>
            <Player guesses={guesses} setGuesses={setGuesses} songToPlay={currentDate}/>
        </>

    )
}

export default Home
