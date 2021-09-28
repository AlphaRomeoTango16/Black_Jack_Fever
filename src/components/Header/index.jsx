import styled from 'styled-components'
import colors from '../../utils/style/colors'


const HeaderContainer = styled.div`
    background-color: ${colors.primary};
    height: 100px;
    box-shadow: 5px 5px 15px 32px #00FF05;
`

const Title = styled.h1`
    color: ${colors.secondary};
    padding: 20px 0px 0px 20px;
    margin: 0;
    font-family: 'Abril Fatface', cursive;
`

function Header() {
    return (
        <HeaderContainer>
            <Title>BLACK JACK FEVER</Title>
        </HeaderContainer>
    )
}

export default Header