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

const GuessIcon = styled.img`
    max-width: 5%;
    max-height: 5%;
`

const GuessContent = ({guesses, rightAnswer, isAnswerCorrect}) => {
    return (
        <GuessesContainer>
            {!isAnswerCorrect && <div>
                <GuessBox>
                    {guesses[1] && <div>
                        <GuessIcon src={'https://img.icons8.com/?size=512&id=OZuepOQd0omj&format=png'} />
                        {guesses[1]}
                    </div>}
                </GuessBox>

                <GuessBox>
                    {guesses[2] && <div>
                        <GuessIcon src={'https://img.icons8.com/?size=512&id=OZuepOQd0omj&format=png'} />
                        {guesses[2]}
                    </div>}
                </GuessBox>

                <GuessBox>
                    {guesses[3] && <div>
                        <GuessIcon src={'https://img.icons8.com/?size=512&id=OZuepOQd0omj&format=png'} />
                        {guesses[3]}
                    </div>}
                </GuessBox>

                <GuessBox>
                    {guesses[4] && <div>
                        <GuessIcon src={'https://img.icons8.com/?size=512&id=OZuepOQd0omj&format=png'} />
                        {guesses[4]}
                    </div>}
                </GuessBox>

                <GuessBox>
                    {guesses[5] && <div>
                        <GuessIcon src={'https://img.icons8.com/?size=512&id=OZuepOQd0omj&format=png'} />
                        {guesses[5]}
                    </div>}
                </GuessBox>
            </div>}
            {isAnswerCorrect && <div><GuessIcon src={'https://img.icons8.com/?size=512&id=VFaz7MkjAiu0&format=png'} /> You did it! {rightAnswer}</div>}
        </GuessesContainer>

    )
}

export default GuessContent
