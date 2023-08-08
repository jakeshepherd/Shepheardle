import { styled } from "styled-components"

const StyledPlayer = styled.div`
    background: black;
    margin: 0 auto;
`

const PlayButton = styled.button`
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    cursor: pointer;
`

const Player = () => {
    return (
        <StyledPlayer>
            <PlayButton>Play</PlayButton>
            <input placeholder={'Know it? Guess it!'} />
            <button>Submit</button>
        </StyledPlayer>
    )
}

export default Player
