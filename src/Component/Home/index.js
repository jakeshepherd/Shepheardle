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
        // Find today's song
        const todaysSong = getAvailableSongs().find(item => item.date === currentDate)
        setRightAnswer(todaysSong ? todaysSong.name : '')
    }, [currentDate])

    useEffect(() => {
        // Check if any guess matches today's answer
        const correct = Object.values(guesses).some(
            guess => guess && rightAnswer && guess.toLowerCase() === rightAnswer.toLowerCase()
        )
        setIsAnswerCorrect(correct)
    }, [guesses, rightAnswer])

    return (
        <>
            <Header />
            <GuessContent guesses={guesses} rightAnswer={rightAnswer} isAnswerCorrect={isAnswerCorrect}/>
            <Player guesses={guesses} setGuesses={setGuesses} songToPlay={currentDate}/>
        </>
    )
}

export default Home
