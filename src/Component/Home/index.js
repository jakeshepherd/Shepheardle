import React from "react"
import GuessContent from "../GuessContent"
import Header from "../Header"

const Home = () => {
    return (
        <>
            <Header />
            <GuessContent guess={'James Blunt'} guessTwo={'Mika'}/>
            {/* <Player /> */}
        </>

    )
}

export default Home
