import { useEffect, useState } from "react"
import { styled } from "styled-components"
import { getAvailableSongs, getTodaysSong } from "../Home/configuration"
import { Typeahead } from "react-bootstrap-typeahead"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import 'react-bootstrap-typeahead/css/Typeahead.bs5.css';

const StyledPlayerContainer = styled.div`
    background: #3486eb;
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
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    cursor: pointer;
    margin-bottom: 1rem;
    border-color: #3486eb;
`

const SubmitButton = styled.button`
    margin-top: 1rem;
    background: #3486eb;
    color: white;
    border-color: white;
    border-radius: 12px;
    font-size: 20px;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
`

const StyledAudioButton = styled.img`
    width: 70%;
    height: auto;
`

const Player = ({guesses, setGuesses, songToPlay}) => {
    const songLengthIncrement = 2000
    const [guessNumber, setGuessNumber] = useState(1)
    const [audio, setAudio] = useState(null)
    const [playingMusic, setPlayingMusic] = useState(false)
    const [songLength, setSongLength] = useState(songLengthIncrement)
    const [singleSelections, setSingleSelections] = useState([])

    // Get today's song object
    const todaysSong = getTodaysSong(songToPlay)

    useEffect(() => {
        if (todaysSong && todaysSong.audioUrl) {
            setAudio(new Audio(todaysSong.audioUrl))
        } else {
            setAudio(null)
        }
    }, [todaysSong])

    useEffect(() => {
        if (playingMusic && audio) {
            audio.play()
            setTimeout(() => {
                audio.pause()
                setPlayingMusic(false)
                audio.load()
            }, songLength)
        } else if (audio) {
            audio.pause()
        }
    }, [playingMusic, audio, songLength])

    useEffect(() => {
        setSongLength(songLength + songLengthIncrement)
        setPlayingMusic(false)
    }, [guessNumber])

    function handleSubmit(event) {
        event.preventDefault()
        if (singleSelections[0]) {
            const name = singleSelections[0].name
            setGuesses({...guesses, [guessNumber]: name})
            setGuessNumber(guessNumber + 1)
            setSingleSelections([])
        }
    }

    function playMusic() {
        setPlayingMusic(!playingMusic)
    }

    return (
        <StyledPlayerContainer>
            <StyledPlayer>
                <PlayButton onClick={playMusic} disabled={!audio}>
                    {playingMusic ? <StyledAudioButton src='https://img.icons8.com/?size=512&id=Z2aInWmsldJ6&format=png'/>
                       : <StyledAudioButton src='https://img.icons8.com/?size=512&id=nMSSSpYre8pz&format=png'/>}
                </PlayButton>
                {!audio && <div style={{color: 'white'}}>No audio available for today's song.</div>}
                <form onSubmit={handleSubmit}>
                    <Typeahead
                        id="basic-typeahead-single"
                        labelKey="name"
                        onChange={setSingleSelections}
                        options={getAvailableSongs()}
                        placeholder="Know it? Guess it!"
                        selected={singleSelections}
                    />
                    <SubmitButton type="submit">Submit</SubmitButton>
                </form>
            </StyledPlayer>
        </StyledPlayerContainer>
    )
}

export default Player
