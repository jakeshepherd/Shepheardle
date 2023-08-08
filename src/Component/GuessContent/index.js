import { styled } from "styled-components"

const GuessesContainer = styled.div`
    margin: 0 auto;
    width: 35rem;
`

const GuessBox = styled.div`
    border-style: solid;
    height: 2rem;
    margin-top: 1rem;
    padding-left: 0.5rem;
`

const GuessContent = ({guess, guessTwo}) => {
    return (
        <GuessesContainer>
            <GuessBox>
                {guess}
            </GuessBox>

            <GuessBox>
                {guessTwo}
            </GuessBox>

            <GuessBox>
            </GuessBox>

            <GuessBox>
            </GuessBox>

            <GuessBox>
            </GuessBox>
        </GuessesContainer>

    )
}

export default GuessContent
