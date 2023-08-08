import { useState } from "react"
import { styled } from "styled-components"
import { getAvailableSongs } from "../Home/configuration"
import { Typeahead } from "react-bootstrap-typeahead"

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import { Form } from "react-bootstrap";

const StyledPlayerContainer = styled.div`
    background: black;
`

const StyledPlayer = styled.div`
    width: 20%;
    height: auto;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    text-align: center;
`

const PlayButton = styled.button`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 2rem;
`

const Player = ({guesses, setGuesses}) => {
    const [userGuess, setUserGuess] = useState('')
    const [guessNumber, setGuessNumber] = useState(1)

    function handleSubmit(event) {
        event.preventDefault()

        setGuessNumber(guessNumber + 1)
        setGuesses([...guesses, userGuess])
        setUserGuess('')
    }

    function playMusic() {
        console.log('play the music')
    }

    return (
        <StyledPlayerContainer>
            <StyledPlayer>
                <PlayButton onClick={playMusic}>Play</PlayButton>
                <Form.Group>
                <Form.Label>Single Selection</Form.Label>
                <Typeahead
                        id={'Select from available songs'}
                        onChange={(selected) => {
                            setUserGuess(selected[0])
                        }}
                        options={getAvailableSongs()}
                        placeholder='Know it? Guess it!'
                        selected={[userGuess]}
                    />
                </Form.Group>
                <form onSubmit={handleSubmit}>
                    <Typeahead
                        id={'Select from available songs'}
                        onChange={(selected) => {
                            setUserGuess(selected[0])
                        }}
                        options={getAvailableSongs()}
                        placeholder='Know it? Guess it!'
                        selected={[userGuess]}
                    />
                    <button type="submit">Submit</button>
                </form>
            </StyledPlayer>
        </StyledPlayerContainer>
    )
}

export default Player
