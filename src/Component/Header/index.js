
import styled from 'styled-components'


const StyledHeader = styled.div`
    background: #3486eb;
`

const StyledTitle = styled.h1`
    text-align: center;
    padding: 1rem;
    color: white;
`

const Header = () => {

    return (
        <StyledHeader>
            <StyledTitle>Jeardle</StyledTitle>
        </StyledHeader>
    )
}

export default Header
