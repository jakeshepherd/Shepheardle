import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { getAvailableSongs } from "../Home/configuration"
import { Typeahead } from "react-bootstrap-typeahead"

import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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
    const [audio, setAudio] = useState(null)
    const [playingMusic, setPlayingMusic] = useState(false)

    const creds = {
        accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
    }

    const client = new S3Client({
        region: process.env.REACT_APP_REGION,
        credentials: creds
    })

    const command = new GetObjectCommand({
        Bucket: "jeardle",
        Key: "beautiful"
    })


    useEffect(() => {
        async function fetchData() {
            try {
                const url = await getSignedUrl(client, command, { expiresIn: 3600 })

                setAudio(new Audio(url))
              } catch (err) {
                console.error(err);
              }
        }
        fetchData()
    }, [])


    useEffect(() => {
        if (playingMusic) {
            audio.play()
        } else if (audio !== null) {
            audio.pause()
        }
    }, [playingMusic])

    function handleSubmit(event) {
        event.preventDefault()

        setGuessNumber(guessNumber + 1)
        setGuesses([...guesses, userGuess])
        setUserGuess('')
    }

    function playMusic() {
        setPlayingMusic(!playingMusic)
    }

    return (
        <StyledPlayerContainer>
            <StyledPlayer>
                <PlayButton onClick={playMusic}>Play</PlayButton>
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
