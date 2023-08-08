import { styled } from "styled-components"

const GuessesContainer = styled.div`
    margin: 0 auto;
    width: 35rem;
`

const GuessBox = styled.div`
    border-style: solid;
    height: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 0.5rem;
`

const GuessContent = ({guesses, rightAnswer, isAnswerCorrect}) => {
    return (
        <GuessesContainer>
            {!isAnswerCorrect && <div>
                <GuessBox>
                    {guesses[0] && guesses[0]}
                </GuessBox>

                <GuessBox>
                    {guesses[1] && guesses[1]}
                </GuessBox>

                <GuessBox>
                    {guesses[2] && guesses[2]}
                </GuessBox>

                <GuessBox>
                    {guesses[3] && guesses[3]}
                </GuessBox>

                <GuessBox>
                    {guesses[4] && guesses[4]}
                </GuessBox>
            </div>}
            {isAnswerCorrect && <div>You did it! {rightAnswer}</div>}
        </GuessesContainer>

    )
}

export default GuessContent
