
import styled from 'styled-components'
import logo from '../../logo.png'


const StyledHeader = styled.div`
    background: #3486eb;
`

const StyledTitle = styled.h1`
    text-align: center;
    padding: 1rem;
    color: white;
`

const StyledLogo = styled.img`
    width: 5%;
    border-radius: 70px;
`

const Header = () => {

    return (
        <StyledHeader>
            <StyledTitle><StyledLogo src={logo} /> Shepheardle</StyledTitle>
        </StyledHeader>
    )
}

export default Header
